export type BeritaCategory = "Organisasi" | "Program" | "Kaderisasi" | "Sosial" | "Kegiatan";

export type BeritaArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: BeritaCategory;
  date: string;
  dateISO: string;
  image: string;
  imagePosition?: string;
  featured?: boolean;
  author: string;
  body: readonly string[];
  sourceUrl?: string;
};

export const beritaArticles: readonly BeritaArticle[] = [
  {
    slug: "lima-program-utama-tidar-ruang-kontribusi-pemuda",
    title: "Lima Program Utama TIDAR Buka Ruang Kontribusi Pemuda",
    excerpt: "TIDAR menghadirkan ruang aspirasi, aksi sosial, digitalisasi organisasi, olahraga, dan kaderisasi sebagai jalur kontribusi generasi muda.",
    category: "Program",
    date: "10 September 2026",
    dateISO: "2026-09-10",
    image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1800",
    featured: true,
    author: "Media TIDAR",
    sourceUrl: "https://www.tidar.or.id/",
    body: [
      "TIDAR membuka beragam ruang kontribusi agar generasi muda dapat belajar, bergerak, dan berkarya melalui kegiatan yang dekat dengan kebutuhan masyarakat dan organisasi.",
      "Program utama yang ditampilkan TIDAR mencakup TIDAR Mendengar, TIDAR Peduli, Aplikasi TIDAR, Garuda Putih, dan Pelatihan Tunas. Masing-masing memberi jalur partisipasi yang berbeda, mulai dari aspirasi masyarakat hingga pengembangan kapasitas kader.",
      "Rangkaian program tersebut menempatkan anak muda bukan hanya sebagai peserta, tetapi sebagai penggerak yang belajar mengelola kegiatan, bekerja bersama, dan menghasilkan kontribusi yang relevan di lingkungannya."
    ]
  },
  {
    slug: "kolaborasi-tidar-kawal-standar-mbg-singkawang",
    title: "Kolaborasi TIDAR Kawal Standar MBG di Singkawang",
    excerpt: "TIDAR bersama DPRD dan organisasi masyarakat meninjau pelaksanaan MBG untuk memastikan pengolahan, kebersihan, dan distribusi makanan memenuhi standar BGN.",
    category: "Sosial",
    date: "8 Mei 2026",
    dateISO: "2026-05-08",
    image: "https://images.pexels.com/photos/37853487/pexels-photo-37853487.jpeg?auto=compress&cs=tinysrgb&w=1800",
    featured: true,
    author: "Media TIDAR",
    sourceUrl: "https://www.tidar.or.id/berita/",
    body: [
      "TIDAR bersama DPRD dan organisasi masyarakat meninjau pelaksanaan program Makan Bergizi Gratis di Singkawang. Pemantauan difokuskan pada proses pengolahan, kebersihan, serta distribusi makanan kepada penerima manfaat.",
      "Kegiatan ini menjadi bagian dari upaya mendorong pelaksanaan program publik yang tertib, aman, dan sesuai standar Badan Gizi Nasional. Kolaborasi lintas unsur dinilai penting agar evaluasi dapat dilakukan secara terbuka dan tepat sasaran.",
      "TIDAR mendorong keterlibatan generasi muda dalam pengawasan sosial yang konstruktif, sekaligus memperkuat komunikasi antara masyarakat dan pemangku kepentingan di daerah."
    ]
  },
  {
    slug: "tidar-dorong-reformasi-sistem-daycare-nasional",
    title: "TIDAR Dorong Reformasi Menyeluruh Sistem Daycare Nasional",
    excerpt: "TIDAR mendorong pengawasan, pembenahan regulasi, dan peningkatan profesionalisme tenaga pengasuh demi ruang tumbuh yang aman bagi anak.",
    category: "Sosial",
    date: "29 April 2026",
    dateISO: "2026-04-29",
    image: "https://images.pexels.com/photos/35548840/pexels-photo-35548840.jpeg?auto=compress&cs=tinysrgb&w=1800",
    featured: true,
    author: "Media TIDAR",
    sourceUrl: "https://www.tidar.or.id/berita/",
    body: [
      "TIDAR mendorong pembenahan menyeluruh terhadap sistem daycare di Indonesia dengan menempatkan keselamatan dan kepentingan terbaik anak sebagai prioritas.",
      "Penguatan pengawasan, kejelasan regulasi, serta peningkatan kompetensi tenaga pengasuh menjadi beberapa hal yang perlu diperhatikan agar layanan penitipan anak memiliki standar yang konsisten.",
      "TIDAR menilai perlindungan anak membutuhkan kerja bersama antara pemerintah, pengelola layanan, keluarga, dan masyarakat untuk menciptakan ruang tumbuh yang aman dan bertanggung jawab."
    ]
  },
  {
    slug: "tunas-3-blitar-anak-muda-berkarya-nyata",
    title: "Tunas 3 di Blitar Dorong Anak Muda Hadir dan Berkarya Nyata",
    excerpt: "Pelatihan berjenjang mengajak generasi muda terlibat langsung dalam pengabdian, organisasi, dan pembangunan daerah.",
    category: "Kaderisasi",
    date: "11 Februari 2026",
    dateISO: "2026-02-11",
    image: "https://images.pexels.com/photos/35646601/pexels-photo-35646601.jpeg?auto=compress&cs=tinysrgb&w=1800",
    featured: true,
    author: "Media TIDAR",
    sourceUrl: "https://www.tidar.or.id/berita/",
    body: [
      "Pelatihan Tunas 3 di Blitar menjadi ruang penguatan kapasitas bagi generasi muda yang ingin terlibat lebih aktif dalam organisasi dan pengabdian masyarakat.",
      "Rangkaian kegiatan menekankan pentingnya kepemimpinan, disiplin organisasi, kerja sama, dan kemampuan membaca kebutuhan di lingkungan sekitar.",
      "Melalui kaderisasi berjenjang, TIDAR mendorong peserta untuk menerjemahkan proses belajar menjadi kontribusi nyata yang relevan bagi daerahnya masing-masing."
    ]
  },
  {
    slug: "rahayu-saraswati-kembali-pimpin-pp-tidar",
    title: "Rahayu Saraswati Kembali Terpilih Memimpin PP TIDAR",
    excerpt: "Kongres IV memberikan amanah baru kepada Rahayu Saraswati untuk melanjutkan kepemimpinan dengan fokus pada kaderisasi inklusif dan kontribusi pemuda.",
    category: "Organisasi",
    date: "18 Mei 2025",
    dateISO: "2025-05-18",
    image: "/assets/home/home-mobile.jpg",
    imagePosition: "55% 42%",
    featured: true,
    author: "Media TIDAR",
    sourceUrl: "https://www.tidar.or.id/berita-rahayu-ketua-umum/",
    body: [
      "Kongres IV TIDAR kembali memberikan amanah kepemimpinan kepada Rahayu Saraswati Djojohadikusumo untuk memimpin Pengurus Pusat TIDAR.",
      "Kepemimpinan periode berikutnya diarahkan pada penguatan kaderisasi yang inklusif, perluasan ruang kontribusi, serta konsolidasi organisasi dari pusat hingga daerah.",
      "TIDAR menempatkan generasi muda sebagai bagian penting dari proses pembangunan, dengan organisasi berperan sebagai ruang belajar, pengabdian, dan pengembangan kepemimpinan."
    ]
  },
  {
    slug: "kongres-iv-kepemimpinan-sebagai-pengabdian",
    title: "Kongres IV TIDAR Tekankan Kepemimpinan sebagai Pengabdian",
    excerpt: "Kongres IV mempertemukan perwakilan dari 38 provinsi dan jaringan luar negeri serta menegaskan kepemimpinan sebagai pengabdian.",
    category: "Organisasi",
    date: "17 Mei 2025",
    dateISO: "2025-05-17",
    image: "/assets/home/hero-video-poster.jpg",
    imagePosition: "50% 48%",
    author: "Media TIDAR",
    sourceUrl: "https://www.tidar.or.id/berita-kongres-iv/",
    body: [
      "Kongres IV TIDAR mempertemukan perwakilan organisasi dari 38 provinsi serta jaringan luar negeri dalam forum konsolidasi dan regenerasi kepemimpinan.",
      "Forum menegaskan bahwa kepemimpinan tidak berhenti pada jabatan, tetapi diwujudkan melalui tanggung jawab, pelayanan, dan keberanian mengambil peran di tengah masyarakat.",
      "Kongres juga menjadi ruang penyelarasan arah organisasi agar program kaderisasi dan pengabdian dapat berjalan lebih terhubung di berbagai daerah."
    ]
  },
  {
    slug: "tunas-3-musdalub-perkuat-tidar-jawa-tengah",
    title: "Tunas 3 dan Musdalub Perkuat TIDAR Jawa Tengah",
    excerpt: "Pelatihan kader dan Musdalub memperkuat konsolidasi organisasi sekaligus regenerasi kepemimpinan TIDAR Jawa Tengah.",
    category: "Kaderisasi",
    date: "13 Mei 2025",
    dateISO: "2025-05-13",
    image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1800",
    author: "Media TIDAR",
    sourceUrl: "https://www.tidar.or.id/berita/",
    body: [
      "Pelatihan Tunas 3 dan Musyawarah Daerah Luar Biasa menjadi momentum konsolidasi bagi jaringan TIDAR di Jawa Tengah.",
      "Agenda kaderisasi berjalan bersamaan dengan proses penguatan struktur agar regenerasi kepemimpinan tetap terjaga dan koordinasi antardaerah semakin efektif.",
      "TIDAR Jawa Tengah diarahkan untuk memperluas kegiatan yang relevan dengan kebutuhan generasi muda dan masyarakat di wilayahnya."
    ]
  },
  {
    slug: "tidar-ampi-politik-damai-generasi-muda",
    title: "TIDAR dan AMPI Gaungkan Politik Damai untuk Generasi Muda",
    excerpt: "Kolaborasi organisasi kepemudaan menegaskan bahwa perbedaan pilihan politik dapat dijalankan secara dewasa, damai, dan tetap menjaga persatuan.",
    category: "Kegiatan",
    date: "5 Mei 2023",
    dateISO: "2023-05-05",
    image: "https://images.pexels.com/photos/36111585/pexels-photo-36111585.jpeg?auto=compress&cs=tinysrgb&w=1800",
    author: "Media TIDAR",
    sourceUrl: "https://www.tidar.or.id/berita-persatuan/",
    body: [
      "TIDAR dan Angkatan Muda Pembaharuan Indonesia mendorong generasi muda untuk membangun budaya politik yang dewasa, damai, dan tetap menghormati perbedaan pilihan.",
      "Kolaborasi organisasi kepemudaan menjadi ruang untuk memperluas dialog serta menunjukkan bahwa kompetisi politik tidak harus mengurangi persatuan di tengah masyarakat.",
      "Pesan yang dibawa menempatkan anak muda sebagai kelompok yang dapat menjaga kualitas ruang publik melalui sikap kritis, terbuka, dan bertanggung jawab."
    ]
  },
  {
    slug: "kader-muda-tidar-perkuat-konsolidasi-organisasi",
    title: "Kader Muda TIDAR Perkuat Konsolidasi Organisasi",
    excerpt: "Konsolidasi menjadi ruang belajar bagi kader muda TIDAR untuk membangun disiplin, kerja tim, dan kedekatan dengan masyarakat.",
    category: "Kaderisasi",
    date: "29 November 2021",
    dateISO: "2021-11-29",
    image: "https://images.pexels.com/photos/12719273/pexels-photo-12719273.jpeg?auto=compress&cs=tinysrgb&w=1800",
    author: "Media TIDAR",
    sourceUrl: "https://tidar.or.id/berita-konsolidasi/",
    body: [
      "Konsolidasi organisasi menjadi salah satu fondasi penting dalam menjaga komunikasi, disiplin gerakan, dan hubungan kader dengan masyarakat.",
      "Bagi kader muda TIDAR, proses ini menjadi ruang belajar untuk memahami kerja organisasi, kepemimpinan, loyalitas pada nilai perjuangan, dan tanggung jawab sosial secara langsung.",
      "Dengan organisasi yang tertata, kegiatan sosial, pendidikan politik, dan pelayanan masyarakat dapat dijalankan secara lebih konsisten dan bertanggung jawab."
    ]
  },
  {
    slug: "tidar-buka-ruang-minat-pemuda-umkm-olahraga",
    title: "TIDAR Buka Ruang Minat Pemuda dari UMKM hingga Olahraga",
    excerpt: "Ruang program TIDAR mempertemukan pengembangan kewirausahaan, olahraga, aksi sosial, dan solidaritas dalam kegiatan generasi muda.",
    category: "Program",
    date: "29 November 2021",
    dateISO: "2021-11-29",
    image: "https://images.pexels.com/photos/8199133/pexels-photo-8199133.jpeg?auto=compress&cs=tinysrgb&w=1800",
    author: "Media TIDAR",
    sourceUrl: "https://tidar.or.id/berita-umkm/",
    body: [
      "TIDAR memperkenalkan ruang kegiatan yang mencakup pengembangan UMKM dan olahraga sebagai cara menjangkau minat generasi muda yang beragam.",
      "Kegiatan kewirausahaan membantu peserta membangun kemandirian ekonomi dan kemampuan mengelola usaha, sementara olahraga membentuk disiplin, sportivitas, konsentrasi, dan kerja sama.",
      "Program berbasis minat menjadi pintu masuk menuju kaderisasi yang relevan dengan kehidupan anak muda sekaligus memperkuat semangat kebangsaan dan pengabdian."
    ]
  }
] as const;

export const beritaCategories = ["Semua", "Organisasi", "Program", "Kaderisasi", "Sosial", "Kegiatan"] as const;

export function getBeritaArticle(slug: string) {
  return beritaArticles.find((article) => article.slug === slug);
}
