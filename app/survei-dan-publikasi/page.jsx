"use client";

import React, { useState } from "react";
import Link from "next/link";
import newsData from "@/data/newsData";
import surveyData from "@/data/surveyData";
import publicationData from "@/data/publikasiData";
import Image from "next/image";

// Gabungkan semua data dengan menambahkan kategori
const combinedData = [
  ...newsData.map((item) => ({ ...item, category: "berita" })),
  ...surveyData.map((item) => ({ ...item, category: "survey" })),
  ...publicationData.map((item) => ({ ...item, category: "publikasi" })),
];

// Fungsi untuk memotong judul jika terlalu panjang
const truncateTitle = (title, wordLimit) => {
  const words = title.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : title;
};

const SurveyPublicationPage = () => {
  const [activeTab, setActiveTab] = useState("all"); // Default ke all posts
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter data berdasarkan kategori yang dipilih
  const filteredData =
    activeTab === "all"
      ? combinedData
      : combinedData.filter((item) => item.category === activeTab);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ); // Data dengan pagination

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="max-w-[1400px] mx-auto py-40 2xl:px-8 px-4 2xl:flex flex-row gap-10 justify-center">
      {/* KIRI: Konten berdasarkan filter */}
      <div className="flex-1">
        {/* Header Filter */}
        <div className="flex justify-start gap-4 mb-6">
          {["all", "survey", "publikasi", "berita"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1); // Reset ke halaman pertama ketika mengganti tab
              }}
              className={`px-4 py-2 font-semibold 2xl:text-sm text-xs ${
                activeTab === tab ? "bg-mains text-white" : "bg-gray-200 text-gray-700"
              } rounded`}
            >
              {tab === "all" ? "All Posts" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Konten Utama dengan Pagination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedData.map((item) => (
            <Link key={`${item.category}-${item.id}`} href={`/post/${item.slug}`} passHref>
              <div className="border border-gray-700 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform transform hover:scale-105">
                {/* Gambar */}
                <div className="relative w-full h-[200px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                {/* Konten */}
                <div className="p-4">
                  <h3 className="text-xl font-bold hover:text-mains">
                    {truncateTitle(item.title, 6)}
                  </h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="mt-2 text-gray-300 text-sm">
                    {item.description.length > 100
                      ? item.description.substring(0, 100) + "..."
                      : item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* KANAN: Postingan Terbaru */}
      <div className="2xl:w-[30%] 2xl:mt-0 mt-10 w-full border-l border-gray-700 pl-6">
        <h2 className="text-2xl font-bold mb-6">Postingan Terbaru</h2>
        <div className="w-[30%] h-[2px] bg-mains my-5"></div> {/* Garis separator heading */}

        <div className="space-y-6">
          {filteredData.slice(0, 5).map((item) => (
            <Link key={`${item.category}-${item.id}`} href={`/post/${item.slug}`} passHref>
              <div className="flex flex-col items-start gap-4 py-10 border-b border-gray-700 cursor-pointer transition-transform transform hover:scale-105">
                {/* Gambar Thumbnail dengan ukuran tetap */}
                <div className="relative w-[200px] h-[120px] rounded overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                {/* Konten Singkat */}
                <div>
                  <h3 className="text-md font-semibold hover:text-mains">
                    {truncateTitle(item.title, 6)}
                  </h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyPublicationPage;
