"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaFilePdf } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { MdContentCopy } from "react-icons/md";

const NewsClient = ({ newsItem, currentUrl, featuredNews }) => {
  const [pdfSize, setPdfSize] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (newsItem.pdf) {
      setPdfSize("748KB");
    }
  }, [newsItem.pdf]);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${newsItem.title} - ${currentUrl}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(newsItem.title)}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[1400px] py-40 2xl:flex flex-row 2xl:gap-4 gap-16 mx-auto">
      {/* Konten Berita */}
      <div className="flex flex-col w-full 2xl:px-10 px-4 border-r border-gray-700 text-white">
        <h1 className="2xl:text-4xl text-2xl font-bold">{newsItem.title}</h1>
        <p className="text-gray-500 mb-5 mt-2">{newsItem.date}</p>
        <div className="relative 2xl:w-[60em] 2xl:h-[500px] w-[24.5em] h-[300px] mb-6">
          <Image src={newsItem.image} alt={newsItem.title} fill className="object-cover rounded-lg" />
        </div>

        <div className="mt-4 text-white" dangerouslySetInnerHTML={{ __html: newsItem.content }} />

        {newsItem.category === "survey" || newsItem.category === "publikasi" ? (
          <div className="mt-8">
            {newsItem.pdf && (
              <div className="flex items-center border border-gray-700 rounded-lg p-4 gap-4 bg-gray-800">
                <div className="w-12 h-12 flex items-center justify-center bg-red-700 text-white rounded text-2xl">
                  <FaFilePdf />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{newsItem.pdf.split("/").pop()}</p>
                  <p className="text-sm text-gray-400">Unduh PDF • {pdfSize}</p>
                </div>
                <a href={newsItem.pdf} download={newsItem.pdf.split("/").pop()} className="flex items-center gap-2 text-white hover:text-cyan-500 transition">
                  <span>Unduh PDF</span>
                </a>
              </div>
            )}
          </div>
        ) : null}

        <div className="mt-12 border border-gray-700 p-10">
          <h3 className="text-md font-bold mb-4">Bagikan berita ini</h3>
          <div className="flex gap-4 items-center">
            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-600 transition">
              <FaWhatsapp className="text-white text-xl" />
            </a>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition">
              <FaFacebookF className="text-white text-xl" />
            </a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-blue-400 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-500 transition">
              <TfiTwitterAlt className="text-white text-xl" />
            </a>
            <button onClick={handleCopyLink} className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600 transition">
              <MdContentCopy className="text-white text-xl" />
            </button>
          </div>
          {copied && <p className="text-sm text-green-400 mt-2">Link disalin ke clipboard!</p>}
        </div>
      </div>

      {/* Sidebar untuk Featured News */}
      <div className="2xl:w-[400px] w-full px-4 2xl:mt-0 mt-10">
        <h2 className="text-2xl font-bold text-mains mb-6">Berita Terbaru</h2>
        <div className="w-[30%] h-[2px] bg-mains my-5"></div>
        <div className="space-y-8">
          {featuredNews.map((item) => (
            <div key={`${item.category}-${item.slug}`} className="border-b border-gray-700 pb-4 flex flex-col gap-4">
              <div className="relative w-[350px] h-[200px] rounded-lg overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{item.date}</p>
                <Link href={`/post/${item.slug}`}>
                  <h3 className="text-md font-semibold text-white cursor-pointer hover:text-cyan-500">
                    {item.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsClient;
