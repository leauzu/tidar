"use client";

import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { programs } from "@/data/home";

export function Featured() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const pointerType = useRef<string>("");

  useEffect(() => {
    const clearOutside = (event: globalThis.PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest(".program-card")) setActiveCard(null);
    };
    document.addEventListener("pointerdown", clearOutside);
    return () => document.removeEventListener("pointerdown", clearOutside);
  }, []);

  const rememberPointer = (event: PointerEvent<HTMLAnchorElement>) => {
    pointerType.current = event.pointerType;
  };

  const handleCardClick = (event: MouseEvent<HTMLAnchorElement>, cardId: string) => {
    const touchLike = pointerType.current === "touch" || pointerType.current === "pen";
    pointerType.current = "";
    if (!touchLike) return;

    if (activeCard !== cardId) {
      event.preventDefault();
      setActiveCard(cardId);
      event.currentTarget.focus({ preventScroll: true });
      return;
    }

    setActiveCard(null);
  };

  return (
    <section id="featured" className="program-section page-width" aria-labelledby="program-title">
      <div className="program-grid">
        <header className="program-title-cell">
          <h2 id="program-title">PROGRAM UTAMA</h2>
          <p className="program-title-cell__lede">Ruang untuk mendengar, peduli, bertumbuh, dan berkarya.</p>
        </header>

        {programs.map((item, index) => {
          const isActive = activeCard === item.number;
          return (
            <a
              className={`program-card program-card--${item.span} ${isActive ? "program-card--touch-active" : ""}`}
              href={item.href}
              key={item.number}
              target="_blank"
              rel="noreferrer"
              aria-expanded={isActive ? "true" : undefined}
              onPointerDown={rememberPointer}
              onClick={(event) => handleCardClick(event, item.number)}
            >
              <img src={item.image} alt="" loading={index < 2 ? "eager" : "lazy"} />
              <div className="program-card__wash" />
              <div className="program-card__default">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <small>SELENGKAPNYA <b aria-hidden="true">›</b></small>
              </div>
              <div className="program-card__hover" aria-hidden="true">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="card-arrow"><strong>SELENGKAPNYA</strong><i><b /></i></div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
