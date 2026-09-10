"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const provinces = [
  "PD ACEH",
  "PD SUMATERA UTARA",
  "PD SUMATERA BARAT",
  "PD RIAU",
  "PD KEPULAUAN RIAU",
  "PD JAMBI",
  "PD SUMATERA SELATAN",
  "PD KEPULAUAN BANGKA BELITUNG",
  "PD BENGKUL",
  "PD LAMPUNG",
  "PD DKI JAKARTA",
  "PD BANTEN",
  "PD JAWA BARAT",
  "PD JAWA TENGAH",
  "PD DI YOGYAKARTA",
  "PD JAWA TIMUR",
  "PD BALI",
  "PD NUSA TENGGARA BARAT",
  "PD NUSA TENGGARA TIMUR",
  "PD KALIMANTAN BARAT",
  "PD KALIMANTAN TENGAH",
  "PD KALIMANTAN SELATAN",
  "PD KALIMANTAN TIMUR",
  "PD KALIMANTAN UTARA",
  "PD SULAWESI UTARA",
  "PD GORONTALO",
  "PD SULAWESI TENGAH",
  "PD SULAWESI BARAT",
  "PD SULAWESI SELATAN",
  "PD SULAWESI TENGGARA",
  "PD MALUKU",
  "PD MALUKU UTARA",
  "PD PAPUA",
  "PD PAPUA BARAT",
  "PD PAPUA BARAT DAYA",
  "PD PAPUA SELATAN",
  "PD PAPUA TENGAH",
  "PD PAPUA PEGUNUNGAN",
] as const;

type MenuItem = {
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  provinces?: readonly string[];
  listNavigates?: boolean;
};

type MenuGroup = {
  label: string;
  items: readonly MenuItem[];
};

type MenuKey = "about" | "leaders" | "structure" | "media";

