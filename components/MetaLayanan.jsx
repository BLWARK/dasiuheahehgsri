import Head from 'next/head';

const MetaLayanan = () => {
  return (
    <Head>
      {/* Meta Data Dasar */}
      <title>Layanan dan Program GSRI - Riset & Evaluasi Kebijakan</title>
      <meta
        name="description"
        content="GSRI menyediakan layanan riset kebijakan publik, evaluasi anggaran, survei opini publik, serta media dan publikasi berbasis riset ilmiah."
      />
      <meta name="keywords" content="GSRI, riset kebijakan, evaluasi anggaran, survei opini, publikasi riset, analisis kebijakan, Data1n" />
      <meta name="author" content="Global Strategi Riset Indonesia (GSRI)" />

      {/* Meta Open Graph untuk Sosial Media */}
      <meta property="og:title" content="Layanan dan Program GSRI - Riset & Evaluasi Kebijakan" />
      <meta
        property="og:description"
        content="GSRI menyediakan layanan riset kebijakan publik, evaluasi anggaran, survei opini publik, serta media dan publikasi berbasis riset ilmiah."
      />
      <meta property="og:image" content="/layanan.jpg" />
      <meta property="og:url" content="https://www.gsri.or.id/layanan" />
      <meta property="og:type" content="website" />

      {/* Meta Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Layanan dan Program GSRI - Riset & Evaluasi Kebijakan" />
      <meta
        name="twitter:description"
        content="GSRI menyediakan layanan riset kebijakan publik, evaluasi anggaran, survei opini publik, serta media dan publikasi berbasis riset ilmiah."
      />
      <meta name="twitter:image" content="/layanan.jpg" />
      <meta name="twitter:site" content="@GSRI" />

      {/* Meta Tambahan */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gsri.or.id/layanan" />
    </Head>
  );
};

export default MetaLayanan;
