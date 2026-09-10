"use client";

import Image from "next/image";

export function VisiMisiHero() {
  return (
    <section className="vm-hero-stage" aria-label="Visi dan Misi TIDAR">
      <div className="vm-hero">
        <div className="vm-hero__media" aria-hidden="true">
          <Image
            src="/assets/home/hero-video-poster.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="vm-hero__img"
          />
        </div>
        <div className="vm-hero__overlay" aria-hidden="true" />
        <div className="vm-hero__vignette" aria-hidden="true" />

        <div className="vm-hero__content page-width">
          <div className="vm-hero__copy">
            <h1 className="vm-hero__title-block" aria-label="Visi dan Misi">
              <span className="vm-hero__title-visi">VISI</span>
              <span className="vm-hero__title-amp" aria-hidden="true">&amp;</span>
              <span className="vm-hero__title-misi">MISI</span>
            </h1>
            <div className="vm-hero__rule" aria-hidden="true" />
            <p className="vm-hero__sub">
              Arah perjuangan generasi muda Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
