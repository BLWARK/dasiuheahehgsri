export async function generateMetadata() {
    return {
      title: "Semua Artikel | GSRI",
      description:
        "Jelajahi semua artikel, berita, publikasi, dan riset terkini dari Global Strategi Riset Indonesia (GSRI). Temukan wawasan berbasis data tentang kebijakan publik, ekonomi, dan sosial.",
      openGraph: {
        title: "Semua Artikel | GSRI",
        description:
          "Jelajahi semua artikel, berita, publikasi, dan riset terkini dari Global Strategi Riset Indonesia (GSRI). Temukan wawasan berbasis data tentang kebijakan publik, ekonomi, dan sosial.",
        url: "https://www.gsri.co.id/posts",
        images: [
          {
            url: "/seo-all-articles.jpg", // Pastikan ada gambar representatif
            width: 1200,
            height: 630,
            alt: "Semua Artikel GSRI",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Semua Artikel | GSRI",
        description:
          "Jelajahi semua artikel, berita, publikasi, dan riset terkini dari Global Strategi Riset Indonesia (GSRI).",
        images: ["/seo-all-articles.jpg"],
      },
    };
  }
  
  export default function PostsLayout({ children }) {
    return <>{children}</>;
  }
  