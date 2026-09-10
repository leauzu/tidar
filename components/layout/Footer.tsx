import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const footerAboutLinks = [
  ["Profil", "/profil"],
  ["Visi & Misi", "/visi-misi"],
  ["Tugas & Fungsi", "/tugas-fungsi"],
  ["Makna Lambang", "/makna-lambang"],
  ["Manifesto", "/dokumen-resmi"],
  ["AD / ART", "/dokumen-resmi"],
] as const;

const footerOrganizationLinks = [
  ["Profil Pimpinan", "/profil-pimpinan"],
  ["Struktur Organisasi", "/pengurus-pusat"],
] as const;

export function Footer() {
  return (
    <footer className="footer footer-surface">
      <div className="footer-inner page-width">
        <div className="footer-brand">
          <div className="footer-brand__mark">
            <Image src="/images/Logo_TIDAR-removebg-preview.png" alt="TIDAR — Tunas Indonesia Raya" width={2048} height={1917} />
          </div>
          <p>{site.description}</p>
        </div>

        <div className="footer-cols">
          <nav className="footer-col" aria-label="Tentang TIDAR">
            <strong>TENTANG TIDAR</strong>
            {footerAboutLinks.map(([label, href]) => <Link key={`${label}-${href}`} href={href}>{label}</Link>)}
          </nav>

          <nav className="footer-col" aria-label="Organisasi">
            <strong>ORGANISASI</strong>
            {footerOrganizationLinks.map(([label, href]) => <Link key={`${label}-${href}`} href={href}>{label}</Link>)}
            <a href="https://www.tidar.or.id/berita/" target="_blank" rel="noreferrer">Media</a>
          </nav>

          <div className="footer-col footer-contact">
            <strong>HUBUNGI KAMI</strong>
            <address>{site.address}</address>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href="tel:+6285211891079">{site.phone}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-wrap page-width">
          <span>© 2026 TIDAR — Tunas Indonesia Raya</span>
        </div>
      </div>
    </footer>
  );
}
