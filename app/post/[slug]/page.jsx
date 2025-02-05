"use client";

import React from "react";
import { useParams } from "next/navigation"; // Import useParams untuk menangani slug
import newsData from "@/data/newsData"; // Import data berita
import Image from "next/image"; // Import Image untuk menampilkan gambar
import Link from "next/link"; // Import Link untuk navigasi antar halaman

const NewsPage = () => {
  const { slug } = useParams(); // Mendapatkan slug dari URL

  // Mencari berita yang sesuai dengan slug
  const newsItem = newsData.find((item) => item.slug === slug);

  if (!newsItem) {
    return <div>Berita tidak ditemukan</div>; // Jika tidak ditemukan, tampilkan pesan
  }

  // Filter berita lainnya untuk ditampilkan sebagai "featured" (5 berita)
  const featuredNews = newsData.filter((item) => item.slug !== slug).slice(0, 5);

  return (
    <div className="max-w-[1400px] py-40 flex gap-16 mx-auto">
      {/* Konten Berita */}
      <div className="flex flex-col w-full px-10 border-r border-gray-700">
        {/* Menampilkan Gambar Berita */}
        <div className="relative w-[60em] h-[500px] mb-6">
          <Image
            src={newsItem.image} // Gambar yang diambil dari data
            alt={newsItem.title}
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>

        {/* Judul Berita */}
        <h1 className="text-4xl font-bold">{newsItem.title}</h1>
        <p className="text-gray-500 mt-5">{newsItem.date}</p>

        {/* Konten Berita */}
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: newsItem.content }} // Render konten HTML
        />
      </div>

      {/* Sidebar untuk Daftar Berita Featured */}
      <div className="w-[300px]">
        <h2 className="text-2xl font-bold text-white mb-6">Berita Terkait</h2>
        <div className="space-y-8">
          {featuredNews.map((item) => (
            <div key={item.id} className="border-b border-gray-700 pb-4 flex flex-col gap-4">
              {/* Thumbnail Gambar Berita */}
              <div className="relative w-[300px] h-[200px] rounded-lg overflow-hidden">
                <Image
                  src={item.image} // Gambar thumbnail untuk berita terkait
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Informasi Berita */}
              <div>
                <p className="text-sm text-white">{item.date}</p>
                <Link href={`/post/${item.slug}`}>
                  <h3 className="text-lg font-semibold text-white cursor-pointer hover:text-cyan-500">{item.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
