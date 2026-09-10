"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BeritaArticle } from "@/data/berita";
import { beritaCategories } from "@/data/berita";
import styles from "./Berita.module.css";

type Props = {
  articles: readonly BeritaArticle[];
  highlightedSlugs: readonly string[];
};

export function NewsArchive({ articles, highlightedSlugs }: Props) {
  const [category, setCategory] = useState<(typeof beritaCategories)[number]>("Semua");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase("id-ID");
    const hasActiveFilter = category !== "Semua" || Boolean(keyword);

    return articles.filter((article) => {
      if (!hasActiveFilter && highlightedSlugs.includes(article.slug)) return false;
      const categoryMatch = category === "Semua" || article.category === category;
      const haystack = `${article.title} ${article.excerpt} ${article.category}`.toLocaleLowerCase("id-ID");
      return categoryMatch && (!keyword || haystack.includes(keyword));
    });
  }, [articles, category, highlightedSlugs, query]);

  return (
    <section className={styles.archiveSection} id="semua-berita" aria-labelledby="semua-berita-title">
      <div className={`page-width ${styles.archiveHeader}`}>
        <h2 id="semua-berita-title">ARSIP BERITA</h2>
      </div>

      <div className={`page-width ${styles.tools}`}>
        <label className={styles.search}>
          <span className="sr-only">Cari berita</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari berita..."
          />
        </label>

        <div className={styles.filterRail} role="group" aria-label="Filter kategori berita">
          {beritaCategories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              className={category === item ? styles.filterActive : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className={`page-width ${styles.archiveList}`} aria-live="polite">
        {filtered.map((article, index) => (
          <article className={styles.archiveItem} key={article.slug}>
            <div className={styles.archiveNumber}>{String(index + 1).padStart(2, "0")}</div>
            <Link className={styles.archiveImage} href={`/berita/${article.slug}`} aria-label={`Baca ${article.title}`}>
              <img src={article.image} alt="" loading="lazy" style={{ objectPosition: article.imagePosition ?? "center" }} />
            </Link>
            <div className={styles.archiveCopy}>
              <p className={styles.meta}><span>{article.category}</span><time dateTime={article.dateISO}>{article.date}</time></p>
              <h3><Link href={`/berita/${article.slug}`}>{article.title}</Link></h3>
              <p>{article.excerpt}</p>
            </div>
            <Link className={styles.archiveArrow} href={`/berita/${article.slug}`} aria-label={`Baca ${article.title}`}><span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className={`page-width ${styles.emptyState}`} role="status">
          <strong>Berita tidak ditemukan.</strong>
          <p>Coba gunakan kata kunci atau kategori lain.</p>
        </div>
      ) : null}
    </section>
  );
}
