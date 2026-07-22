#!/usr/bin/env python3
"""Regenerate static news cards and category filters from news-data.json.

Usage from the website folder:
    python tools/build_news.py
"""
from pathlib import Path
from html import escape
import json
import re

ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "news-data.json"
PAGE_FILE = ROOT / "src" / "pages" / "berita.astro"


def required(item, key, index):
    value = item.get(key)
    if value is None or str(value).strip() == "":
        raise ValueError(f"Berita ke-{index + 1}: kolom '{key}' wajib diisi")
    return str(value).strip()


def render_card(item, index):
    category_slug = required(item, "category_slug", index)
    category = required(item, "category", index)
    image = required(item, "image", index)
    image_alt = required(item, "image_alt", index)
    title = required(item, "title", index)
    subtitle = required(item, "subtitle", index)
    date_label = required(item, "date_label", index)
    read_time = required(item, "read_time", index)
    url = required(item, "url", index)
    date_iso = str(item.get("date_iso", "")).strip()
    featured = bool(item.get("featured", False))
    classes = "news-modern-card news-modern-card--featured" if featured else "news-modern-card"
    loading = "eager" if featured else "lazy"
    return f"""<article class=\"{classes}\" data-news-category=\"{escape(category_slug)}\">
<a aria-label=\"Baca {escape(title)}\" class=\"news-modern-image\" href=\"{escape(url)}\">
<img alt=\"{escape(image_alt)}\" decoding=\"async\" loading=\"{loading}\" src=\"{escape(image)}\"/>
<span class=\"news-category-chip\">{escape(category)}</span>
</a>
<div class=\"news-modern-copy\">
<div class=\"news-modern-meta\"><time datetime=\"{escape(date_iso)}\">{escape(date_label)}</time><span>{escape(read_time)}</span></div>
<h2><a href=\"{escape(url)}\">{escape(title)}</a></h2>
<p>{escape(subtitle)}</p>
<a class=\"news-read-link\" href=\"{escape(url)}\">Baca selengkapnya <span aria-hidden=\"true\">↗</span></a>
</div>
</article>"""


def replace_between(text, start, end, replacement):
    pattern = re.compile(rf"({re.escape(start)})(.*?)({re.escape(end)})", re.S)
    updated, count = pattern.subn(lambda m: m.group(1) + "\n" + replacement + "\n" + m.group(3), text, count=1)
    if count != 1:
        raise RuntimeError(f"Penanda {start} / {end} tidak ditemukan atau duplikat")
    return updated


def main():
    items = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    if not isinstance(items, list) or not items:
        raise ValueError("news-data.json harus berisi daftar berita yang tidak kosong")
    cards = "\n".join(render_card(item, i) for i, item in enumerate(items))
    categories = []
    seen = set()
    for i, item in enumerate(items):
        slug = required(item, "category_slug", i)
        label = required(item, "category", i)
        if slug not in seen:
            seen.add(slug)
            categories.append((slug, label))
    options = ['<option value="semua">Semua</option>']
    options.extend(f'<option value="{escape(slug)}">{escape(label)}</option>' for slug, label in categories)
    page = PAGE_FILE.read_text(encoding="utf-8")
    page = replace_between(page, "<!-- NEWS_FILTER_OPTIONS_START -->", "<!-- NEWS_FILTER_OPTIONS_END -->", "".join(options))
    page = replace_between(page, "<!-- NEWS_CARDS_START -->", "<!-- NEWS_CARDS_END -->", cards)
    PAGE_FILE.write_text(page, encoding="utf-8")
    print(f"Selesai: {len(items)} berita ditulis ke src/pages/berita.astro")


if __name__ == "__main__":
    main()
