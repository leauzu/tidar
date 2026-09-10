import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MaknaLambangExperience } from "./MaknaLambangExperience";
import "./makna-lambang.css";

export const metadata: Metadata = {
  title: "Makna Lambang",
  description: "Makna setiap unsur pada lambang resmi TIDAR — Tunas Indonesia Raya.",
  alternates: { canonical: "/makna-lambang" },
  openGraph: {
    title: "Makna Lambang",
    description: "Makna setiap unsur pada lambang resmi TIDAR — Tunas Indonesia Raya.",
    images: ["/images/Logo_TIDAR-removebg-preview.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <MaknaLambangExperience />
      <Footer />
    </>
  );
}
