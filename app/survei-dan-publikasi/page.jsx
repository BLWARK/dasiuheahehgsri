"use client";

import React, { useState } from "react";
import Link from "next/link";
import newsData from "@/data/newsData";
import Image from "next/image";

// Gunakan hanya data berita
const combinedData = [...newsData.map((item) => ({ ...item, category: "berita" }))];

// Fungsi untuk memotong judul jika terlalu panjang
const truncateTitle = (title, wordLimit) => {
  const words = title.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : title;
};

const SurveyPublicationPage = () => {
  const [activeTab, setActiveTab] = useState("all"); // Default ke all posts
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter dan sort data berdasarkan kategori yang dipilih
  const filteredData = (
    activeTab === "all"
      ? combinedData
      : combinedData.filter((item) => item.category === activeTab)
  ).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort berdasarkan tanggal terbaru

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ); // Data dengan pagination

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="2xl:max-w-[1650px] xl:max-w-[1200px] lg:max-w-[950px] mx-auto 2xl:py-40 py-28 2xl:px-8 px-4 2xl:flex flex-row gap-10 justify-center text-white">
      {/* KIRI: Konten berdasarkan filter */}
      <div className="flex-1">
        {/* Header Filter */}
        <div className="flex justify-start 2xl:gap-4 gap-3 mb-6">
          {[
            { key: "all", label: "All Posts", disabled: false },
            { key: "berita", label: "Berita", disabled: false },
            { key: "riset", label: "Riset", disabled: true },
            { key: "publikasi", label: "Publikasi", disabled: true },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                if (!tab.disabled) {
                  setActiveTab(tab.key);
                  setCurrentPage(1); // Reset ke halaman pertama ketika mengganti tab
                }
              }}
              disabled={tab.disabled}
              className={`2xl:px-4 px-3 py-2 font-semibold 2xl:text-sm text-xs rounded transition-all ${
                tab.disabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : activeTab === tab.key
                  ? "bg-mains text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Konten Utama dengan Pagination (Hanya untuk All Posts & Berita) */}
        {activeTab !== "riset" && activeTab !== "publikasi" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedData.map((item) => (
                <Link key={`${item.category}-${item.id}`} href={`/post/${item.slug}`} passHref>
                  <div className="border border-gray-700 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform transform hover:scale-105">
                    {/* Gambar */}
                    <div className="relative w-full 2xl:h-[300px] h-[200px]">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    {/* Konten */}
                    <div className="p-4">
                      <h3 className="2xl:text-xl text-md font-bold hover:text-mains">
                        {truncateTitle(item.title, 8)}
                      </h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                      <p className="mt-2 text-gray-300 2xl:text-sm text-xs">
                        {item.description.length > 100
                          ? item.description.substring(0, 120) + "..."
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
          </>
        )}
      </div>

      {/* KANAN: Postingan Terbaru */}
      <div className="2xl:w-[25%] xl:w-full lg:w-full 2xl:mt-0 mt-10 w-full 2xl:border-l border-gray-700 2xl:pl-6 text-white">
        <h2 className="text-2xl font-bold mb-6 text-mains">Postingan Terbaru</h2>
        <div className="w-[30%] h-[2px] bg-mains 2xl:my-5 xl:my-0 lg:my-0"></div> {/* Garis separator heading */}

        <div className="2xl:space-y-6 xl:space-y-0 lg:space-y-0 2xl:flex 2xl:flex-col xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2  ">
          {filteredData.slice(0, 5).map((item) => (
            <Link key={`${item.category}-${item.id}`} href={`/post/${item.slug}`} passHref>
              <div className="flex flex-col items-start gap-4 py-10 border-b border-gray-700 cursor-pointer transition-transform transform hover:scale-105">
                {/* Gambar Thumbnail dengan ukuran tetap */}
                <div className="relative 2xl:w-full xl:w-[90%] lg:w-[90%] h-[200px] rounded overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                {/* Konten Singkat */}
                <div>
                  <h3 className="2xl:text-lg 2xl:text-md lg:text-xs text-md font-semibold hover:text-mains text-white">
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
