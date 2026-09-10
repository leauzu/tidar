import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={metadataBase:new URL("https://www.tidar.or.id"),title:{default:"TIDAR — Tunas Indonesia Raya",template:"%s — TIDAR"},description:"Wadah generasi muda untuk belajar, bergerak, berkarya, dan mengabdi bagi Indonesia Raya.",openGraph:{type:"website",siteName:"TIDAR — Tunas Indonesia Raya",locale:"id_ID",images:["/assets/home/hero-video-poster.jpg"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}
