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

  // JSON-LD Schema.org untuk "NewsArticle"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": newsItem.title,
    "description": newsItem.description,
    "url": `https://www.gsri.co.id/post/${newsItem.slug}`,
    "datePublished": new Date(newsItem.date).toISOString(),
    "dateModified": new Date(newsItem.date).toISOString(),
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
    },
    "image": {
      "@type": "ImageObject",
      "url": newsItem.image,
      "width": 1200,
      "height": 630
    }
  };

  return {
    title: `${newsItem.title} | GSRI`,
    description: newsItem.description,
    keywords: newsItem.tags ? newsItem.tags.join(", ") : "",
    robots: "index, follow",
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
    other: {
      "og:type": "article",
      "article:published_time": new Date(newsItem.date).toISOString(),
    },
    jsonLd, // ✅ Tambahkan JSON-LD ke Metadata API
  };
}

export default function PostLayout({ children }) {
  return <>{children}</>;
}
