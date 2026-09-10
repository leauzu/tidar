import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/internal/Reveal";
import { VisiMisiHero } from "@/components/visi-misi/VisiMisiHero";
import { MissionChapter } from "@/components/visi-misi/MissionChapter";
import { MediaBreak } from "@/components/visi-misi/MediaBreak";
import { visi, misi } from "@/data/site";

import "./visi-misi.css";

export const metadata: Metadata = {
  title: "Visi & Misi",
  description:
    "Visi dan misi TIDAR: menjadi organisasi kepemudaan yang menyelamatkan masa depan Indonesia melalui nasionalisme, karakter, pendidikan, kebudayaan, dan ekonomi kerakyatan.",
  alternates: { canonical: "/visi-misi" },
  openGraph: {
    title: "Visi & Misi — TIDAR",
    description:
      "Visi dan misi TIDAR: menjadi organisasi kepemudaan yang menyelamatkan masa depan Indonesia melalui nasionalisme, karakter, pendidikan, kebudayaan, dan ekonomi kerakyatan.",
    images: ["/assets/home/hero-video-poster.jpg"],
  },
};

/* ----------------------------------------------------------------
   Editorial labels — each derived directly from its own statement.
   No invented meaning.
   ---------------------------------------------------------------- */
const misiMeta = [
  {
    label: "Kesadaran Politik & Kebangsaan",
    image: "/images/visi-misi/mission-01-civic.jpg",
    imageAlt: "Pemuda Indonesia berdiskusi dalam kegiatan kebangsaan",
    layout: "img-left",
    tone: "paper",
  },
  {
    label: "Pemimpin Berkarakter & Berintegritas",
    image: "/images/visi-misi/mission-02-leadership.jpg",
    imageAlt: "Pelatihan kepemimpinan bagi generasi muda",
    layout: "img-right",
    tone: "paper",
  },
  {
    label: "Pendidikan & Kesejahteraan Bangsa",
    image: "/images/visi-misi/mission-03-education.jpg",
    imageAlt: "Pelatihan dan pendidikan bagi pemuda Indonesia",
    layout: "full-cinematic",
    tone: "dark",
  },
  {
    label: "Melestarikan Kebudayaan Indonesia",
    image: "/images/visi-misi/mission-04-culture.jpg",
    imageAlt: "Kebudayaan dan tradisi Indonesia",
    layout: "centered",
    tone: "ivory",
  },
  {
    label: "Ekonomi Kerakyatan & Kemandirian",
    image: "/images/visi-misi/mission-05-economy.jpg",
    imageAlt: "Kegiatan ekonomi kerakyatan Indonesia",
    layout: "img-left-gold",
    tone: "gold",
  },
] as const;


export default function VisiMisiPage() {
  return (
    <>
      <Header />
      <main className="vm-page">

        {/* ── 01 CINEMATIC HERO ─────────────────────────── */}
        <VisiMisiHero />

        {/* ── 02 VISI MANIFESTO ──────────────────────────── */}
        <section className="vm-visi" id="vm-visi" aria-labelledby="vm-visi-heading">
          <div className="page-width vm-visi__inner">
            <div className="vm-visi__label-col" aria-hidden="true">
              <span className="vm-visi__eyebrow">VISI</span>
              <div className="vm-visi__accent" />
            </div>
            <Reveal className="vm-visi__quote-col">
              <p className="vm-visi__eyebrow-mobile">VISI TIDAR</p>
              <blockquote className="vm-visi__quote" id="vm-visi-heading">
                {visi}
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ── 03 CINEMATIC MEDIA BREAK ───────────────────── */}
        <MediaBreak />

        {/* ── 04 MISI SECTION MARKER ─────────────────────── */}
        <section className="vm-misi-marker" aria-label="Lima misi TIDAR">
          <div className="page-width vm-misi-marker__inner">
            <div className="vm-misi-marker__left">
              <p className="vm-misi-marker__eyebrow">MISI TIDAR</p>
              <Reveal>
                <h2 className="vm-misi-marker__heading">
                  Lima arah kerja organisasi.
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="vm-misi-marker__rule" aria-hidden="true" />
        </section>

        {/* ── 05 FIVE MISSION CHAPTERS ──────────────────── */}
        {misi.map((text, i) => (
          <MissionChapter
            key={i}
            number={String(i + 1).padStart(2, "0")}
            label={misiMeta[i].label}
            text={text}
            image={misiMeta[i].image}
            imageAlt={misiMeta[i].imageAlt}
            layout={misiMeta[i].layout as any}
            tone={misiMeta[i].tone as any}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
