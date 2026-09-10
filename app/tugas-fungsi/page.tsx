import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { misi, tugas } from "@/data/site";

import "./tugas-fungsi.css";

export const metadata: Metadata = {
  title: "Tugas & Fungsi",
  description:
    "Tugas dan lima fungsi utama TIDAR dalam pembangunan karakter, aspirasi, dan kepemimpinan pemuda.",
  alternates: { canonical: "/tugas-fungsi" },
  openGraph: {
    title: "Tugas & Fungsi",
    description:
      "Tugas dan lima fungsi utama TIDAR dalam pembangunan karakter, aspirasi, dan kepemimpinan pemuda.",
  },
};

const chapters = [
  {
    number: "01",
    label: "Kesadaran",
    text: misi[0],
    image: "https://images.pexels.com/photos/16125599/pexels-photo-16125599.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Pemudi Indonesia membawa bendera Merah Putih sebagai simbol kesadaran kebangsaan",
    position: "50% 38%",
  },
  {
    number: "02",
    label: "Kepemimpinan",
    text: misi[1],
    image: "https://images.pexels.com/photos/7845344/pexels-photo-7845344.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Tim muda Asia berdiskusi dan mempresentasikan strategi dalam sebuah pertemuan",
    position: "50% 46%",
  },
  {
    number: "03",
    label: "Kesejahteraan",
    text: misi[2],
    image: "https://images.pexels.com/photos/35548842/pexels-photo-35548842.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Pelajar Indonesia mengikuti kegiatan pembelajaran bersama di ruang kelas",
    position: "50% 48%",
  },
  {
    number: "04",
    label: "Kebudayaan",
    text: misi[3],
    image: "https://images.pexels.com/photos/37571506/pexels-photo-37571506.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Pertunjukan tari tradisional Indonesia di Jawa Barat sebagai ekspresi pelestarian budaya",
    position: "50% 44%",
  },
  {
    number: "05",
    label: "Ekonomi Kerakyatan",
    text: misi[4],
    image: "https://images.pexels.com/photos/27109726/pexels-photo-27109726.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Pedagang lokal Indonesia menata hasil dagangan di pasar tradisional",
    position: "50% 50%",
  },
] as const;

export default function Page() {
  return (
    <>
      <Header />
      <main className="tugas-fungsi">
        <section className="tugas-fungsi-hero" aria-labelledby="tugas-fungsi-title">
          <div className="tugas-fungsi-hero__grid page-width">
            <div className="tugas-fungsi-hero__copy">
              <h1 id="tugas-fungsi-title">
                <span>Tugas</span>
                <span>&amp; Fungsi</span>
              </h1>
              <p className="tugas-fungsi-hero__lead">
                Peran TIDAR dalam pembangunan karakter, aspirasi, dan kepemimpinan pemuda.
              </p>
            </div>

            <figure className="tugas-fungsi-hero__media">
              <Image
                src="https://images.pexels.com/photos/11599230/pexels-photo-11599230.jpeg?auto=compress&cs=tinysrgb&w=1800"
                alt="Anak muda bekerja bersama dalam kegiatan sukarela dan proyek komunitas"
                fill
                priority
                loading="eager"
                unoptimized
                sizes="(max-width: 800px) 100vw, 44vw"
              />
            </figure>
          </div>
        </section>

        <section className="tugas-fungsi-mandate" id="mandat" aria-labelledby="tugas-tidar-title">
          <div className="tugas-fungsi-mandate__inner page-width">
            <div className="tugas-fungsi-mandate__label">
              <h2 id="tugas-tidar-title" className="tugas-fungsi-mandate__title">TUGAS TIDAR</h2>
            </div>
            <p id="mandat-title" className="tugas-fungsi-mandate__description">{tugas}</p>
            <div className="tugas-fungsi-mandate__verbs" aria-label="Mewadahi, membina, menggerakkan">
              <span>Mewadahi.</span>
              <span>Membina.</span>
              <span>Menggerakkan.</span>
            </div>
          </div>
        </section>

        <section className="tugas-fungsi-transition" aria-labelledby="fungsi-title">
          <div className="tugas-fungsi-transition__inner page-width">
            <p className="tugas-fungsi-eyebrow tugas-fungsi-eyebrow--gold">DARI MANDAT MENUJU TINDAKAN NYATA.</p>
            <div className="tugas-fungsi-transition__line" aria-hidden="true">
              <span />
            </div>
            <div>
              <h2 id="fungsi-title">Lima fungsi utama di balik setiap gerak TIDAR</h2>
              <p>
                Lima fungsi utama organisasi dalam membentuk pemuda berkarakter, berdaya, dan berdedikasi bagi Indonesia.
              </p>
            </div>
          </div>
        </section>

        <section className="tugas-fungsi-chapters" aria-label="Lima fungsi TIDAR">
          {chapters.map((chapter) => (
            <article
              className={`tugas-fungsi-chapter tugas-fungsi-chapter--${chapter.number}`}
              id={`fungsi-${chapter.number}`}
              key={chapter.number}
            >
              <div className="tugas-fungsi-chapter__marker">
                <div>
                  <strong aria-hidden="true">{chapter.number}</strong>
                  <span className="tugas-fungsi-chapter__label">{chapter.label}</span>
                </div>
              </div>

              <div className="tugas-fungsi-chapter__scene">
                <figure className="tugas-fungsi-chapter__media">
                  <Image
                    src={chapter.image}
                    alt={chapter.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 800px) 100vw, 70vw"
                    style={{ objectPosition: chapter.position }}
                  />
                </figure>
                <div className="tugas-fungsi-chapter__copy">
                  <h3>{chapter.label}</h3>
                  <p>{chapter.text}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
