"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import newsData from "@/data/newsData";
import surveyData from "@/data/surveyData";
import publicationData from "@/data/publikasiData";
import Image from "next/image"; 
import Link from "next/link";
import Head from "next/head"; // Import Head untuk SEO
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { MdContentCopy } from "react-icons/md"; 

// Gabungkan semua data
const combinedData = [
  ...newsData.map((item) => ({ ...item, category: "berita" })),
  ...surveyData.map((item) => ({ ...item, category: "survey" })),
  ...publicationData.map((item) => ({ ...item, category: "publikasi" })),
];

const NewsPage = () => {
  const { slug } = useParams();
  const [pdfSize, setPdfSize] = useState(null);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const newsItem = combinedData.find((item) => item.slug === slug);

  if (!newsItem) {
    return <div>Berita tidak ditemukan</div>;
  }

  useEffect(() => {
    if (newsItem.pdf) {
      setPdfSize("748KB");
    }
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [newsItem.pdf]);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${newsItem.title} - ${currentUrl}`
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
      newsItem.title
    )}`,
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const featuredNews = combinedData
    .filter((item) => item.slug !== slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{newsItem.title} | GSRI</title>
        <meta name="description" content={newsItem.description} />
        <meta property="og:title" content={newsItem.title} />
        <meta property="og:description" content={newsItem.description} />
        <meta property="og:image" content={newsItem.image} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={newsItem.title} />
        <meta name="twitter:description" content={newsItem.description} />
        <meta name="twitter:image" content={newsItem.image} />
      </Head>

      <div className="max-w-[1400px] py-40 flex gap-16 mx-auto">
        {/* Konten Berita */}
        <div className="flex flex-col w-full px-10 border-r border-gray-700 text-white">
          <div className="relative w-[60em] h-[500px] mb-6">
            <Image src={newsItem.image} alt={newsItem.title} layout="fill" className="object-cover rounded-lg" />
          </div>

          <h1 className="text-4xl font-bold">{newsItem.title}</h1>
          <p className="text-gray-500 mt-5">{newsItem.date}</p>

          <div className="mt-4 text-white" dangerouslySetInnerHTML={{ __html: newsItem.content }} />

          {newsItem.category === "survey" || newsItem.category === "publikasi" ? (
            <div className="mt-8">
              {newsItem.pdf && (
                <div className="flex items-center border border-gray-700 rounded-lg p-4 gap-4 bg-gray-800">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-700 text-white rounded">
                    <i className="fas fa-file-pdf text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{newsItem.pdf.split("/").pop()}</p>
                    <p className="text-sm text-gray-400">Unduh PDF • {pdfSize}</p>
                  </div>
                  <a
                    href={newsItem.pdf}
                    download={newsItem.pdf.split("/").pop()}
                    className="flex items-center gap-2 text-main hover:text-cyan-500 transition"
                  >
                    <i className="fas fa-download text-xl"></i>
                    <span>Unduh PDF</span>
                  </a>
                </div>
              )}

              {newsItem.video && (
                <div className="mt-8">
                  <iframe
                    width="100%"
                    height="400"
                    src={newsItem.video}
                    title="YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              )}
            </div>
          ) : null}

          {/* Section Share ke Media Sosial */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Bagikan ke Media Sosial</h3>
            <div className="flex gap-4 items-center">
              <a
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 transition"
              >
                <FaWhatsapp className="text-white text-2xl" />
              </a>

              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full hover:bg-blue-700 transition"
              >
                <FaFacebookF className="text-white text-2xl" />
              </a>

              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full hover:bg-blue-500 transition"
              >
                <TfiTwitterAlt className="text-white text-2xl" />
              </a>

              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-600 transition"
              >
                <MdContentCopy className="text-white text-2xl" />
              </button>
            </div>

            {copied && <p className="text-sm text-green-400 mt-2">Link disalin ke clipboard!</p>}
          </div>
        </div>

        {/* Sidebar untuk Daftar Berita Featured */}
        <div className="w-[300px]">
          <h2 className="text-2xl font-bold text-white mb-6">Berita Terkait</h2>
          <div className="space-y-8">
            {featuredNews.map((item) => (
              <div key={`${item.category}-${item.id}`} className="border-b border-gray-700 pb-4 flex flex-col gap-4">
                <div className="relative w-[300px] h-[200px] rounded-lg overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm text-white">{item.date}</p>
                  <Link href={`/post/${item.slug}`}>
                    <h3 className="text-lg font-semibold text-white cursor-pointer hover:text-cyan-500">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
