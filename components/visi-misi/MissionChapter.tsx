"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function MissionChapter({
  number,
  label,
  text,
  image,
  imageAlt,
  layout,
  tone,
}: {
  number: string;
  label: string;
  text: string;
  image: string;
  imageAlt: string;
  layout: "img-left" | "img-right" | "full-cinematic" | "centered" | "img-left-gold";
  tone: "paper" | "dark" | "ivory" | "gold";
}) {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [imgRef.current, textRef.current].filter(Boolean) as HTMLDivElement[];
    const observers = elements.map((el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          el.classList.toggle("is-entered", entry.isIntersecting);
        },
        { threshold: 0.06 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  /* ── FULL-CINEMATIC: Mission 03 ─────────────────────────────── */
  if (layout === "full-cinematic") {
    return (
      <article
        className={`vm-chapter vm-chapter--${tone} vm-chapter--full-cinematic`}
        aria-labelledby={`mission-${number}`}
      >
        <div className="vm-chapter__bg-media" ref={imgRef} aria-hidden="true">
          <Image src={image} alt="" fill sizes="100vw" className="vm-chapter__bg-img" />
        </div>
        <div className="vm-chapter__bg-overlay" aria-hidden="true" />
        <div className="vm-chapter__cinematic-inner">
          <div className="vm-chapter__cinematic-body" ref={textRef}>
            <p className="vm-chapter__label">{label}</p>
            <p className="vm-chapter__text vm-chapter__text--cinematic" id={`mission-${number}`}>
              {text}
            </p>
          </div>
        </div>
      </article>
    );
  }

  /* ── CENTERED: Mission 04 ───────────────────────────────────── */
  if (layout === "centered") {
    return (
      <article
        className={`vm-chapter vm-chapter--${tone} vm-chapter--centered`}
        aria-labelledby={`mission-${number}`}
      >
        <div className="vm-chapter__centered-inner">
          <div className="vm-chapter__centered-top page-width" ref={textRef}>
            <p className="vm-chapter__label">{label}</p>
            <p className="vm-chapter__text vm-chapter__text--centered" id={`mission-${number}`}>
              {text}
            </p>
          </div>
          <div className="vm-chapter__img-strip-wrap" ref={imgRef} aria-hidden="true">
            <div className="vm-chapter__img-strip">
              <Image src={image} alt={imageAlt} fill sizes="100vw" className="vm-chapter__strip-img" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  /* ── SPLIT LAYOUTS: 01 (img-left), 02 (img-right), 05 (img-left-gold) ── */
  return (
    <article
      className={`vm-chapter vm-chapter--${tone} vm-chapter--${layout}`}
      aria-labelledby={`mission-${number}`}
    >
      {/* Full-bleed grid — NO page-width wrapper */}
      <div className="vm-chapter__split-grid">
        <div className="vm-chapter__img-col" ref={imgRef} aria-hidden="true">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className="vm-chapter__split-img"
          />
        </div>
        <div className="vm-chapter__text-col" ref={textRef}>
          {/* text-col inner provides max-width centering */}
          <div className="vm-chapter__text-inner">
            <p className="vm-chapter__label">{label}</p>
            <p className="vm-chapter__text" id={`mission-${number}`}>{text}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
