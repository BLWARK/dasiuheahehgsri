import newsData from "@/data/newsData";
import surveyData from "@/data/surveyData";
import publicationData from "@/data/publikasiData";

// Gabungkan semua data (Berita, Survei, Publikasi)
const combinedData = [
  ...newsData.map((item) => ({ ...item, category: "berita" })),
  ...surveyData.map((item) => ({ ...item, category: "survey" })), 
  ...publicationData.map((item) => ({ ...item, category: "publikasi" })),
];

// Fungsi Generate Metadata
export async function generateMetadata({ params }) {
  const rawTag = decodeURIComponent(params.tag.replace(/-/g, " "));
  
  // 🔹 Format Tag agar lebih rapi (Title Case)
  const formattedTag = rawTag.replace(/\b\w/g, (char) => char.toUpperCase());

  // Cari berita dengan tag tersebut
  const relatedPosts = combinedData.filter((item) => 
    item.tags?.some(tag => tag.toLowerCase() === rawTag.toLowerCase())
  );

  // Jika tidak ada berita terkait, tampilkan metadata default
  if (relatedPosts.length === 0) {
    return {
      title: `Tag: ${formattedTag} Tidak Ditemukan | GSRI`,
      description: `Tidak ada berita, publikasi, atau survei yang terkait dengan tag "${formattedTag}".`,
      openGraph: {
        title: `Tag: ${formattedTag} Tidak Ditemukan | GSRI`,
        description: `Tidak ada berita terkait dengan tag "${formattedTag}".`,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/tags/${params.tag}`,
      },
      twitter: {
        card: "summary",
        title: `Tag: ${formattedTag} Tidak Ditemukan | GSRI`,
        description: `Tidak ada berita terkait dengan tag "${formattedTag}".`,
      },
    };
  }

  // Ambil gambar pertama dari berita terkait untuk SEO
  const firstImage = relatedPosts[0]?.image || "/default-thumbnail.jpg";

  return {
    title: `Tag: ${formattedTag} | GSRI`,
    description: `Berita, publikasi, dan survei terbaru dengan tag "${formattedTag}".`,
    openGraph: {
      title: `Tag: ${formattedTag} | GSRI`,
      description: `Lihat semua berita, publikasi, dan survei yang menggunakan tag "${formattedTag}".`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/tags/${params.tag}`,
      images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}${firstImage}` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Tag: ${formattedTag} | GSRI`,
      description: `Jelajahi berita dan riset terbaru dengan tag "${formattedTag}".`,
      images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}${firstImage}` }],
    },
  };
}
