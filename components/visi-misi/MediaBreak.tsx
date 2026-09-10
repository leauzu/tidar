"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function MediaBreak() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-entered", entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="vm-media-break" ref={ref} aria-hidden="true">
      <div className="vm-media-break__inner">
        <Image
          src="/images/visi-misi/media-break.jpg"
          alt=""
          fill
          sizes="100vw"
          className="vm-media-break__img"
        />
        <div className="vm-media-break__overlay" />
      </div>
    </div>
  );
}
