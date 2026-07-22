# Website TIDAR — Astro Deploy

Versi Astro statis dari website TIDAR. Tampilan, konten, nama halaman `.html`, CSS, JavaScript, dan aset lokal dipertahankan agar hasil deploy sama dengan versi sebelumnya.

## Persyaratan

- Node.js 22.12.0 atau lebih baru
- npm

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Build produksi

```bash
npm run build
```

Hasil build berada di folder `dist/`.

Konfigurasi memakai `output: 'static'` dan `build.format: 'file'`, sehingga tautan lama seperti `profil.html`, `berita.html`, dan halaman detail berita tetap kompatibel.

## Deploy melalui Git

Gunakan pengaturan berikut pada Cloudflare Pages, Vercel, Netlify, atau penyedia static hosting lain:

- Framework preset: Astro
- Build command: `npm run build`
- Output/publish directory: `dist`
- Node.js: 22.12.0 atau lebih baru

## Deploy manual ke cPanel/VPS

1. Jalankan `npm install`.
2. Jalankan `npm run build`.
3. Unggah seluruh isi folder `dist/` ke document root hosting, misalnya `public_html/`.

## Memperbarui daftar berita

1. Edit `news-data.json`.
2. Jalankan:

```bash
python tools/build_news.py
```

3. Jalankan kembali `npm run build`.

## Validasi referensi lokal

```bash
npm run check:links
```
