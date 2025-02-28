export const metadata = {
    title: "Tentang Kami - Global Strategi Riset Indonesia (GSRI)",
    description:
      "GSRI adalah lembaga riset independen yang menyediakan analisis berbasis data untuk kebijakan publik, transparansi pemerintahan, dan evaluasi program strategis.",
    robots: "index, follow",
    openGraph: {
      title: "Tentang Kami - Global Strategi Riset Indonesia (GSRI)",
      description:
        "GSRI adalah lembaga riset independen yang menyediakan analisis berbasis data untuk kebijakan publik, transparansi pemerintahan, dan evaluasi program strategis.",
      url: "https://www.gsri.co.id/tentang",
      images: [
        {
          url: "/logo-new.png",
          width: 800,
          height: 600,
          alt: "Tentang GSRI",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tentang Kami - Global Strategi Riset Indonesia (GSRI)",
      description:
        "GSRI adalah lembaga riset independen yang menyediakan analisis berbasis data untuk kebijakan publik, transparansi pemerintahan, dan evaluasi program strategis.",
      images: ["/logo-new.png"],
    },
  };
  
  export default function TentangLayout({ children }) {
    return <>{children}</>;
  }
  