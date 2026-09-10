import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Featured } from "@/components/home/Featured";
import { Mission } from "@/components/home/Mission";
import { RecentNews } from "@/components/home/RecentNews";
import { JoinCTA } from "@/components/home/JoinCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <Mission />
        <RecentNews />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
