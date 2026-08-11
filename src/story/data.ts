import { SceneConfig, ChapterConfig } from './types';

export const chapters: ChapterConfig[] = [
  { id: 'chapter_01', title: 'Welcome to WordPress Campus Connect', color: '#3B82F6', icon: 'Sun' },
  { id: 'chapter_02', title: 'Career Opportunities', color: '#F59E0B', icon: 'Users' },
  { id: 'chapter_03', title: 'Community & Open Source', color: '#10B981', icon: 'Globe' },
  { id: 'chapter_04', title: 'WordPress Modern', color: '#8B5CF6', icon: 'Layout' },
  { id: 'chapter_05', title: 'Hands-on Workshop', color: '#EC4899', icon: 'PenTool' },
  { id: 'chapter_06', title: 'Closing', color: '#6366F1', icon: 'Star' },
];

export const storyScenes: SceneConfig[] = [
  // Slide 1
  {
    id: 'scene_01',
    chapterId: 'chapter_01',
    headline: "WordPress Campus Connect",
    supportingSentence: "UIN Sultan Maulana Hasanuddin Banten 2026",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 2
  {
    id: 'scene_02',
    chapterId: 'chapter_01',
    headline: "About Speaker",
    supportingSentence: "Kenali pembicara yang akan menemani perjalanan belajar hari ini.",
    points: [
      "Febri Suryanto (WordPress Enthusiast & Web Developer)",
      "Pengalaman (Membangun dan mengoptimalkan berbagai website berbasis WordPress)",
      "Misi (Berbagi ilmu teknologi web modern untuk generasi muda Indonesia)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 3
  {
    id: 'scene_03',
    chapterId: 'chapter_01',
    headline: "Welcome to WordPress Campus Connect",
    supportingSentence: "Mari mengenal WordPress, memahami ekosistemnya, serta mempelajari bagaimana WordPress digunakan untuk membangun website modern yang cepat, fleksibel, dan mudah dikembangkan.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 4
  {
    id: 'scene_04',
    chapterId: 'chapter_01',
    headline: "Learning Objectives",
    supportingSentence: "Setelah mengikuti sesi ini, peserta diharapkan memahami konsep dasar WordPress dan siap membangun website menggunakan WordPress Modern.",
    points: [
      "Memahami Website dan CMS (Konsep dasar kerja web dan pengelolaan konten)",
      "Mengenal WordPress dan Ekosistemnya (Sejarah, market share, dan ekosistem open-source)",
      "Memahami WordPress Modern (Arsitektur blok, Gutenberg, dan Site Editor terbaru)",
      "Siap Mengikuti Hands-on Workshop (Praktik langsung membuat halaman website profesional)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 5
  {
    id: 'scene_05',
    chapterId: 'chapter_01',
    headline: "Agenda Pembelajaran",
    supportingSentence: "Sesi teori akan disampaikan secara ringkas sebelum dilanjutkan dengan praktik membangun website menggunakan WordPress.",
    points: [
      "01 Introduction (Konsep website, CMS, dan cara kerjanya)",
      "02 Career Opportunities (Peluang karier dan industri berbasis WordPress)",
      "03 Community & Open Source (Kontribusi dan komunitas WordPress global)",
      "04 WordPress Modern (Teknologi Gutenberg, blok, dan Full Site Editing)",
      "05 Hands-on Workshop (Praktik langsung merancang website profesional)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 6
  {
    id: 'scene_06',
    chapterId: 'chapter_01',
    headline: "Mengapa Website Penting?",
    supportingSentence: "Website menjadi fondasi utama transformasi digital untuk individu, organisasi, institusi pendidikan, dan bisnis di era modern.",
    points: [
      "Identitas Digital (Membangun kredibilitas, branding, dan portofolio profesional secara online)",
      "Kontrol Penuh (Memiliki kepemilikan penuh atas konten, desain, dan data tanpa bergantung platform lain)",
      "Aksesibilitas 24/7 (Informasi dan layanan dapat diakses oleh siapa saja, kapan saja, di seluruh dunia)",
      "Skalabilitas Tinggi (Bisa dikembangkan dari blog sederhana hingga platform bisnis berskala besar)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 7
  {
    id: 'scene_07',
    chapterId: 'chapter_01',
    headline: "Bagaimana Website Bekerja?",
    supportingSentence: "Ketika pengguna mengakses sebuah website, browser akan berkomunikasi dengan server melalui internet untuk mengambil data dan menampilkan halaman.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 8
  {
    id: 'scene_08',
    chapterId: 'chapter_01',
    headline: "CMS (Content Management System)",
    supportingSentence: "Platform perangkat lunak yang dirancang khusus untuk mempermudah pembuatan, pengelolaan, dan modifikasi konten website secara visual.",
    points: [
      "Tanpa Coding (Membuat dan memperbarui konten tanpa perlu menulis kode HTML/CSS dari nol)",
      "Panel Admin (Menyediakan antarmuka visual/Dashboard yang intuitif untuk mengelola konten)",
      "Manajemen Pengguna (Mendukung kolaborasi tim dengan pembagian peran seperti Admin, Editor, dan Penulis)",
      "Efisiensi Tinggi (Menghemat waktu dan biaya pengembangan website secara signifikan)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 9
  {
    id: 'scene_09',
    chapterId: 'chapter_01',
    headline: "Apa itu WordPress?",
    supportingSentence: "WordPress adalah Content Management System (CMS) open-source paling populer di dunia yang digunakan untuk membangun berbagai jenis website.",
    points: [
      "43%+ Web Dunia (Memberdayakan lebih dari 43% dari seluruh website yang ada di internet saat ini)",
      "Open Source (Bebas digunakan, dimodifikasi, dan dikembangkan oleh siapa saja secara gratis)",
      "Ekosistem Luas (Memiliki puluhan ribu tema visual dan plugin fitur yang siap digunakan)",
      "Fleksibilitas Tinggi (Satu platform untuk semua jenis web, mulai dari blog pribadi hingga toko online global)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 10
  {
    id: 'scene_10',
    chapterId: 'chapter_01',
    headline: "Sejarah WordPress",
    supportingSentence: "WordPress lahir dari visi untuk menciptakan platform publikasi personal yang elegan dan didukung penuh oleh komunitas.",
    points: [
      "2003 (Diluncurkan pertama kali pada 27 Mei 2003 oleh Matt Mullenweg dan Mike Little)",
      "Matt Mullenweg & Mike Little (Pendiri utama yang memulai proyek berdasarkan platform lama b2/cafelog)",
      "b2/cafelog (Proyek open-source awal yang menjadi fondasi dan kode dasar lahirnya WordPress)",
      "Blog Platform (Fokus awal WordPress murni sebagai platform penulisan blog pribadi yang sederhana)",
      "CMS Modern (Berevolusi menjadi CMS canggih yang mampu mengelola segala jenis website modern)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 11
  {
    id: 'scene_11',
    chapterId: 'chapter_01',
    headline: "Market Share CMS",
    supportingSentence: "WordPress mendominasi pangsa pasar CMS global dengan margin yang sangat signifikan dibanding kompetitor lainnya.",
    points: [
      "WordPress — 59.2%",
      "Shopify — 7.5%",
      "Wix — 6.1%",
      "Squarespace — 3.5%",
      "Joomla — 1.7%",
      "Webflow — 1.2%"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Real-World Case Studies Slide
  {
    id: 'scene_case_studies',
    chapterId: 'chapter_01',
    headline: "Real-World Case Studies",
    supportingSentence: "Bukti nyata keandalan WordPress di skala global & lokal: NASA, Meta, Disney, Sony Music, White House, hingga Toko Online Lokal.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 12
  {
    id: 'scene_12',
    chapterId: 'chapter_01',
    headline: "WordPress.com vs WordPress.org",
    supportingSentence: "Keduanya menggunakan nama WordPress, tetapi memiliki konsep hosting dan hak pengguna yang sangat berbeda.",
    points: [
      "Hosting & Setup (WordPress.com di-host & dikelola otomatis oleh platform; WordPress.org self-hosted mandiri di server sendiri)",
      "Plugin & Tema (WordPress.com memakai tema/plugin terkurasi; WordPress.org memberikan akses bebas 100% ke 59.000+ plugin & tema kustom)",
      "Pemeliharaan & Keamanan (WordPress.com mengurus update & backup otomatis; WordPress.org memerlukan pemeliharaan & proteksi dari pemilik situs)",
      "Monetisasi & Kontrol (WordPress.com terikat paket langganan; WordPress.org memberikan kebebasan komersial & kepemilikan 100% tanpa batasan)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Cost & Effort Comparison Slide
  {
    id: 'scene_cost_effort',
    chapterId: 'chapter_01',
    headline: "Perbandingan Cost & Effort",
    supportingSentence: "Visualisasi matriks perbandingan biaya awal, waktu pengerjaan, dan kepemilikan data: WordPress vs Framework Custom vs Closed SaaS.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 13
  {
    id: 'scene_13',
    chapterId: 'chapter_02',
    headline: "Career Opportunities",
    supportingSentence: "WordPress membuka berbagai peluang karier di industri digital, baik sebagai profesional di perusahaan maupun sebagai freelancer mandiri.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 14
  {
    id: 'scene_14',
    chapterId: 'chapter_02',
    headline: "Mengapa Belajar WordPress?",
    supportingSentence: "Belajar WordPress memberikan banyak keuntungan karena ekosistemnya yang sangat luas, stabil, dan terus berkembang pesat.",
    points: [
      "Dipercaya Industri (Digunakan oleh brand global, agensi digital, media besar, hingga startup)",
      "Banyak Peluang Kerja (Permintaan tinggi untuk developer, desainer web, content creator, dan SEO specialist)",
      "Mudah Dipelajari (Kurva belajar yang ramah untuk pemula tanpa wajib memiliki latar belakang coding)",
      "Skill Jangka Panjang (WordPress terus berevolusi sehingga keahlian ini akan tetap relevan hingga bertahun-tahun)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 15
  {
    id: 'scene_15',
    chapterId: 'chapter_02',
    headline: "Career Opportunities",
    supportingSentence: "Berikut adalah bidang-bidang karier utama yang sangat dicari di ekosistem digital berbasis WordPress.",
    points: [
      "WordPress Developer (Membangun tema kustom, plugin khusus, dan mengintegrasikan sistem kompleks)",
      "Web Designer (Merancang tata letak visual, estetika, warna, dan antarmuka pengguna website)",
      "SEO & Content Specialist (Mengoptimalkan peringkat mesin pencari dan mempublikasikan konten yang menarik)",
      "Freelance Creator (Menawarkan jasa pembuatan website ke klien lokal dan internasional secara mandiri)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 16
  {
    id: 'scene_16',
    chapterId: 'chapter_02',
    headline: "Skill yang Dibutuhkan",
    supportingSentence: "Untuk menjadi profesional di ekosistem WordPress, Anda membutuhkan kombinasi keterampilan teknis dan non-teknis.",
    points: [
      "HTML & CSS (Memahami struktur halaman dan cara melakukan penyesuaian visual tampilan website)",
      "Dashboard Mastery (Menguasai seluruh menu admin, konfigurasi pengaturan, dan pengelolaan pustaka media)",
      "Page Builders (Menguasai penggunaan Block Editor (Gutenberg), Elementor, atau page builder populer lainnya)",
      "Basic PHP & Server (Memahami logika bahasa pemrograman WordPress serta pengelolaan hosting dasar)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 17
  {
    id: 'scene_17',
    chapterId: 'chapter_02',
    headline: "Portfolio & Freelance",
    supportingSentence: "Membangun portofolio nyata adalah kunci utama untuk mendapatkan kepercayaan klien dan bersaing di pasar freelance global.",
    points: [
      "Mulai Proyek Mandiri (Buat website portofolio pribadi atau tawarkan jasa gratis untuk organisasi sosial)",
      "Tampilkan Studi Kasus (Jelaskan masalah bisnis klien dan bagaimana website buatan Anda menyelesaikannya)",
      "Manfaatkan Marketplace (Gunakan platform seperti Upwork, Fiverr, atau LinkedIn untuk menjangkau klien pertama)",
      "Kontribusi Terbuka (Ikut membantu komunitas lokal untuk memperluas jaringan profesional Anda)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 18
  {
    id: 'scene_18',
    chapterId: 'chapter_03',
    headline: "Community & Open Source",
    supportingSentence: "WordPress tumbuh dan berkembang pesat berkat kontribusi sukarela dari jutaan orang di seluruh dunia dalam komunitas Open Source.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 19
  {
    id: 'scene_19',
    chapterId: 'chapter_03',
    headline: "Who Develops WordPress?",
    supportingSentence: "WordPress tidak dimiliki oleh satu perusahaan tunggal, melainkan dikembangkan bersama secara transparan oleh komunitas global.",
    points: [
      "Core Contributors (Ribuan programmer yang secara konsisten menulis, menguji, dan memperbarui kode utama)",
      "Theme & Plugin Creators (Para pengembang independen yang memperluas fungsionalitas dan pilihan desain)",
      "Translators & Support (Relawan yang menerjemahkan WordPress ke berbagai bahasa dan membantu di forum diskusi)",
      "Users Worldwide (Setiap masukan dan laporan bug dari pengguna turut membantu menyempurnakan platform)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 20
  {
    id: 'scene_20',
    chapterId: 'chapter_03',
    headline: "WordPress Foundation",
    supportingSentence: "Organisasi non-profit yang didirikan untuk melindungi hak kekayaan intelektual dan kelangsungan WordPress.",
    points: [
      "Melindungi Merek (Memastikan nama dan logo WordPress dilindungi secara hukum dari penyalahgunaan komersial)",
      "Menjaga Kebebasan (Menjamin bahwa kode sumber WordPress akan selalu bebas diakses, gratis, dan open-source)",
      "Edukasi Global (Mendukung inisiatif pembelajaran teknologi web untuk masyarakat luas di seluruh penjuru dunia)",
      "Membimbing Komunitas (Menyediakan panduan bagi kelompok pengguna lokal untuk menyelenggarakan acara resmi)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 21
  {
    id: 'scene_21',
    chapterId: 'chapter_03',
    headline: "WordCamp & Meetup",
    supportingSentence: "Konferensi resmi dan pertemuan santai komunitas WordPress untuk saling berbagi ilmu, pengalaman, dan berjejaring.",
    points: [
      "WordCamp (Konferensi skala besar tingkat kota, regional, hingga benua yang dihadiri ribuan pecinta WordPress)",
      "Local Meetup (Pertemuan berkala bulanan yang diadakan komunitas lokal secara gratis untuk bertukar pengetahuan)",
      "Meetup Serang (meetup.com/wpserang)",
      "Networking Luas (Tempat berkumpulnya pebisnis, developer, desainer, blogger, dan pemula untuk berkolaborasi)",
      "Sharing is Caring (Semua pembicara dan panitia adalah relawan yang murni ingin berkontribusi bagi komunitas)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 22
  {
    id: 'scene_22',
    chapterId: 'chapter_03',
    headline: "WordPress Campus Connect",
    supportingSentence: "Inisiatif edukasi kolaboratif untuk memperkenalkan ekosistem WordPress langsung ke lingkungan universitas dan mahasiswa.",
    points: [
      "Literasi Web (Membantu mahasiswa memahami dunia pengembangan web dan CMS modern secara profesional)",
      "Kesiapan Kerja (Membekali mahasiswa dengan keterampilan praktis yang sangat dicari di industri digital)",
      "Jaringan Kampus (Menghubungkan mahasiswa dengan pakar industri, komunitas lokal, dan peluang magang)",
      "Inovasi Kreatif (Mendorong mahasiswa menciptakan karya digital bermanfaat menggunakan platform WordPress)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 23
  {
    id: 'scene_23',
    chapterId: 'chapter_04',
    headline: "WordPress Modern",
    supportingSentence: "Memahami evolusi WordPress masa kini yang telah berubah menjadi platform desain visual berbasis blok yang sangat canggih.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 24
  {
    id: 'scene_24',
    chapterId: 'chapter_04',
    headline: "Arsitektur WordPress",
    supportingSentence: "Pahami bagaimana komponen core, database, tema, dan plugin saling bekerja sama dalam arsitektur WordPress.",
    points: [
      "WordPress Core (Sistem utama yang mengatur semua logika dasar, otentikasi pengguna, dan manajemen konten)",
      "Database (MySQL/MariaDB tempat menyimpan artikel, pengaturan situs, konfigurasi, dan data pengguna)",
      "Themes (Lapisan visual yang mengontrol desain, tata letak, warna, dan estetika website)",
      "Plugins (Modul tambahan yang memperluas fungsi dasar website, seperti SEO, toko online, dan keamanan)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 25
  {
    id: 'scene_25',
    chapterId: 'chapter_04',
    headline: "Dashboard WordPress",
    supportingSentence: "Panel administrasi pusat (/wp-admin) yang menjadi pusat kendali seluruh aktivitas pengelolaan website Anda.",
    points: [
      "Menu Utama (Akses cepat ke Posts, Pages, Media, Appearance, Plugins, Users, dan Settings)",
      "Atur Konfigurasi (Mengatur judul web, format URL (permalinks), privasi, dan diskusi komentar)",
      "Visual & Responsif (Antarmuka Dashboard yang rapi dan mudah diakses baik dari desktop maupun perangkat mobile)",
      "Keamanan Akses (Mendukung otentikasi aman dan pengaturan profil masing-masing pengguna)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 26
  {
    id: 'scene_26',
    chapterId: 'chapter_04',
    headline: "Posts vs Pages",
    supportingSentence: "Dua tipe konten utama yang mendasari seluruh struktur halaman dan informasi pada WordPress.",
    points: [
      "Posts (Artikel dinamis, memiliki tanggal terbit, penulis, kategori, tag, dan cocok untuk blog atau berita)",
      "Pages (Halaman statis, tidak memiliki tanggal terbit, berstruktur hierarkis, cocok untuk About, Contact, Home)",
      "Navigasi (Pages biasanya dijadikan menu utama, sementara Posts ditampilkan mengalir dalam feed artikel)",
      "Struktur URL (Posts diatur berdasarkan kategori atau tanggal, sedangkan Pages memiliki URL yang statis)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 27
  {
    id: 'scene_27',
    chapterId: 'chapter_04',
    headline: "Themes & Plugins",
    supportingSentence: "Dua pilar utama yang memberikan kekuatan kustomisasi tanpa batas pada ekosistem WordPress.",
    points: [
      "Themes (Mengontrol seluruh tampilan visual; Anda bisa mengganti tema kapan saja tanpa merusak konten)",
      "Plugins (Menambahkan fungsionalitas baru; misalnya untuk mempercepat web, SEO, formulir, hingga e-commerce)",
      "Direktori Resmi (Tersedia puluhan ribu opsi gratis yang telah diaudit keamanannya di repositori WordPress)",
      "Sinergi Sempurna (Kombinasi tema yang tepat dan plugin yang efisien menghasilkan website yang tangguh)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 28
  {
    id: 'scene_28',
    chapterId: 'chapter_04',
    headline: "Gutenberg Block Editor",
    supportingSentence: "Editor halaman modern WordPress yang mengubah teks biasa menjadi rangkaian blok visual yang dinamis.",
    points: [
      "Editor Visual (Melihat tampilan halaman yang sedang diedit persis seperti hasil akhirnya secara real-time)",
      "Berbasis Blok (Setiap paragraf, gambar, tombol, dan kolom adalah sebuah blok mandiri yang mudah diatur)",
      "Drag & Drop (Memindahkan elemen desain dengan mudah tanpa perlu menyentuh sebaris kode pemrograman)",
      "Performa Cepat (Ringan dan menghasilkan kode HTML bersih yang sangat bersahabat dengan SEO)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 29
  {
    id: 'scene_29',
    chapterId: 'chapter_04',
    headline: "Blocks & Patterns",
    supportingSentence: "Susun elemen desain dari blok individual atau gunakan kumpulan pola siap pakai untuk mempercepat pembuatan halaman.",
    points: [
      "Blok Dasar (Paragraf, Heading, Image, List, Quote, Button, hingga Video)",
      "Block Patterns (Kombinasi tata letak blok yang dirancang desainer profesional untuk bagian tertentu, seperti Hero, Features)",
      "Kustomisasi Pola (Pola yang dimasukkan bisa langsung diedit teks, warna, dan gambarnya sesuai keinginan Anda)",
      "Reusable Blocks (Membuat blok buatan sendiri yang dapat digunakan kembali di halaman-halaman lain)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 30
  {
    id: 'scene_30',
    chapterId: 'chapter_04',
    headline: "Site Editor",
    supportingSentence: "Fitur Full Site Editing (FSE) yang memungkinkan Anda mendesain seluruh bagian website secara langsung.",
    points: [
      "Edit Header & Footer (Merancang bagian atas dan bawah website secara visual langsung dari editor)",
      "Desain Template (Membuat template khusus untuk halaman artikel tunggal, arsip berita, atau halaman 404)",
      "Navigasi Blok (Mengatur menu navigasi website menggunakan blok navigasi yang interaktif)",
      "Unified Experience (Pengalaman mendesain yang konsisten dari bagian isi hingga ke seluruh tata letak web)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 31
  {
    id: 'scene_31',
    chapterId: 'chapter_04',
    headline: "Global Styles",
    supportingSentence: "Panel pengaturan terpusat untuk mengontrol estetika warna, tipografi, dan tata letak seluruh website Anda.",
    points: [
      "Palet Warna Utama (Menentukan warna primer, sekunder, dan background yang otomatis berlaku di semua blok)",
      "Tipografi Terpadu (Mengatur jenis font, ukuran, dan line-height untuk seluruh heading dan teks paragraf)",
      "Layout Spacing (Menyesuaikan padding dan margin default antar blok untuk konsistensi visual)",
      "Gaya Blok Khusus (Mengatur tampilan tombol atau link secara global agar seragam di semua halaman)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 32
  {
    id: 'scene_32',
    chapterId: 'chapter_04',
    headline: "Workflow WordPress",
    supportingSentence: "Alur kerja standar yang terstruktur untuk membangun website profesional dari awal hingga siap diluncurkan.",
    points: [
      "Perencanaan (Menentukan tujuan website, struktur menu halaman, serta menyiapkan konten teks dan gambar)",
      "Instalasi & Setup (Memasang WordPress di server hosting dan mengatur konfigurasi dasar di menu Settings)",
      "Desain & Tata Letak (Memilih tema modern berbasis blok dan menyusun tata letak halaman utama)",
      "Peluncuran & Optimasi (Melakukan pengujian di berbagai perangkat, memasang plugin SEO, dan meluncurkan website)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 33
  {
    id: 'scene_33',
    chapterId: 'chapter_05',
    headline: "Hands-on Workshop",
    supportingSentence: "Saatnya kita mempraktikkan langsung semua materi teori untuk membangun website profesional pertama Anda.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 34
  {
    id: 'scene_34',
    chapterId: 'chapter_05',
    headline: "Yang Akan Dipraktikkan",
    supportingSentence: "Inilah langkah-langkah praktis yang akan segera kita kerjakan bersama-sama pada komputer masing-masing.",
    points: [
      "Instalasi Lokal (Menjalankan WordPress di komputer sendiri menggunakan software LocalWP)",
      "Login Administrator (Mengakses Dashboard admin melalui alamat /wp-admin lokal)",
      "Buat Beranda (Mendesain halaman utama menggunakan Gutenberg Block Editor dan Block Patterns)",
      "Atur Navigasi (Membuat menu navigasi utama website di bagian header secara visual)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 35
  {
    id: 'scene_35',
    chapterId: 'chapter_05',
    headline: "Persiapan Praktik",
    supportingSentence: "Pastikan semua perangkat dan kebutuhan teknis telah siap sebelum kita memulai hands-on workshop.",
    points: [
      "Software LocalWP (Pastikan LocalWP sudah terpasang dan dalam status aktif berjalan)",
      "Web Browser (Gunakan browser modern seperti Google Chrome, Microsoft Edge, atau Mozilla Firefox)",
      "Bahan Konten (Siapkan logo, gambar pendukung, dan teks singkat tentang website yang ingin dibuat)",
      "Semangat Belajar (Jangan takut mencoba, bereksplorasi, dan tanyakan pada asisten jika ada kendala teknis)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 36
  {
    id: 'scene_36',
    chapterId: 'chapter_06',
    headline: "Closing Sesi",
    supportingSentence: "Rangkuman perjalanan belajar hari ini serta langkah selanjutnya untuk terus mengembangkan keahlian WordPress Anda.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 37
  {
    id: 'scene_37',
    chapterId: 'chapter_06',
    headline: "Resources & Pembelajaran",
    supportingSentence: "Kumpulan sumber daya resmi dan gratis untuk membantu Anda memperdalam ilmu WordPress secara mandiri.",
    points: [
      "Learn WordPress (Situs pembelajaran resmi dari WordPress yang menyediakan tutorial gratis, kursus, dan webinar)",
      "WordPress.org Codex (Dokumentasi teknis lengkap mengenai kode, fungsi, dan standar pengembangan WordPress)",
      "Meetup Serang (meetup.com/wpserang)",
      "Komunitas Lokal (Bergabung dengan grup Facebook, Telegram, dan forum diskusi WordPress Indonesia)",
      "Tutorial Online (Manfaatkan blog, YouTube, dan kursus online terpercaya untuk terus menambah wawasan)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 38
  {
    id: 'scene_38',
    chapterId: 'chapter_06',
    headline: "Sesi Tanya Jawab (Q&A)",
    supportingSentence: "Punya pertanyaan seputar materi teori atau kendala selama praktik? Mari diskusikan bersama di sesi ini.",
    points: [
      "Kendala Teknis (Diskusikan masalah seputar instalasi lokal, tema, plugin, atau error yang dialami)",
      "Karier & Peluang (Tanyakan lebih lanjut mengenai peluang industri, freelance, atau cara mendapatkan klien)",
      "Pengembangan Lanjut (Bagaimana cara belajar PHP, membuat tema kustom, atau topik tingkat lanjut lainnya)",
      "Saran & Masukan (Berikan masukan berharga Anda agar acara selanjutnya dapat diselenggarakan lebih baik lagi)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 39
  {
    id: 'scene_39',
    chapterId: 'chapter_06',
    headline: "Connect With Me",
    supportingSentence: "Mari tetap terhubung untuk saling berbagi wawasan, berkolaborasi, dan memperluas jaringan profesional.",
    points: [
      "Febri Suryanto (Founder & CEO Ziezan Solutions, WordPress Specialist & AI Solutions Engineer)",
      "Website (febrisuryanto.com)",
      "Instagram (@febrisuryantoid)",
      "LinkedIn (linkedin.com/in/febrisuryantoid)",
      "GitHub (github.com/febrisuryantoid)",
      "YouTube (@febrisuryantoid)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 40
  {
    id: 'scene_40',
    chapterId: 'chapter_06',
    headline: "Let's Build with WordPress 🚀",
    supportingSentence: "Teori telah usai, sekarang saatnya beraksi! Mari bersama-sama membangun masa depan web yang lebih terbuka dan kreatif.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  }
];
