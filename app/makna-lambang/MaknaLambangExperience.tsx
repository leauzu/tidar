"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { lambangParts } from "@/data/site";

const emblem = "/images/Logo_TIDAR-removebg-preview.png";

const focusMeta = [
  { label: "Bentuk", position: "50% 5%", size: "148%" },
  { label: "Warna", position: "50% 9%", size: "142%" },
  { label: "Arah", position: "42% 7%", size: "178%" },
  { label: "Visi", position: "43% 2%", size: "265%" },
  { label: "Keberanian", position: "67% 21%", size: "215%" },
  { label: "Fondasi", position: "62% 39%", size: "168%" },
  { label: "Kemakmuran", position: "44% 44%", size: "184%" },
  { label: "Lima Cinta", position: "52% 39%", size: "143%" },
] as const;

function renderPartTitle(title: string) {
  if (title === "Warna Kuning") {
    return <span className="ml-text-yellow">KUNING</span>;
  }

  if (title === "Alur Merah pada Leher") {
    return <>Alur <span className="ml-text-red">Merah</span> pada Leher</>;
  }

  if (title === "Kepak Sayap Merah") {
    return <>Kepak Sayap <span className="ml-text-red">Merah</span></>;
  }

  if (title === "Alur Kuning") {
    return <>Alur <span className="ml-text-yellow">Kuning</span></>;
  }

  return title;
}

export function MaknaLambangExperience() {
  const [active, setActive] = useState(0);
  const storyRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    const items = Array.from(story.querySelectorAll<HTMLElement>("[data-ml-part]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.mlPart ?? 0);
        setActive(index);
      },
      { rootMargin: "-28% 0px -28% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = hero.getBoundingClientRect();
      const travel = Math.max(1, hero.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      hero.style.setProperty("--ml-hero-progress", progress.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const focus = focusMeta[active];

  return (
    <main className="makna-lambang">
      <section className="ml-hero-stage" ref={heroRef} aria-labelledby="ml-title">
        <div className="ml-hero">
          <div className="ml-hero__wash" aria-hidden="true" />
          <div className="ml-hero__mark" aria-hidden="true">
            <Image src={emblem} alt="" fill priority sizes="76vw" />
          </div>
          <div className="page-width ml-hero__content">
            <h1 id="ml-title"><span>MAKNA</span><span>LAMBANG</span></h1>
            <div className="ml-hero__bottom">
              <p>Lambang TIDAR merangkum identitas, nilai, dan semangat organisasi dalam satu tanda.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ml-prologue" aria-labelledby="ml-prologue-title">
        <div className="page-width ml-prologue__grid">
          <div>
            <h2 id="ml-prologue-title">Bukan sekadar tanda. Sebuah arah yang dirangkum menjadi bentuk.</h2>
            <p>
              Lambang TIDAR menyatukan kepala garuda, arah pandang, mata, alur warna,
              dan lima kepak sayap menjadi satu bahasa visual. Setiap unsur membawa
              makna yang saling menguatkan.
            </p>
          </div>
        </div>
      </section>

      <section className="ml-story" ref={storyRef} aria-labelledby="ml-story-title">
        <div className="ml-story__visual" aria-hidden="true">
          <div className="ml-story__visual-inner">
            <div className="ml-story__counter">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <i />
              <span>08</span>
            </div>
            <div className="ml-story__canvas">
              <Image className="ml-story__base" src={emblem} alt="" fill sizes="48vw" />
              <div
                className="ml-story__focus"
                style={{
                  backgroundImage: `url(${emblem})`,
                  backgroundPosition: focus.position,
                  backgroundSize: focus.size,
                }}
              >
                <span>{focus.label}</span>
              </div>
            </div>
            <p className="ml-story__caption">Lambang resmi TIDAR — Tunas Indonesia Raya</p>
          </div>
        </div>

        <div className="ml-story__rail">
          <div className="ml-story__intro">
            <h2 id="ml-story-title">Delapan unsur.<br />Satu karakter.</h2>
            <p>Bergerak dari bentuk utama hingga filosofi di balik lima kepak sayap.</p>
          </div>

          {lambangParts.map(([title, description], index) => (
            <article
              className={`ml-part${active === index ? " is-active" : ""}`}
              data-ml-part={index}
              key={title}
            >
              <div className="ml-part__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
                <small>{focusMeta[index].label}</small>
              </div>
              <h3>{renderPartTitle(title)}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ml-finale" aria-labelledby="ml-finale-title">
        <div className="ml-finale__glow" aria-hidden="true" />
        <div className="page-width ml-finale__grid">
          <div className="ml-finale__copy">
            <h2 id="ml-finale-title">Semua unsur kembali menjadi satu.</h2>
            <p>
              Kepala garuda, warna, arah pandang, alur, dan kepak sayap menyatu menjadi
              lambang TIDAR: identitas yang membawa kepemimpinan, keberanian, kemakmuran,
              ketegasan, visi positif, dan Lima Cinta.
            </p>
            <div className="ml-finale__statement">SATU LAMBANG. <span className="ml-finale__accent">DELAPAN UNSUR.</span> <span className="ml-text-yellow">LIMA CINTA.</span></div>
          </div>
          <figure className="ml-finale__emblem">
            <Image
              src={emblem}
              alt="Lambang resmi TIDAR — Tunas Indonesia Raya"
              width={2048}
              height={1917}
              sizes="(max-width: 800px) 82vw, 42vw"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
