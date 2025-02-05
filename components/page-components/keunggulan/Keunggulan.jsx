import React from "react";
import Image from "next/image";

const Keunggulan = () => {
  const keunggulanList = [
    {
      title: "GSRI sebagai Jembatan Riset dan Kebijakan",
      content:
        "GSRI adalah lembaga riset independen yang menghubungkan data berbasis fakta dengan pembuatan kebijakan strategis. Melalui riset kebijakan, evaluasi kinerja, dan publikasi berkala, GSRI berperan aktif dalam mendukung pemerintah dan lembaga terkait dalam menciptakan kebijakan yang akuntabel, transparan, dan berdampak nyata bagi masyarakat.",
      imageSrc: "/Jembatan.png", // Ganti dengan path gambar sesuai
    },
    {
      title: "Pusat Riset Kebijakan yang Terintegrasi",
      content:
        "GSRI menyediakan layanan riset, evaluasi, dan rekomendasi berbasis data yang dapat langsung diterapkan oleh pemerintah. Dengan jaringan luas dan proses riset yang transparan, GSRI menjadi pusat keunggulan riset terintegrasi yang memberikan solusi atas tantangan demokrasi, transparansi, dan pengelolaan program di Indonesia.",
      imageSrc: "/Riset.png", // Ganti dengan path gambar sesuai
    },
    {
      title: "Inovasi dalam Riset dan Partisipasi Publik",
      content:
        "GSRI mendorong inovasi dalam riset kebijakan dengan memanfaatkan teknologi pengumpulan data digital, survei real-time, dan partisipasi aktif masyarakat. Melalui pendekatan ini, GSRI menghasilkan rekomendasi kebijakan yang relevan dan menyelenggarakan pelatihan serta diskusi publik untuk meningkatkan kesadaran dan partisipasi masyarakat.",
      imageSrc: "/Innovasi.png", // Ganti dengan path gambar sesuai
    },
  ];

  return (
    <div className="w-full  2xl:py-40 py-10 px-6 lg:px-20 bg-main text-white flex flex-col justify-center items-center">
      <div className="max-w-[1400px] flex flex-col w-full justify-center items-center">
      {/* Judul Utama */}
      <div className="text-center mb-12">
        <h2 className="2xl:text-4xl text-2xl font-bold">Apa yang Membuat Kami Berbeda?</h2>
        <p className="mt-4 2xl:text-lg text-md text-gray-300">
          Kami hadir sebagai jembatan antara riset berbasis data dan kebijakan strategis.
        </p>
      </div>

      {/* Konten Keunggulan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {keunggulanList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center  2xl:p-10 p-8 rounded-lg transition-transform duration-300 hover:scale-105 bg-white"
          >
            <div className="relative 2xl:w-[20em] 2xl:h-[7em] w-[14em] h-[4em]">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="rounded-lg object-contain 2xl:mb-6"
            />
            </div>
            <h3 className="2xl:text-xl text-md text-main font-bold mb-4 2xl:mt-10 mt-4">{item.title}</h3>
            <p className="text-black 2xl:text-sm text-xs">{item.content}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Keunggulan;
