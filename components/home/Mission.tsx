"use client";

import { useEffect, useRef } from "react";
import { leaderQuotes } from "@/data/home";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function Mission() {
  const panels = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const render = () => {
      frame = 0;
      const headerOffset = window.innerWidth <= 820 ? 84 : 116;
      const viewport = Math.max(1, window.innerHeight - headerOffset);

      panels.current.forEach((panel) => {
        if (!panel) return;
        if (reducedMotion.matches) {
          panel.style.setProperty("--leader-image-scale", "1");
          panel.style.setProperty("--leader-copy-y", "0px");
          panel.style.setProperty("--leader-copy-opacity", "1");
          return;
        }
        const rect = panel.getBoundingClientRect();
        const enter = clamp((viewport + headerOffset - rect.top) / viewport);
        panel.style.setProperty("--leader-image-scale", `${1.075 - enter * 0.065}`);
        panel.style.setProperty("--leader-copy-y", `${(1 - enter) * 28}px`);
        panel.style.setProperty("--leader-copy-opacity", `${0.25 + enter * 0.75}`);
      });
    };

    const requestRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
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
    <section className="leader-stories" aria-label="Pesan para pemimpin">
      {leaderQuotes.map((person, index) => (
        <article
          key={person.name}
          ref={(node) => { panels.current[index] = node; }}
          className={`leader-panel leader-panel--${person.tone} ${index % 2 === 1 ? "leader-panel--reverse" : ""}`}
          style={{ zIndex: index + 1 }}
        >
          <div className="leader-media">
            <img
              src={person.image}
              alt={person.name}
              loading={index === 0 ? "eager" : "lazy"}
              style={{ objectPosition: person.imagePosition }}
            />
          </div>
          <div className="leader-quote">
            <div className="leader-meta"><span>{person.number}</span><span>{person.theme}</span></div>
            <blockquote>“{person.quote}”</blockquote>
            <div className="leader-person">
              <i aria-hidden="true" />
              <div><strong>{person.name}</strong><span>{person.role}</span></div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
