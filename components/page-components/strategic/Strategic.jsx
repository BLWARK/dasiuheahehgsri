import React from "react";
import Image from "next/image";

const Strategic = () => {
  const goals = [
    {
      id: "1",
      title: "Evaluasi Kebijakan yang Efektif",
      description:
        "Mengukur efektivitas kebijakan dan program pemerintah untuk memastikan bahwa setiap kebijakan memberikan hasil yang optimal dan sesuai tujuan pembangunan nasional.",
    },
    {
      id: "2",
      title: "Peningkatan Akuntabilitas dan Transparansi",
      description:
        "Mendorong pengelolaan pemerintahan yang akuntabel dan transparan melalui evaluasi objektif, sehingga membangun kepercayaan publik terhadap institusi pemerintah.",
    },
    {
      id: "3",
      title: "Partisipasi Publik yang Lebih Aktif",
      description:
        "Memfasilitasi keterlibatan masyarakat dalam proses pembuatan kebijakan melalui survei, dialog, dan pelibatan komunitas, demi menciptakan kebijakan yang inklusif dan responsif.",
    },
    {
      id: "4",
      title: "Rekomendasi Berbasis Data untuk Perbaikan Kinerja",
      description:
        "Memberikan rekomendasi strategis yang berbasis riset dan data terkini untuk meningkatkan kinerja pemerintah serta pelaksanaan program yang lebih baik dan terukur.",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-gray-900 py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">
            Strategic Goals
          </h1>
      {/* Center Image */}
      <div className="relative w-[600px] h-[300px] md:w-[900px] md:h-[700px] 2xl:mb-20 mb-10">
        <Image
          src="/evaluasi.jpg" // Ganti dengan gambar Anda
          alt="Strategic Goals Background"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
        {/* Overlay Title di atas gambar */}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 rounded-lg">
          {/* <h1 className="text-3xl md:text-4xl font-bold text-white">
            Strategic Goals
          </h1> */}
        </div>
      </div>

      {/* Grid Goals Section (Di depan gambar) */}
      <div className="2xl:absolute xl:absolute lg:absolute md:absolute inset-0 flex flex-col justify-center items-center w-full gap-10 2xl:mt-10 2xl:px-0 px-4 ">
        {goals.map((goal, index) => (
          <div
            key={goal.id}
            className={`relative flex items-center  ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            
            {/* Konten dengan Overlay di depan gambar */}
            <div
              className={`relative p-8 bg-white bg-opacity-95 rounded-lg shadow-lg w-[100%] md:w-[55%] ${
                index % 2 === 0 ? "left-0 text-left" : "right-0 text-right"
              }`}
            >
             
              <h2 className="2xl:text-xl text-md font-bold text-main">{goal.title}</h2>
              <p className="mt-2 2xl:text-[0.9em] text-xs text-gray-600">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategic;
