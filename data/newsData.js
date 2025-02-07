const newsData = [
    {
        id: 1,
        title: "Pemerintah Luncurkan Program Pangan Nasional untuk Stabilisasi Harga",
        type: "headline",
        image: "/pangan-nasional.jpeg",
        date: "Jan 5 2025",
        description: "Program baru untuk stabilisasi harga dan ketahanan pangan di seluruh wilayah Indonesia.",
        slug: "pemerintah-luncurkan-program-pangan-nasional",
        content: `
          <p>Pemerintah Indonesia melalui Kementerian Pertanian meluncurkan Program Pangan Nasional 2025, yang bertujuan untuk meningkatkan ketahanan pangan di seluruh wilayah tanah air. Program ini juga berfokus pada stabilisasi harga kebutuhan pokok seperti beras, minyak goreng, dan daging.</p>
          <br>
          <strong style="font-size: 24px;">Dukungan Langsung kepada Petani</strong><br><br>
          <p>Program ini memberikan berbagai insentif kepada petani lokal, seperti penyediaan benih unggul, subsidi pupuk, dan pelatihan teknis untuk meningkatkan produktivitas. Pemerintah menargetkan hasil panen meningkat sebesar 15% pada tahun pertama pelaksanaan.</p>
          <br>
          <strong style="font-size: 24px;">Stabilisasi Harga Pasar</strong><br><br>
          <p>Salah satu langkah kunci dalam program ini adalah pembentukan badan stabilisasi harga yang bertugas menjaga ketersediaan barang dan mencegah lonjakan harga bahan pokok. Pemerintah juga akan memperketat pengawasan distribusi dan memperluas akses pasar bagi petani.</p>
          <br>
          <strong style="font-size: 24px;">Kolaborasi dengan Swasta dan Komunitas Lokal</strong><br><br>
          <p>Pemerintah bekerja sama dengan perusahaan swasta dan komunitas lokal untuk membangun gudang penyimpanan yang memadai serta mendukung pembangunan infrastruktur logistik di daerah terpencil. Hal ini bertujuan untuk mengurangi kehilangan hasil panen dan meningkatkan akses pasar.</p>
          <br>
          <strong style="font-size: 24px;">Harapan ke Depan</strong><br><br>
          <p>Dengan peluncuran Program Pangan Nasional, pemerintah berharap dapat menjaga stabilitas ekonomi dan melindungi daya beli masyarakat. Program ini juga bertujuan memperkuat kemandirian pangan, sehingga Indonesia tidak terlalu bergantung pada impor bahan makanan di masa depan.</p>
        `,
        category: "berita",
      },
      
    {
      id: 2,
      title: "Laporan Ekonomi Nasional: Peningkatan Investasi Asing",
      type: "headline",
      image: "/laporan-ekonomi.jpeg",
      date: "Jan 12 2025",
      description:
        "Investasi asing di Indonesia meningkat signifikan pada kuartal pertama 2025, menjadi indikator pertumbuhan ekonomi yang kuat.",
      slug: "laporan-ekonomi-nasional-peningkatan-investasi-asing",
      content: `
        <p>Investasi asing memainkan peranan penting dalam pertumbuhan ekonomi nasional Indonesia pada tahun 2025. Pada kuartal pertama, laporan dari Bank Indonesia mengungkapkan peningkatan 15% dalam arus investasi asing langsung (FDI) dibandingkan dengan periode yang sama tahun sebelumnya.</p>
        <br>
        <p>Pertumbuhan ini didorong oleh sektor infrastruktur, teknologi, dan energi terbarukan yang menjadi fokus utama program strategis pemerintah. Dalam pidatonya, Menteri Keuangan menyatakan bahwa kebijakan fiskal yang fleksibel dan berbagai insentif pajak memainkan peranan penting dalam mendorong minat investor asing.</p>
      `,
      category: "berita",
    },
    {
      id: 3,
      title: "Partisipasi Publik Meningkat dalam Kebijakan Nasional",
      type: "headline",
      image: "/partisipasi.jpeg",
      date: "Feb 5 2025",
      description:
        "Masyarakat semakin aktif dalam memberikan masukan dan partisipasi pada pembuatan kebijakan strategis di tingkat nasional.",
      slug: "partisipasi-publik-meningkat-dalam-kebijakan-nasional",
      content: `
        <p>Keberhasilan implementasi kebijakan publik tidak hanya bergantung pada kualitas kebijakan itu sendiri, tetapi juga pada tingkat partisipasi publik dalam proses pembuatannya. Berdasarkan survei nasional yang dilakukan GSRI, partisipasi publik dalam konsultasi dan dialog kebijakan meningkat sebesar 20% dibandingkan tahun sebelumnya.</p>
        <br>
        <p>Kenaikan ini didorong oleh penyelenggaraan berbagai forum diskusi, baik secara daring maupun tatap muka, di berbagai wilayah Indonesia. Dalam beberapa bulan terakhir, pemerintah menggelar lebih dari 50 acara diskusi publik untuk mendengarkan masukan langsung dari masyarakat.</p>
      `,
      category: "berita",
    },
    {
      id: 4,
      title: "Kebijakan Energi Baru dan Terbarukan",
      type: "headline",
      image: "/terbarukan.jpg",
      date: "Mar 18 2025",
      description:
        "Kebijakan pemerintah fokus pada pengembangan sumber energi terbarukan untuk memenuhi target pengurangan emisi karbon.",
      slug: "kebijakan-energi-baru-dan-terbarukan",
      content: `
        <p>Pemerintah Indonesia mengumumkan kebijakan baru yang berfokus pada pengembangan sumber energi terbarukan, termasuk tenaga surya, angin, dan biomassa, sebagai bagian dari upaya menurunkan emisi karbon sebesar 30% pada tahun 2030.</p>
        <br>
        <p>Program ini mencakup pemberian insentif pajak untuk perusahaan yang berinvestasi dalam energi terbarukan, serta kerja sama dengan lembaga riset untuk mengembangkan teknologi ramah lingkungan.</p>
      `,
      category: "berita",
    },
    {
      id: 5,
      title: "Bocah SMP di Bekasi Antarkan Uang Palsu Dijanjikan Rp50 Ribu, Terbongkar Gegara Kecelakaan",
      type: "headline",
      image: "/uang-palsu.jpg", // Pastikan path gambarnya ada di project
      date: "May 15 2025",
      description:
        "Seorang bocah SMP di Bekasi ditangkap polisi setelah ketahuan mengantar uang palsu ke sebuah toko, terbongkar akibat kecelakaan di jalan.",
      slug: "bocah-smp-di-bekasi-antarkan-uang-palsu",
      content: `
        <p>Kasus peredaran uang palsu kembali mengguncang Bekasi setelah seorang bocah sekolah menengah pertama (SMP) tertangkap tangan membawa uang palsu ke sebuah toko kelontong. Kasus ini terungkap secara tidak sengaja ketika bocah tersebut mengalami kecelakaan di jalan dan mendapat perhatian warga sekitar.</p>
        <br>
        <strong style="font-size: 24px;">Berawal dari Janji Imbalan Rp50 Ribu</strong><br><br>
        <p>Menurut laporan polisi, bocah tersebut mengaku dijanjikan uang tunai Rp50 ribu oleh seseorang yang tidak dikenalnya untuk mengantarkan paket uang ke sebuah toko di Bekasi Timur. Dia tidak menyadari bahwa uang yang dibawanya adalah uang palsu. Bocah itu hanya diberikan instruksi untuk memberikan bungkusan tersebut dan menerima imbalan setelahnya.</p>
        <br>
        <strong style="font-size: 24px;">Kecelakaan yang Menguak Fakta</strong><br><br>
        <p>Perjalanan bocah tersebut berakhir saat ia terlibat dalam kecelakaan kecil dengan seorang pengendara motor di Jalan Ahmad Yani, Bekasi. Warga yang membantu korban kecelakaan menemukan bungkusan uang palsu yang tercecer di jalan. Kecurigaan warga membuat mereka segera menghubungi pihak kepolisian setempat.</p>
        <br>
        <strong style="font-size: 24px;">Polisi Menyelidiki Sindikat Uang Palsu</strong><br><br>
        <p>Kapolres Bekasi, AKBP Rudi Hermawan, menyatakan bahwa kasus ini merupakan pintu masuk bagi penyelidikan lebih lanjut terkait jaringan peredaran uang palsu di wilayah tersebut. "Kami sudah mengantongi beberapa petunjuk dan akan segera menindaklanjuti jaringan yang lebih besar di balik kasus ini," ujarnya.</p>
        <br>
        <strong style="font-size: 24px;">Peringatan bagi Orang Tua dan Masyarakat</strong><br><br>
        <p>Polisi juga mengimbau para orang tua untuk lebih waspada terhadap aktivitas anak-anak mereka. Modus seperti ini kerap menargetkan anak-anak karena mereka mudah dipercaya dan tidak curiga. "Kejadian ini bisa menjadi pelajaran penting bagi masyarakat untuk selalu mengawasi anak-anak dan melaporkan setiap aktivitas mencurigakan," tambah AKBP Rudi.</p>
        <br>
        <strong style="font-size: 24px;">Dukungan Psikologis untuk Bocah Tersangka</strong><br><br>
        <p>Bocah tersebut saat ini mendapat pendampingan dari pihak kepolisian dan Dinas Sosial Bekasi. Mengingat usianya yang masih di bawah umur, polisi memastikan bahwa hak-haknya dilindungi dan proses hukum akan memperhatikan aspek rehabilitasi serta pendidikan.</p>
        <br>
        <p>Kasus ini menjadi pengingat betapa pentingnya kewaspadaan terhadap peredaran uang palsu yang terus mengincar masyarakat dari berbagai lapisan, termasuk anak-anak.</p>
        <br>
        <p><strong>Sumber:</strong> <a href="https://lensaberitajakarta.com/post/13830/bocah-smp-di-bekasi-antarkan-uang-palsu-dijanjikan-rp50-ribu-terbongkar-gegara-kecelakaan" target="_blank" style="color: #1e90ff;">lensaberitajakarta.com</a></p>
      `,
      category: "berita",
    },
    
  ];
  
  export default newsData;
  