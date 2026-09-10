import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsArchive } from "@/components/berita/NewsArchive";
import { beritaArticles } from "@/data/berita";
import styles from "@/components/berita/Berita.module.css";

export const metadata: Metadata = {
  title: "Berita TIDAR | Tunas Indonesia Raya",
  description: "Berita terbaru mengenai kegiatan, program, kaderisasi, dan perkembangan Tunas Indonesia Raya.",
  alternates: { canonical: "/berita" },
  openGraph: {
    title: "Berita TIDAR | Tunas Indonesia Raya",
    description: "Kabar organisasi, program, kaderisasi, dan kegiatan terbaru TIDAR.",
    images: [beritaArticles[0].image],
  },
};

export default function BeritaPage() {
  const topStories = beritaArticles.slice(0, 4);
  const highlightedSlugs = topStories.map((article) => article.slug);

  return (
    <>
      <Header />
      <main className={styles.newsPage}>
        <section className={styles.topStoriesSection} aria-labelledby="berita-utama-title">
          <div className={`page-width ${styles.topStoriesLayout}`}>
            <header className={styles.topStoriesHeader}>
              <p className={styles.topStoriesLabel}>MEDIA TIDAR</p>
              <h1 id="berita-utama-title">BERITA<br />UTAMA</h1>
              <p>Empat kabar terbaru tentang gerak, program, dan kegiatan Tunas Indonesia Raya.</p>
            </header>

            <div className={styles.topStoriesList}>
              {topStories.map((article, index) => (
                <article className={`${styles.topStory} ${index === 0 ? styles.topStoryLead : ""}`} key={article.slug}>
                  <div className={styles.topStoryCopy}>
                    <p className={styles.meta}>
                      <span>{article.category}</span>
                      <time dateTime={article.dateISO}>{article.date}</time>
                    </p>
                    <h2>
                      <Link href={`/berita/${article.slug}`}>{article.title}</Link>
                    </h2>
                    {index === 0 ? <p className={styles.topStoryExcerpt}>{article.excerpt}</p> : null}
                    <Link className={styles.topStoryLink} href={`/berita/${article.slug}`} aria-label={`Baca ${article.title}`}>
                      Baca berita <span aria-hidden="true">↗</span>
                    </Link>
                  </div>

                  <Link className={styles.topStoryImage} href={`/berita/${article.slug}`} aria-label={`Baca ${article.title}`}>
                    <img
                      src={article.image}
                      alt={index === 0 ? "Dokumentasi kegiatan TIDAR" : ""}
                      loading={index === 0 ? undefined : "lazy"}
                      style={{ objectPosition: article.imagePosition ?? "center" }}
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <NewsArchive articles={beritaArticles} highlightedSlugs={highlightedSlugs} />

        <section className={styles.newsCta}>
          <div className={`page-width ${styles.newsCtaInner}`}>
            <h2>Ikuti gerak.<br />Baca kabarnya.</h2>
            <p>Jelajahi berita organisasi, program, kaderisasi, dan kegiatan TIDAR dari pusat hingga daerah.</p>
            <a className={styles.arrowLink} href="#semua-berita">Kembali ke arsip berita <span aria-hidden="true">↑</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
