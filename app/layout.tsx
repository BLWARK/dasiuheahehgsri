import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"],
});

// ✅ JSON-LD Schema Markup untuk SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  "name": "GSRI | Global Strategi Riset Indonesia",
  "url": "https://www.gsri.co.id",
  "logo": "https://www.gsri.co.id/logo-new.png",
  "description": "Organisasi riset terkemuka di Indonesia yang menyediakan wawasan strategis berbasis data.",
  "foundingDate": "2020-01-01",
  "sameAs": [
    "https://twitter.com/gsri_indonesia",
    "https://www.linkedin.com/company/gsri-indonesia"
  ]
};

// ✅ Metadata Global untuk SEO
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
        url: "https://www.gsri.co.id/logo-new.png",
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
    images: ["https://www.gsri.co.id/logo-new.png"],
  },
  alternates: {
    canonical: "https://www.gsri.co.id",
  },
  other: {
    "application/ld+json": JSON.stringify(jsonLd),
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Google Tag Manager (GTM) - Jika Dibutuhkan */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXX');
          `
        }} />
      </head>
      <body className={poppins.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

        {/* Konten Website */}
        <div className="relative overflow-hidden bg-gray-900">
          <Navbar />
          <div className="relative">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
