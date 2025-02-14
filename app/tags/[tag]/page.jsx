"use client";

import React from "react";
import { useParams } from "next/navigation";
import newsData from "@/data/newsData";
import surveyData from "@/data/surveyData";
import publicationData from "@/data/publikasiData";
import Link from "next/link";
import Image from "next/image";

// Gabungkan semua data (Berita, Publikasi, Survei)
const combinedData = [
  ...newsData.map((item) => ({ ...item, category: "berita" })),
  ...surveyData.map((item) => ({ ...item, category: "survey" })),
  ...publicationData.map((item) => ({ ...item, category: "publikasi" })),
];

export default function TagPage() {
  const params = useParams(); 
  const rawTag = params?.tag || ""; // Pastikan tidak error jika params kosong
  const formattedTag = decodeURIComponent(rawTag.replace(/-/g, " ")).toLowerCase(); 

  // Filter berita berdasarkan tag (Tanpa case-sensitive)
  const filteredNews = combinedData.filter((item) =>
    item.tags?.some((tag) => tag.toLowerCase() === formattedTag)
  );

  if (filteredNews.length === 0) {
    return <div className="text-center text-white py-20">Tidak ada berita dengan tag: {formattedTag}</div>;
  }

  return (
    <div className="2xl:max-w-[1650px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto 2xl:py-40 py-32 2xl:px-8 px-4">
      <h1 className="2xl:text-xl text-lg font-bold text-white mb-6">Tag: {formattedTag}</h1>

      <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredNews.map((item) => (
          <Link key={item.id} href={`/post/${item.slug}`} passHref>
            <div className="border border-gray-700 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform transform hover:scale-105">
              <div className="relative w-full h-[200px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className=" text-lg font-bold hover:text-mains">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="mt-2 text-gray-300 text-sm">
                  {item.description.length > 100 ? item.description.substring(0, 120) + "..." : item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
