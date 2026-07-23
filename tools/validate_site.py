#!/usr/bin/env python3
"""Validate local references in Astro pages and public files."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import sys

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "src" / "pages"
PUBLIC = ROOT / "public"

class RefParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        for key in ("href", "src", "poster"):
            value = data.get(key)
            if value:
                self.refs.append((tag, key, value))

errors = []
page_names = {p.stem for p in PAGES.glob('*.astro')}
for page in sorted(PAGES.glob('*.astro')):
    parser = RefParser()
    parser.feed(page.read_text(encoding='utf-8'))
    for tag, attr, raw in parser.refs:
        url = urlsplit(raw)
        if url.scheme or raw.startswith(('#', '//', 'mailto:', 'tel:', 'data:', 'javascript:')):
            continue
        path = url.path
        if not path:
            continue
        if path.endswith('.html'):
            target = Path(path).stem
            if target not in page_names:
                errors.append(f"{page.name}: halaman tidak ditemukan: {raw}")
            continue
        target = PUBLIC / path.lstrip('/')
        if not target.exists():
            errors.append(f"{page.name}: aset tidak ditemukan: {raw}")

for required in ('styles.css', 'pages.css', 'script.js', 'assets'):
    if not (PUBLIC / required).exists():
        errors.append(f"public/{required} tidak ditemukan")

if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f"Valid: {len(page_names)} halaman Astro dan seluruh referensi lokal ditemukan.")
