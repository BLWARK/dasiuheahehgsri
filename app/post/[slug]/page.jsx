import React from "react";
import NewsClient from "./NewsClient";
import { notFound } from "next/navigation";

// Fungsi fetch ke API berita
async function fetchNewsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/news`, {
    cache: "no-store", // Pastikan selalu fetch data terbaru
  });
  if (!res.ok) {
    throw new Error("Gagal mengambil data berita");
  }
  return res.json();
}

// Fungsi metadata dinamis
export async function generateMetadata({ params }) {
  const slug = await params.slug;

  const combinedData = await fetchNewsData();
  const newsItem = combinedData.find((item) => item.slug === slug);

  if (!newsItem) {
    return {
      title: "Berita Tidak Ditemukan | GSRI",
      description: "Berita yang Anda cari tidak ditemukan.",
    };
  }

  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`;

  return {
    title: `${newsItem.title} | GSRI`,
    description: newsItem.description,
    openGraph: {
      title: newsItem.title,
      description: newsItem.description,
      url: currentUrl,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${newsItem.image}`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: newsItem.title,
      description: newsItem.description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${newsItem.image}`,
        },
      ],
    },
  };
}

// Static params jika diperlukan untuk pre-rendering
export async function generateStaticParams() {
  const combinedData = await fetchNewsData();
  return combinedData.map((item) => ({
    slug: item.slug,
  }));
}

// Halaman utama NewsPage
export default async function NewsPage({ params }) {
  const slug = params.slug;

  // Fetch data dari API
  const combinedData = await fetchNewsData();
  const newsItem = combinedData.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  const featuredNews = combinedData
    .filter((item) => item.slug !== slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`;

  return <NewsClient newsItem={newsItem} currentUrl={currentUrl} featuredNews={featuredNews} />;
}
