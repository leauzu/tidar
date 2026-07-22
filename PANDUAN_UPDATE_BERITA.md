# Panduan singkat memperbarui Berita

Halaman berita tetap berupa HTML statis sehingga ramah SEO dan dapat dibuka tanpa sistem basis data.

1. Buka `news-data.json`.
2. Salin satu objek berita, lalu ubah kategori, gambar, judul, ringkasan, tanggal, waktu baca, dan URL halaman detail.
3. Simpan gambar baru di folder `assets/`.
4. Buat halaman detail baru dengan menyalin salah satu file `berita-*.html`, kemudian ganti isi artikelnya.
5. Dari folder utama website, jalankan:

```bash
python tools/build_news.py
```

Script akan memperbarui kartu berita serta pilihan kategori secara otomatis tanpa mengubah desain. Hanya satu berita sebaiknya memakai `"featured": true`.


## Sumber artikel
Untuk berita hasil ringkasan media lain, simpan `source_name` dan `source_url` pada `news-data.json`, lalu tampilkan tautan sumber pada halaman detail.
