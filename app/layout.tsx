import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer"
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GSRI | Global Strategi Riset Indonesia",
  description:
    "Global Strategi Riset Indonesia (GSRI) is a leading research organization offering strategic insights and data-driven solutions for business, government, and organizations.",
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
      "We provide high-quality strategic research, surveys, and data analysis to support decision-making and policy development.",
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gsri_indonesia",
    title: "GSRI | Global Strategi Riset Indonesia",
    description:
      "High-quality research, data insights, and strategic surveys to empower organizations and decision-makers.",
    images: ["/seo-image.jpg"],
  },
};

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
    <html lang="en">
      <body className={poppins.className}>
        <div className="relative overflow-hidden bg-gray-900 ">
          <Navbar />
          <div className="relative  ">{children}</div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