const menuGroups: Record<MenuKey, MenuGroup> = {
  about: {
    label: "TENTANG TIDAR",
    items: [
      {
        label: "PROFIL",
        title: "Profil TIDAR",
        description: "Tunas Indonesia Raya adalah wadah aspirasi dan karya nyata generasi muda Indonesia yang berakar pada Partai Gerindra, dengan fokus pada pengembangan karakter, kepemimpinan, dan kontribusi bagi bangsa.",
        cta: "MENGENAL TIDAR",
        href: "/profil",
        image: "/assets/home/hero-video-poster.jpg",
        imageAlt: "Dokumentasi kegiatan TIDAR",
      },
      {
        label: "VISI & MISI",
        title: "Visi & Misi",
        description: "Arah perjuangan TIDAR adalah membangun generasi muda yang berkarakter, berdaya, berdedikasi, dan memiliki semangat nasionalisme berdasarkan Pancasila serta UUD 1945.",
        cta: "BACA VISI & MISI",
        href: "/visi-misi",
        image: "/assets/home/home-mobile.jpg",
        imageAlt: "Kader TIDAR dalam kegiatan organisasi",
      },
      {
        label: "TUGAS & FUNGSI",
        title: "Tugas & Fungsi",
        description: "TIDAR mewadahi, membina, dan menggerakkan generasi muda agar memiliki semangat kebangsaan, karakter kepemimpinan, kepekaan sosial, serta kemampuan berkontribusi nyata bagi Indonesia.",
        cta: "PELAJARI TUGAS & FUNGSI",
        href: "/tugas-fungsi",
        image: "https://images.pexels.com/photos/35646601/pexels-photo-35646601.jpeg?auto=compress&cs=tinysrgb&w=1400",
        imageAlt: "Kegiatan pelatihan dan diskusi pemuda",
      },
      {
        label: "MAKNA LAMBANG",
        title: "Makna Lambang",
        description: "Setiap unsur lambang TIDAR membawa nilai kepemimpinan yang visioner, keberanian, kemakmuran, ketegasan, serta filosofi Lima Cinta sebagai fondasi gerakan.",
        cta: "BACA MAKNA LAMBANG",
        href: "/makna-lambang",
        image: "/images/Logo_TIDAR-removebg-preview.png",
        imageAlt: "Lambang TIDAR — Tunas Indonesia Raya",
        imageFit: "contain",
      },
      {
        label: "MANIFESTO",
        title: "Manifesto",
        description: "Manifesto memuat arah perjuangan dan komitmen organisasi yang ditetapkan dalam Kongres TIDAR sebagai pijakan gerak dan pengabdian generasi muda.",
        cta: "LIHAT MANIFESTO",
        href: "/dokumen-resmi",
        listNavigates: false,
      },
      {
        label: "AD / ART",
        title: "AD / ART TIDAR",
        description: "Anggaran Dasar dan Anggaran Rumah Tangga menjadi landasan organisasi yang mengatur identitas, keanggotaan, struktur, kewenangan, serta tata kelola TIDAR.",
        cta: "LIHAT AD / ART",
        href: "/dokumen-resmi",
        listNavigates: false,
      },
    ],
  },
  leaders: {
    label: "PROFIL PIMPINAN",
    items: [
      {
        label: "KETUA UMUM",
        title: "Rahayu Saraswati Djojohadikusumo",
        description: "Ketua Umum PP TIDAR periode 2025–2030 yang mendorong kaderisasi inklusif, penguatan kepemimpinan, dan ruang kontribusi yang lebih luas bagi generasi muda.",
        cta: "LIHAT PROFIL PIMPINAN",
        href: "/profil-pimpinan/rahayu-saraswati-djojohadikusumo",
        image: "/assets/home/home-mobile.jpg",
        imageAlt: "Rahayu Saraswati dalam kegiatan TIDAR",
      },
      {
        label: "SEKRETARIS JENDERAL",
        title: "Rocky Candra",
        description: "Sekretaris Jenderal PP TIDAR yang mengawal koordinasi organisasi dan konsolidasi jaringan kader agar gerakan TIDAR tetap terhubung dari pusat hingga daerah.",
        cta: "LIHAT PENGURUS PUSAT",
        href: "/pengurus-pusat",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/KPU_Rocky_Candra.jpg",
        imageAlt: "Rocky Candra",
      },
      {
        label: "BENDAHARA UMUM",
        title: "M. Husein Fadlulloh",
        description: "Bendahara Umum PP TIDAR yang mendukung tata kelola organisasi serta penguatan program kepemudaan dan kewirausahaan sebagai bagian dari kemandirian generasi muda.",
        cta: "LIHAT PENGURUS PUSAT",
        href: "/pengurus-pusat",
        image: "/assets/home/hero-video-poster.jpg",
        imageAlt: "Dokumentasi kegiatan TIDAR",
      },
    ],
  },
  structure: {
    label: "STRUKTUR ORGANISASI",
    items: [
      {
        label: "PENGURUS PUSAT",
        title: "Pengurus Pusat",
        description: "Struktur Pengurus Pusat TIDAR memuat jajaran pimpinan dan bidang kerja organisasi yang mengoordinasikan kaderisasi, advokasi, digitalisasi, pendidikan, ekonomi, budaya, dan program kepemudaan.",
        cta: "LIHAT PENGURUS PUSAT",
        href: "/pengurus-pusat",
      },
      {
        label: "PENGURUS DAERAH",
        title: "Pengurus Daerah",
        description: "Jaringan Pengurus Daerah menghubungkan gerakan TIDAR di seluruh provinsi Indonesia. Pilih wilayah untuk menuju informasi organisasi daerah.",
        cta: "LIHAT JARINGAN DAERAH",
        href: "/struktur-organisasi",
        provinces,
      },
    ],
  },
  media: {
    label: "MEDIA",
    items: [
      {
        label: "BUKU PRABOWO",
        title: "Buku Prabowo",
        description: "Ruang media untuk mengenal gagasan, pemikiran, dan perjalanan kepemimpinan Prabowo Subianto melalui referensi bacaan yang dikurasi untuk kader dan generasi muda.",
        cta: "BUKA BUKU PRABOWO",
        href: "https://bukuprabowo.com/",
      },
      {
        label: "MARS & HIMNE",
        title: "Mars & Himne TIDAR",
        description: "Mars dan Himne Tunas Indonesia Raya menjadi bagian dari identitas organisasi yang menyatukan semangat, kebersamaan, dan pengabdian kader TIDAR.",
        cta: "DENGARKAN MARS & HIMNE",
        href: "https://youtu.be/GvaogtaFKGo",
      },
    ],
  },
};

