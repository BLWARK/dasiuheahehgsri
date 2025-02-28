import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"],
});

// ✅ Metadata yang lebih lengkap untuk SEO dan Social Media
export const metadata: Metadata = {
  title: "GSRI | Global Strategi Riset Indonesia",
  description:
    "Global Strategi Riset Indonesia (GSRI) adalah organisasi riset terkemuka yang menyediakan wawasan strategis berbasis data untuk bisnis, pemerintah, dan organisasi.",
  keywords:
    "GSRI, Global Strategi Riset Indonesia, Riset Kebijakan, Riset Ekonomi, Riset Politik, Analisis Kebijakan, Transparansi Pemerintahan, data pemerintah, riset data, data analisa, data pemerintah",
  metadataBase: new URL("https://www.gsri.co.id"),
  robots: "index, follow",
  openGraph: {
    title: "GSRI | Global Strategi Riset Indonesia",
    description:
      "Kami menyediakan riset strategis berkualitas tinggi, survei, dan analisis data untuk mendukung pengambilan keputusan dan pengembangan kebijakan.",
    url: "https://www.gsri.co.id",
    siteName: "GSRI",
    images: [
      {
        url: "/logo-new.png",
        width: 1200,
        height: 630,
        alt: "GSRI - Global Strategi Riset Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gsri_indonesia",
    title: "GSRI | Global Strategi Riset Indonesia",
    description:
      "Riset strategis berkualitas tinggi, wawasan berbasis data, dan survei strategis untuk mendukung pengambil keputusan.",
    images: ["/logo-new.png"],
  },
  alternates: {
    canonical: "https://www.gsri.co.id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        <div className="relative overflow-hidden bg-gray-900">
          <Navbar />
          <div className="relative">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
