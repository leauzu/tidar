"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function Hero() {
  const stageRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 821px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMedia = () => setShowVideo(desktop.matches && !reducedMotion.matches);
    syncMedia();

    desktop.addEventListener("change", syncMedia);
    reducedMotion.addEventListener("change", syncMedia);
    return () => {
      desktop.removeEventListener("change", syncMedia);
      reducedMotion.removeEventListener("change", syncMedia);
    };
  }, []);

  useEffect(() => {
    if (!showVideo || !videoRef.current) return;
    const video = videoRef.current;
    const play = () => video.play().catch(() => undefined);
    play();
    document.addEventListener("visibilitychange", play);
    return () => document.removeEventListener("visibilitychange", play);
  }, [showVideo]);

  useEffect(() => {
    const stage = stageRef.current;
    const sticky = stickyRef.current;
    if (!stage || !sticky) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const render = () => {
      frame = 0;
      if (reducedMotion.matches) {
        sticky.style.setProperty("--hero-copy-opacity", "1");
        sticky.style.setProperty("--hero-copy-y", "0px");
        sticky.style.setProperty("--hero-media-scale", "1");
        sticky.style.setProperty("--hero-media-y", "0px");
        sticky.style.setProperty("--hero-overlay", ".48");
        sticky.style.setProperty("--hero-reveal-y", "0%");
        return;
      }

      const rect = stage.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / travel);

      const copyFade = clamp((progress - 0.12) / 0.46);
      const rise = clamp((progress - 0.54) / 0.42);

      sticky.style.setProperty("--hero-copy-opacity", `${1 - copyFade}`);
      sticky.style.setProperty("--hero-copy-y", `${copyFade * -34}px`);
      sticky.style.setProperty("--hero-media-scale", `${1 + progress * 0.045}`);
      sticky.style.setProperty("--hero-media-y", `${progress * -14}px`);
      sticky.style.setProperty("--hero-overlay", `${0.42 + progress * 0.15}`);
      sticky.style.setProperty("--hero-reveal-y", `${(1 - rise) * 106}%`);
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
    <section className="cinematic-hero-stage" id="top" ref={stageRef} aria-label="TIDAR homepage introduction">
      <div className="cinematic-hero" ref={stickyRef}>
        <div className="cinematic-hero__media" aria-hidden="true">
          <picture className="cinematic-hero__fallback">
            <source media="(max-width: 820px)" srcSet="/assets/home/home-mobile.jpg" />
            <img src="/assets/home/hero-video-poster.jpg" alt="" />
          </picture>

          {showVideo ? (
            <video
              ref={videoRef}
              className="cinematic-hero__video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/home/hero-video-poster.jpg"
              aria-hidden="true"
            >
              <source src="/assets/home/vid-homepage.mp4" type="video/mp4" />
            </video>
          ) : null}
        </div>

        <div className="cinematic-hero__overlay" />
        <div className="cinematic-hero__vignette" />

        <div className="cinematic-hero__content page-width">
          <p className="cinematic-hero__kicker">TUNAS INDONESIA RAYA</p>
          <h1><span>MUDA, </span><span className="hero-word hero-word--gold">BERGERAK</span><span>,</span><br /><span className="hero-word hero-word--red">BERDAMPAK.</span></h1>
          <p className="cinematic-hero__lede">Awal Bangsa Yang Kokoh</p>
        </div>


        <div className="cinematic-hero__reveal" aria-hidden="true">
          <svg viewBox="0 0 1600 260" preserveAspectRatio="none" role="presentation">
            <polygon points="0,220 1600,20 1600,260 0,260" />
            <polyline className="cinematic-hero__reveal-red" points="0,211 1600,11" />
            <polyline className="cinematic-hero__reveal-gold" points="0,219 1600,19" />
          </svg>
          <div className="cinematic-hero__reveal-fill" />
        </div>
      </div>
    </section>
  );
}
