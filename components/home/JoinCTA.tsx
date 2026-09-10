"use client";

import { useEffect, useRef } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function JoinCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const render = () => {
      frame = 0;
      if (reducedMotion.matches) {
        section.style.setProperty("--join-progress", "1");
        section.style.setProperty("--join-image-scale", "1");
        section.style.setProperty("--join-image-y", "0px");
        section.style.setProperty("--join-copy-y", "0px");
        section.style.setProperty("--join-copy-opacity", "1");
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewport = Math.max(1, window.innerHeight);
      const progress = clamp((viewport - rect.top) / (viewport + rect.height * 0.58));
      const reveal = clamp((progress - 0.12) / 0.48);

      section.style.setProperty("--join-progress", `${progress}`);
      section.style.setProperty("--join-image-scale", `${1.085 - progress * 0.075}`);
      section.style.setProperty("--join-image-y", `${(0.5 - progress) * 22}px`);
      section.style.setProperty("--join-copy-y", `${(1 - reveal) * 34}px`);
      section.style.setProperty("--join-copy-opacity", `${0.18 + reveal * 0.82}`);
    };

    const requestRender = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    reducedMotion.addEventListener("change", requestRender);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      reducedMotion.removeEventListener("change", requestRender);
    };
  }, []);

  return (
    <section className="join-cta" aria-labelledby="join-cta-title" ref={sectionRef}>
      <div className="join-cta__media" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/34398689/pexels-photo-34398689.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="join-cta__overlay" aria-hidden="true" />
      <div className="join-cta__inner page-width">
        <div className="join-cta__copy">
          <p className="join-cta__eyebrow">AMBIL BAGIAN</p>
          <h2 id="join-cta-title">BERGERAK BERSAMA TIDAR</h2>
          <p className="join-cta__description">
            Ayo Bro &amp; Sis, bertumbuh bersama, mengambil peran, dan menghadirkan karya nyata untuk Indonesia Raya.
          </p>
          <div className="join-cta__links">
            <ArrowLink href="https://www.tidar.or.id/" light>BERGABUNG DENGAN TIDAR</ArrowLink>
            <a className="join-cta__secondary" href="https://www.tidar.or.id/profil/" target="_blank" rel="noreferrer">
              KENALI TIDAR <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
