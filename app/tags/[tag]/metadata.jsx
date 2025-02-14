import newsData from "@/data/newsData";
import surveyData from "@/data/surveyData";
import publicationData from "@/data/publikasiData";

const combinedData = [
  ...newsData.map((item) => ({ ...item, category: "berita" })),
  ...surveyData.map((item) => ({ ...item, category: "survey" })),
  ...publicationData.map((item) => ({ ...item, category: "publikasi" })),
];

export async function generateMetadata({ params }) {
  const formattedTag = decodeURIComponent(params.tag.replace(/-/g, " "));

  // Cari berita dengan tag tersebut
  const relatedPosts = combinedData.filter((item) => item.tags?.includes(formattedTag));

  if (relatedPosts.length === 0) {
    return {
      title: `Tag: ${formattedTag} Tidak Ditemukan | GSRI`,
      description: `Tidak ada berita, publikasi, atau survei yang terkait dengan tag "${formattedTag}".`,
    };
  }

  const firstImage = relatedPosts[0]?.image || "/default-thumbnail.jpg";

  return {
    title: `Tag: ${formattedTag} | GSRI`,
    description: `Kumpulan berita, publikasi, dan survei dengan tag "${formattedTag}".`,
    openGraph: {
      title: `Tag: ${formattedTag} | GSRI`,
      description: `Lihat semua konten dengan tag "${formattedTag}".`,
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
