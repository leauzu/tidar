import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShareActions } from "@/components/berita/ShareActions";
import { beritaArticles, getBeritaArticle } from "@/data/berita";
import styles from "@/components/berita/Berita.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return beritaArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBeritaArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/berita/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.dateISO,
      images: [article.image],
    },
  };
}

export default async function BeritaDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getBeritaArticle(slug);
  if (!article) notFound();

  const currentIndex = beritaArticles.findIndex((item) => item.slug === article.slug);
  const related = beritaArticles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .concat(beritaArticles.filter((item) => item.slug !== article.slug && item.category !== article.category))
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className={styles.articlePage}>
        <article>
          <header className={`page-width ${styles.articleHeader}`}>
            <Link className={styles.backLink} href="/berita"><span aria-hidden="true">←</span> Kembali ke berita</Link>
            <p className={styles.meta}><span>{article.category}</span><time dateTime={article.dateISO}>{article.date}</time></p>
            <h1>{article.title}</h1>
            <p className={styles.articleDeck}>{article.excerpt}</p>
            <div className={styles.articleByline}><span>{article.author}</span><span>Berita {String(currentIndex + 1).padStart(2, "0")}</span></div>
          </header>

          <figure className={styles.articleHero}>
            <img src={article.image} alt="Dokumentasi artikel TIDAR" style={{ objectPosition: article.imagePosition ?? "center" }} />
          </figure>

          <div className={`page-width ${styles.articleLayout}`}>
            <aside className={styles.articleAside}>
              <ShareActions title={article.title} />
            </aside>
            <div className={styles.articleBody}>
              {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </article>

        <section className={styles.relatedSection} aria-labelledby="berita-terkait">
          <div className={`page-width ${styles.relatedHead}`}>
            <p className={styles.eyebrow}>BACA SELANJUTNYA</p>
            <h2 id="berita-terkait">Berita terkait.</h2>
          </div>
          <div className={`page-width ${styles.relatedGrid}`}>
            {related.map((item) => (
              <article key={item.slug}>
                <Link className={styles.relatedImage} href={`/berita/${item.slug}`}>
                  <img src={item.image} alt="" loading="lazy" style={{ objectPosition: item.imagePosition ?? "center" }} />
                </Link>
                <p className={styles.meta}><span>{item.category}</span><time dateTime={item.dateISO}>{item.date}</time></p>
                <h3><Link href={`/berita/${item.slug}`}>{item.title}</Link></h3>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