const menuOrder: MenuKey[] = ["about", "leaders", "structure", "media"];

const isExternalHref = (href: string) => /^https?:\/\//.test(href);

export function Header() {
  const pathname = usePathname();
  const interior = pathname !== "/";
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const openMenu = (key: MenuKey) => {
    cancelClose();
    if (activeMenu !== key) setActiveSubIndex(0);
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
        setMobileSection(null);
        setMobileSub(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const currentGroup = activeMenu ? menuGroups[activeMenu] : null;
  const currentItem = currentGroup?.items[activeSubIndex] ?? null;
  const hasImage = interior && Boolean(currentItem?.image);
  const hasProvinces = Boolean(currentItem?.provinces?.length);

  return (
    <header
      id="top"
      className={`site-header ${interior ? "site-header--interior" : ""} ${scrolled ? "site-header--scrolled" : ""} ${activeMenu ? "site-header--menu-open" : ""} ${mobileOpen ? "site-header--mobile-open" : ""}`}
      onBlurCapture={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && event.currentTarget.contains(next)) return;
        if (!mobileOpen) setActiveMenu(null);
      }}
    >
      <div className="nav-shell">
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <div className="nav-group nav-group--left">
            {menuOrder.slice(0, 2).map((key) => (
              <button
                key={key}
                type="button"
                className={`nav-item ${activeMenu === key ? "nav-item--active" : ""}`}
                aria-expanded={activeMenu === key}
                onMouseEnter={() => openMenu(key)}
                onMouseLeave={scheduleClose}
                onFocus={() => openMenu(key)}
                onClick={() => openMenu(key)}
              >
                {menuGroups[key].label}
              </button>
            ))}
          </div>

          <Link className="brand-badge" href="/" aria-label="Beranda TIDAR">
            <span className="brand-badge__crop">
              <Image src="/images/Logo_TIDAR-removebg-preview.png" alt="TIDAR — Tunas Indonesia Raya" width={2048} height={1917} priority />
            </span>
          </Link>

          <div className="nav-group nav-group--right">
            {menuOrder.slice(2).map((key) => (
              <button
                key={key}
                type="button"
                className={`nav-item ${activeMenu === key ? "nav-item--active" : ""}`}
                aria-expanded={activeMenu === key}
                onMouseEnter={() => openMenu(key)}
                onMouseLeave={scheduleClose}
                onFocus={() => openMenu(key)}
                onClick={() => openMenu(key)}
              >
                {menuGroups[key].label}
              </button>
            ))}
          </div>
        </nav>

        <Link className="mobile-brand" href="/" aria-label="Beranda TIDAR">
          <span className="mobile-brand__crop">
            <Image src="/images/Logo_TIDAR-removebg-preview.png" alt="TIDAR" width={2048} height={1917} priority />
          </span>
        </Link>
        <button
          className="mobile-toggle"
          type="button"
          aria-label={mobileOpen ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </div>

      {activeMenu && currentGroup && currentItem ? (
        <div className={`mega-menu ${!interior ? "mega-menu--compact" : ""}`} onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
          <div className={`mega-inner ${!hasImage ? "mega-inner--text" : ""} ${hasProvinces ? "mega-inner--regions" : ""}`}>
            <nav className="mega-list" aria-label={`${currentGroup.label} submenu`}>
              {currentGroup.items.map((item, index) => {
                const sharedProps = {
                  className: activeSubIndex === index ? "mega-list__active" : "",
                  onMouseEnter: () => setActiveSubIndex(index),
                  onFocus: () => setActiveSubIndex(index),
                };

                if (item.listNavigates === false) {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      {...sharedProps}
                      onClick={() => setActiveSubIndex(index)}
                    >
                      <span>{item.label}</span>
                      {(!interior && (item.label === "MANIFESTO" || item.label === "AD / ART")) ? <span className="mega-list__external-indicator" aria-hidden="true">↗</span> : null}
                    </button>
                  );
                }

                if (isExternalHref(item.href)) {
                  return (
                    <a
                      key={item.label}
                      {...sharedProps}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setActiveMenu(null)}
                    >
                      <span>{item.label}</span>
                      {(!interior && (item.label === "MANIFESTO" || item.label === "AD / ART")) ? <span className="mega-list__external-indicator" aria-hidden="true">↗</span> : null}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    {...sharedProps}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                  >
                    <span>{item.label}</span>
                    {(!interior && (item.label === "MANIFESTO" || item.label === "AD / ART")) ? <span className="mega-list__external-indicator" aria-hidden="true">↗</span> : null}
                  </Link>
                );
              })}
            </nav>

            <div className="mega-copy" key={`${activeMenu}-${activeSubIndex}`}>
              <p className="mega-eyebrow">{currentGroup.label}</p>
              <h2>{currentItem.title}</h2>
              <p className="mega-description">{currentItem.description}</p>
              {hasProvinces ? (
                <div className="mega-provinces">
                  {currentItem.provinces?.map((province) => (
                    <a
                      key={province}
                      href={`https://www.tidar.or.id/#${province.toLowerCase().replaceAll(" ", "-")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {province}<span aria-hidden="true">›</span>
                    </a>
                  ))}
                </div>
              ) : null}
              {isExternalHref(currentItem.href) ? (
                <a className="mega-cta" href={currentItem.href} target="_blank" rel="noopener noreferrer" onClick={() => setActiveMenu(null)}>
                  {currentItem.cta}<span aria-hidden="true">›</span>
                </a>
              ) : (
                <Link className="mega-cta" href={currentItem.href} onClick={() => setActiveMenu(null)}>
                  {currentItem.cta}<span aria-hidden="true">›</span>
                </Link>
              )}
            </div>

            {hasImage ? (
              <div className={`mega-photo ${currentItem.imageFit === "contain" ? "mega-photo--contain" : ""}`} key={`image-${activeMenu}-${activeSubIndex}`}>
                <img src={currentItem.image} alt={currentItem.imageAlt ?? ""} />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigasi TIDAR">
          <div className="mobile-menu__inner">
            <p className="mobile-menu__eyebrow">NAVIGASI</p>
            {menuOrder.map((key) => {
              const group = menuGroups[key];
              const expanded = mobileSection === key;
              return (
                <div className="mobile-accordion" key={key}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => {
                      setMobileSection(expanded ? null : key);
                      setMobileSub(null);
                    }}
                  >
                    <span>{group.label}</span><b aria-hidden="true">{expanded ? "−" : "+"}</b>
                  </button>
                  {expanded ? (
                    <div className="mobile-submenu">
                      {group.items.map((item) => {
                        const itemKey = `${key}:${item.label}`;
                        if (item.provinces?.length) {
                          const openRegions = mobileSub === itemKey;
                          return (
                            <div className="mobile-regions" key={item.label}>
                              <button type="button" aria-expanded={openRegions} onClick={() => setMobileSub(openRegions ? null : itemKey)}>
                                <span>{item.label}</span><b>{openRegions ? "−" : "+"}</b>
                              </button>
                              {openRegions ? (
                                <div className="mobile-province-grid">
                                  {item.provinces.map((province) => (
                                    <a key={province} href={`https://www.tidar.or.id/#${province.toLowerCase().replaceAll(" ", "-")}`} target="_blank" rel="noreferrer">
                                      {province}
                                    </a>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          );
                        }
                        if (isExternalHref(item.href)) {
                          return <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.label} onClick={() => setMobileOpen(false)}>{item.label}<span>›</span></a>;
                        }
                        return <Link href={item.href} key={item.label} onClick={() => setMobileOpen(false)}>{item.label}<span>›</span></Link>;
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
