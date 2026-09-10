import type { Metadata } from "next";
import { ProfilePage } from "@/components/profile/ProfilePage";

export const metadata: Metadata = {
  title: "Profil TIDAR",
  description:
    "Mengenal identitas, nilai, peran, dan Filosofi Lima Cinta Tunas Indonesia Raya.",
  alternates: { canonical: "/profil" },
  openGraph: {
    title: "Profil TIDAR",
    description:
      "Mengenal identitas, nilai, peran, dan Filosofi Lima Cinta Tunas Indonesia Raya.",
    url: "/profil",
    images: ["/images/profil/logotidarsatin.jpg"],
  },
};

export default function ProfilPage() {
  return <ProfilePage />;
}
