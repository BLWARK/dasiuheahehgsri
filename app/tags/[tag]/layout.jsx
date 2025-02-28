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

  // Temukan berita yang memiliki tag yang cocok
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

  return {
    title: `Berita dengan Tag: ${formattedTag} | GSRI`,
    description: `Jelajahi berita, publikasi, dan survei terbaru yang berkaitan dengan topik "${formattedTag}".`,
    openGraph: {
      title: `Berita dengan Tag: ${formattedTag} | GSRI`,
      description: `Jelajahi berita, publikasi, dan survei terbaru yang berkaitan dengan topik "${formattedTag}".`,
      url: `https://www.gsri.co.id/tags/${params.tag}`,
      images: [
        {
          url: matchingItems[0].image, // Ambil gambar dari berita pertama yang cocok
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
      images: [matchingItems[0].image], // Ambil gambar pertama yang cocok
    },
  };
}

export default function TagLayout({ children }) {
  return <>{children}</>;
}
