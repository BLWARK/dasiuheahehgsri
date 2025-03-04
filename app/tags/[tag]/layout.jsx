import newsData from "@/data/newsData";
import surveyData from "@/data/surveyData";
import publicationData from "@/data/publikasiData";

// Gabungkan semua data (Berita, Publikasi, Survei)
const combinedData = [
  ...newsData.map((item) => ({ ...item, category: "berita" })),
  ...surveyData.map((item) => ({ ...item, category: "survey" })),
  ...publicationData.map((item) => ({ ...item, category: "publikasi" })),
];

export async function generateMetadata({ params }) {
  const rawTag = params?.tag || "";
  const formattedTag = decodeURIComponent(rawTag.replace(/-/g, " ")).toLowerCase();

  // Temukan item yang memiliki tag yang cocok
  const matchingItems = combinedData.filter((item) =>
    item.tags?.some((tag) => tag.toLowerCase() === formattedTag)
  );

  if (matchingItems.length === 0) {
    return {
      title: `Tag "${formattedTag}" Tidak Ditemukan | GSRI`,
      description: `Tidak ada berita atau publikasi yang ditemukan dengan tag "${formattedTag}".`,
      robots: "noindex, follow",
    };
  }

  // Ambil gambar pertama atau gunakan gambar default jika tidak ada
  const firstImage = matchingItems[0]?.image || "/default-image.jpg";

  // JSON-LD untuk SEO Schema.org (Berita dan Artikel)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Berita tentang ${formattedTag}`,
    "description": `Jelajahi berita, publikasi, dan survei terbaru yang berkaitan dengan topik "${formattedTag}".`,
    "url": `https://www.gsri.co.id/tags/${params.tag}`,
    "numberOfItems": matchingItems.length,
    "itemListElement": matchingItems.slice(0, 5).map((item, index) => ({
      "@type": "NewsArticle",
      "position": index + 1,
      "headline": item.title,
      "url": `https://www.gsri.co.id/post/${item.slug}`,
      "image": {
        "@type": "ImageObject",
        "url": item.image,
        "width": 1200,
        "height": 630
      },
      "datePublished": new Date(item.date).toISOString(),
      "author": {
        "@type": "Person",
        "name": "GSRI"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GSRI",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.gsri.co.id/logo.png"
        }
      }
    }))
  };

  return {
    title: `Berita ${formattedTag} terbaru hari ini | GSRI`,
    description: `Jelajahi berita, publikasi, dan survei terbaru yang berkaitan dengan topik "${formattedTag}".`,
    robots: "index, follow",
    openGraph: {
      title: `Berita dengan Tag: ${formattedTag} | GSRI`,
      description: `Jelajahi berita, publikasi, dan survei terbaru yang berkaitan dengan topik "${formattedTag}".`,
      url: `https://www.gsri.co.id/tags/${params.tag}`,
      images: [
        {
          url: firstImage,
          width: 1200,
          height: 630,
          alt: `Berita tentang ${formattedTag}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Berita dengan Tag: ${formattedTag} | GSRI`,
      description: `Jelajahi berita, publikasi, dan survei terbaru yang berkaitan dengan topik "${formattedTag}".`,
      images: [firstImage],
    },
    jsonLd, // ✅ Tambahkan JSON-LD ke Metadata API
  };
}

export default function TagLayout({ children }) {
  return <>{children}</>;
}
