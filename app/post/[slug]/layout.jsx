import newsData from "@/data/newsData";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const newsItem = newsData.find((item) => item.slug === slug);

  if (!newsItem) {
    return {
      title: "Berita Tidak Ditemukan | GSRI",
      description: "Berita yang Anda cari tidak ditemukan.",
      robots: "noindex, follow",
    };
  }

  return {
    title: `${newsItem.title} | GSRI`,
    description: newsItem.description,
    openGraph: {
      title: newsItem.title,
      description: newsItem.description,
      url: `https://www.gsri.co.id/post/${newsItem.slug}`,
      images: [
        {
          url: newsItem.image,
          width: 1200,
          height: 630,
          alt: newsItem.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: newsItem.title,
      description: newsItem.description,
      images: [newsItem.image],
    },
  };
}

export default function PostLayout({ children }) {
  return <>{children}</>;
}
