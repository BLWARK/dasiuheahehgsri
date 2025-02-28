import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"],
});

// Fungsi metadata dinamis untuk homepage
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "GSRI | Global Strategi Riset Indonesia",
    description:
      "Global Strategi Riset Indonesia (GSRI) adalah organisasi riset terkemuka yang menyediakan wawasan strategis berbasis data untuk bisnis, pemerintah, dan organisasi.",
    keywords: [
      "Riset Indonesia",
      "Strategi riset",
      "GSRI",
      "Lembaga survei Indonesia",
      "Data-driven solutions",
      "Strategic research",
      "Market research",
      "Social research",
      "Public opinion research",
    ].join(", "),
    robots: "index, follow",
    metadataBase: new URL("https://www.gsri.co.id"),
    openGraph: {
      title: "GSRI | Global Strategi Riset Indonesia",
      description:
        "Kami menyediakan riset strategis berkualitas tinggi, survei, dan analisis data untuk mendukung pengambilan keputusan dan pengembangan kebijakan.",
      url: "https://www.gsri.co.id",
      siteName: "GSRI",
      images: [
        {
          url: "/seo-image.jpg",
          width: 800,
          height: 600,
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
      images: ["/seo-image.jpg"],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
