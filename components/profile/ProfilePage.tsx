import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/internal/Reveal";
import {
  profileIntro,
  profileLoves,
  profileMovement,
  profileSectionCopy,
} from "./data";
import styles from "./ProfilePage.module.css";

export function ProfilePage() {
  return (
    <>
      <Header />
      <main className={`${styles.concept} ${styles.conceptA}`}>
        <section className={styles.aHero} aria-labelledby="profile-title">
          <div className={styles.aHeroMedia} aria-hidden="true" />
          <div className={styles.aHeroShade} aria-hidden="true" />
          <div className={`${styles.inner} ${styles.aHeroCopy}`}>
            <h1 id="profile-title">
              <span className={styles.aHeroTitleAccent}>PROFIL</span>
              <span>TIDAR</span>
            </h1>
            <p>{profileIntro.lead}</p>
          </div>
        </section>

        <section className={`${styles.inner} ${styles.aIntro}`}>
          <Reveal className={styles.aIntroMedia}>
            <Image
              src="/assets/home/home-mobile.jpg"
              alt="Kader TIDAR dalam kegiatan organisasi"
              fill
              sizes="(max-width: 820px) 100vw, 62vw"
              priority
            />
          </Reveal>
          <Reveal className={styles.aIntroCopy}>
            <h2>{profileIntro.title}</h2>
            <p>{profileIntro.body}</p>
          </Reveal>
        </section>

        <section className={styles.aMovement} aria-labelledby="movement-title">
          <div className={styles.aMovementMedia}>
            <Image
              src="/assets/home/hero-video-poster.jpg"
              alt="Kegiatan kader TIDAR"
              fill
              sizes="100vw"
            />
          </div>
          <div className={styles.aMovementShade} aria-hidden="true" />
          <div className={`${styles.inner} ${styles.aMovementContent}`}>
            <Reveal className={styles.aMovementStatement}>
              <h2 id="movement-title">{profileSectionCopy.movementTitle}</h2>
              <p>{profileSectionCopy.movementLead}</p>
            </Reveal>
            <div className={styles.aMovementRail}>
              {profileMovement.map((item, index) => (
                <Reveal className={styles.aMovementRow} key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Image src={item.icon} alt="" width={56} height={56} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aLoves} aria-labelledby="loves-title">
          <div className={`${styles.inner} ${styles.aLovesGrid}`}>
            <div className={styles.aLovesSticky}>
              <p className={styles.eyebrow}>FILOSOFI LIMA CINTA</p>
              <h2 id="loves-title" aria-label={profileSectionCopy.lovesTitle}>
                <span>Lima nilai untuk</span>
                <span>membangun</span>
                <span>generasi muda</span>
                <span>yang kokoh.</span>
              </h2>
              <p className={styles.sectionLead}>{profileSectionCopy.lovesLead}</p>
              <Image
                src="/images/profil/flash5cinta.png"
                alt="Lambang Lima Cinta Tunas Indonesia Raya"
                width={360}
                height={304}
                sizes="(max-width: 820px) 48vw, 310px"
              />
            </div>

            <div className={styles.aLovesComposition}>
              {profileLoves.map((item) => (
                <Reveal className={styles.aLoveItem} key={item.number}>
                  <div className={styles.aLoveIcon} aria-hidden="true">
                    <Image src={item.icon} alt="" width={96} height={96} />
                  </div>
                  <div className={styles.aLoveCopy}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
