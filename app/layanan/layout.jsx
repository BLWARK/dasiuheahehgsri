export const metadata = {
    title: "Layanan dan Program GSRI - Riset & Evaluasi Kebijakan",
    description:
      "GSRI menyediakan layanan riset kebijakan publik, evaluasi anggaran, survei opini publik, serta media dan publikasi berbasis riset ilmiah.",
    robots: "index, follow",
    openGraph: {
      title: "Layanan dan Program GSRI - Riset & Evaluasi Kebijakan",
      description:
        "GSRI menyediakan layanan riset kebijakan publik, evaluasi anggaran, survei opini publik, serta media dan publikasi berbasis riset ilmiah.",
      url: "https://www.gsri.co.id/layanan",
      images: [
        {
          url: "/logo-new.png",
          width: 800,
          height: 600,
          alt: "Layanan GSRI",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Layanan dan Program GSRI - Riset & Evaluasi Kebijakan",
      description:
        "GSRI menyediakan layanan riset kebijakan publik, evaluasi anggaran, survei opini publik, serta media dan publikasi berbasis riset ilmiah.",
      images: ["/logo-new.png"],
    },
  };
  
  export default function LayananLayout({ children }) {
    return <>{children}</>;
  }
  