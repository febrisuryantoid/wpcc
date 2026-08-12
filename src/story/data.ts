import { SceneConfig, ChapterConfig } from './types';

export const chapters: ChapterConfig[] = [
  { id: 'chapter_01', title: 'Fondasi WordPress', color: '#3B82F6', icon: 'Sun' },
  { id: 'chapter_02', title: 'Karier di WordPress', color: '#F59E0B', icon: 'Users' },
  { id: 'chapter_03', title: 'WordPress & Open Source', color: '#10B981', icon: 'Globe' },
  { id: 'chapter_04', title: 'Komunitas & Acara WordPress', color: '#8B5CF6', icon: 'Layout' },
  { id: 'chapter_05', title: 'WordPress Campus Connect', color: '#EC4899', icon: 'PenTool' },
  { id: 'chapter_06', title: 'Membangun, Terhubung & Berkembang', color: '#6366F1', icon: 'Star' },
];

export const storyScenes: SceneConfig[] = [
  // Slide 1
  {
    id: 'scene_01',
    chapterId: 'chapter_01',
    headline: "WordPress Campus Connect",
    supportingSentence: "Mengenal WordPress, membangun website, dan membuka peluang di ekosistem open source.",
    points: [
      "Learn",
      "Build",
      "Connect",
      "Grow"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 2
  {
    id: 'scene_02',
    chapterId: 'chapter_01',
    headline: "Tentang Pembicara",
    supportingSentence: "10+ tahun pengalaman membangun website, solusi digital, dan proyek WordPress.",
    points: [
      "10+ YEARS (Web Development Experience)",
      "WORDPRESS (WordPress Specialist)",
      "WEB DEVELOPMENT (Website & Digital Solutions)",
      "AI ENGINEERING (AI & Automation)",
      "COMMUNITY (Community & Knowledge Sharing)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 3
  {
    id: 'scene_03',
    chapterId: 'chapter_01',
    headline: "Dasar-Dasar WordPress",
    supportingSentence: "Mengenal WordPress dari dasar, mulai dari konsep CMS, fungsi, ekosistem, hingga perannya dalam membangun website modern.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 4
  {
    id: 'scene_04',
    chapterId: 'chapter_01',
    headline: "Mengapa Memilih WordPress?",
    supportingSentence: "WordPress berkembang dari blogging software menjadi platform web yang digunakan untuk berbagai kebutuhan digital.\n\nOne Platform. Many Possibilities.\nCore Advantage: Content + Design + Functionality + Extensibility (Tidak perlu membangun semuanya dari nol).",
    points: [
      "Publishing (Posts & Pages untuk pengelolaan konten)",
      "Design (Themes & Blocks untuk tampilan visual)",
      "Functionality (Plugins untuk fitur & ekstensi)",
      "E-Commerce (WooCommerce untuk toko online)",
      "SEO (Search Optimization agar mudah ditemukan)",
      "Integration (REST API untuk terhubung sistem lain)",
      "Customization (PHP, JS & APIs untuk kustomisasi penuh)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 5
  {
    id: 'scene_05',
    chapterId: 'chapter_01',
    headline: "Platform Digital Berbagai Skala",
    supportingSentence: "WordPress bukan hanya digunakan oleh blogger atau personal website. Ekosistem WordPress mencakup skala dari website personal hingga platform digital yang kompleks.",
    points: [
      "Creators (Blog · Portfolio · Personal Website)",
      "Businesses (Company Profile · Corporate Website · Brand Website)",
      "Publishers (News · Magazine · Editorial Platform)",
      "Commerce (Online Store · WooCommerce · Digital Products)",
      "Education (University · Course · Learning Platform)",
      "Organizations (Community · Nonprofit · Public Information)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 6
  {
    id: 'scene_06',
    chapterId: 'chapter_01',
    headline: "Lebih dari Sekadar CMS",
    supportingSentence: "WordPress adalah sebuah ecosystem.\nEcosystem Formula = Technology + People + Community + Business",
    points: [
      "CORE (WordPress Core)",
      "DESIGN (Themes · Blocks · Patterns · Site Editor)",
      "DEVELOPMENT (Plugins · APIs · PHP · JavaScript)",
      "COMMERCE (WooCommerce · Payment · Marketplace)",
      "INFRASTRUCTURE (Hosting · CDN · Security · Performance)",
      "PROFESSIONAL SERVICES (Developer · Designer · SEO · Consultant · Agency)",
      "COMMUNITY (Meetup · WordCamp · Contributor)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 7
  {
    id: 'scene_07',
    chapterId: 'chapter_01',
    headline: "Evolusi & Perkembangan WordPress",
    supportingSentence: "WordPress tidak berhenti sebagai blogging platform.\n\nEvolution Timeline: Blog → CMS → Web Platform → AI-Enabled Platform",
    points: [
      "2003 — Blogging Software (Fokus pada publishing artikel)",
      "2004–2005 — Publishing Platform (Plugin dan Theme mulai memperluas kemampuan)",
      "2010 — CMS Platform (Custom Post Types dan Multisite memperluas use case)",
      "2018 — Block Editor (Konten mulai dibangun menggunakan blocks)",
      "2022 — Full Site Editing (Pengguna dapat mengatur lebih banyak bagian website melalui Site Editor)",
      "2026 — AI-Enabled Web Platform (WordPress 7.0 memperkenalkan fondasi AI ke dalam pengalaman WordPress)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 8
  {
    id: 'scene_08',
    chapterId: 'chapter_01',
    headline: "Memilih Teknologi yang Tepat",
    supportingSentence: "Tidak semua website harus dibangun dengan teknologi yang sama.\n\nChoose technology based on the problem — not the trend.",
    points: [
      "WordPress — Flexible · Extensible · Open Source (Ideal untuk Business Website, Publishing, E-Commerce, Education, Community, Content Platform)",
      "Website Builder — Simple · Fast · Managed (Ideal untuk Landing Page, Personal Website, Website sederhana)",
      "Custom Development — Maximum Control · Maximum Complexity (Ideal untuk Sistem khusus, Business Logic kompleks, Platform spesifik)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 9
  {
    id: 'scene_09',
    chapterId: 'chapter_01',
    headline: "Pengembangan Web Sebelum WordPress",
    supportingSentence: "Membangun website pada era awal web sering membutuhkan proses teknis yang lebih manual.\n\nThe Transformation: From editing code to managing content.",
    points: [
      "Traditional Workflow (Write HTML → Edit Files → Upload via FTP → Configure Server → Publish)",
      "CMS Changed Workflow (Dashboard → Create Content → Publish → Website)",
      "Perubahan Aksesibilitas (Dari mengedit kode pemrograman menjadi mengelola konten secara visual)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 10
  {
    id: 'scene_10',
    chapterId: 'chapter_01',
    headline: "Sejarah & Perjalanan WordPress",
    supportingSentence: "2003 → 2026: Blogging Software → CMS → Web Platform → Block-Based Web → AI-Enabled WordPress",
    points: [
      "2003 — AWAL PROYEK (WordPress 0.70 — Matt Mullenweg dan Mike Little fork b2/cafelog. 27 May 2003)",
      "2004 — FASE AWAL (WordPress 1.0 — Browser installation, search-engine-friendly permalinks)",
      "2005 — CMS MULAI TERBENTUK (WordPress 1.5 — Theme system & static pages)",
      "2010 — TRANSFORMASI CMS (WordPress 3.0 — Custom Post Types, Custom Menus, Custom Taxonomies, Multisite)",
      "2018 — BLOCK EDITOR (WordPress 5.0 — Gutenberg / Block Editor)",
      "2022 — FULL SITE EDITING (WordPress 5.9 — Site Editor & block-based site)",
      "2023–2025 — MODERN WORDPRESS (Blocks, Patterns, Site Editor, Performance, Accessibility)",
      "2026 — WORDPRESS 7.0 (20 May 2026 — WordPress 7.0 'Armstrong' dirilis: AI Client, AI abilities, Modernized Dashboard)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 11
  {
    id: 'scene_11',
    chapterId: 'chapter_01',
    headline: "Mengapa WordPress Sangat Penting?",
    supportingSentence: "Bukan hanya karena jumlah website yang menggunakannya. Kekuatan WordPress berasal dari kombinasi fondasi utama:",
    points: [
      "OPEN SOURCE (Teknologi yang dapat dikembangkan secara terbuka)",
      "EXTENSIBLE (Fungsi dapat diperluas tanpa mengubah Core secara langsung)",
      "ECOSYSTEM (Themes, plugins, hosting, tools, services)",
      "COMMUNITY (Orang-orang dari berbagai latar belakang berkontribusi)",
      "GLOBAL (Digunakan dan dikembangkan oleh komunitas dari berbagai negara)",
      "LONG-TERM (Dikembangkan sejak 2003 dan terus berevolusi hingga 2026)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 12 - Real-World Case Studies
  {
    id: 'scene_12',
    chapterId: 'chapter_01',
    headline: "Studi Kasus Merek Global",
    supportingSentence: "WordPress bersifat gratis dan open-source, serta digunakan oleh lebih dari 43% dari seluruh website di dunia. Berbagai perusahaan kelas dunia juga menggunakan WordPress sebagai CMS (Content Management System) mereka.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 13
  {
    id: 'scene_13',
    chapterId: 'chapter_01',
    headline: "Siapa yang Mengembangkan WordPress?",
    supportingSentence: "The WordPress Community — WordPress dikembangkan melalui kontribusi dari berbagai kelompok.\n\nYou don't need to be a developer to contribute.",
    points: [
      "Core Developers (Mengembangkan WordPress Core)",
      "Designers (Merancang UI dan pengalaman pengguna)",
      "Developers (Membangun blocks, plugins, themes, dan tools)",
      "Translators & Testers (Menerjemahkan ke berbagai bahasa & menguji fitur)",
      "Documentation & Support (Membuat dokumentasi & membantu pengguna)",
      "Community Organizers (Membangun Meetup dan WordCamp)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 14 - Cost & Effort Comparison
  {
    id: 'scene_14',
    chapterId: 'chapter_01',
    headline: "Perbandingan Biaya & Efisiensi",
    supportingSentence: "Visualisasi matriks perbandingan biaya awal, waktu pengerjaan, dan kepemilikan data: WordPress vs Framework Custom vs Closed SaaS.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 15
  {
    id: 'scene_15',
    chapterId: 'chapter_01',
    headline: "Siapa Pemilik Utama WordPress?",
    supportingSentence: "Perbedaan penting: WordPress.org ≠ WordPress.com (Open-source WordPress ≠ Commercial Services).\n\nEcosystem = Open Source Project + Foundation + Companies + Contributors + Community",
    points: [
      "WordPress.org (Platform open-source mandiri tempat mengunduh core, tema, dan plugin secara gratis oleh komunitas global.)",
      "WordPress Foundation (Organisasi nonprofit pelindung merek dagang WordPress guna menjamin hak kebebasan akses bagi siapa saja.)",
      "Automattic (Perusahaan komersial pimpinan Matt Mullenweg yang menggerakkan inovasi produk serta memperluas ekosistem WordPress.)",
      "WordPress.com (Layanan managed hosting instan dari Automattic, platform andalan untuk praktik mudah tanpa pusing urusan server.)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 16
  {
    id: 'scene_16',
    chapterId: 'chapter_02',
    headline: "Peluang Karier di WordPress",
    supportingSentence: "Menjelajahi berbagai career path dalam ekosistem WordPress, dari development dan design hingga SEO, marketing, e-commerce, consulting, dan education.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 17
  {
    id: 'scene_17',
    chapterId: 'chapter_02',
    headline: "Tahapan Karier WordPress Anda",
    supportingSentence: "Tidak perlu langsung menjadi expert. Jalani tahap demi tahap:\n\nFormula: Learn → Build → Show → Connect → Grow",
    points: [
      "01 — LEARN (HTML · CSS · JavaScript · WordPress)",
      "02 — BUILD (Buat website dan project nyata)",
      "03 — PRACTICE (Eksperimen dengan themes, plugins, blocks, dan APIs)",
      "04 — SHOW (Bangun portfolio dan case study)",
      "05 — CONNECT (Bergabung dengan komunitas)",
      "06 — CONTRIBUTE (Berbagi pengetahuan dan kontribusi)",
      "07 — GROW (Internship · Freelance · Job · Agency · Product)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 18
  {
    id: 'scene_18',
    chapterId: 'chapter_03',
    headline: "WordPress & Open Source",
    supportingSentence: "Memahami siapa yang mengembangkan WordPress, bagaimana open-source project dikelola, dan bagaimana perusahaan, contributor, serta komunitas membentuk ekosistemnya.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 19
  {
    id: 'scene_19',
    chapterId: 'chapter_03',
    headline: "Apa Itu WordCamp?",
    supportingSentence: "WordCamp adalah konferensi WordPress yang diselenggarakan oleh komunitas secara volunteer-driven.\n\nThe Goal: Datang untuk belajar, berbagi, dan terhubung.",
    points: [
      "Topik Pembahasan (Development, Design, SEO, Marketing, Content, Business, Accessibility, Open Source)",
      "Karakter Komunitas (Community-driven, Inclusive, Knowledge-sharing, Networking, Contribution)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 20
  {
    id: 'scene_20',
    chapterId: 'chapter_03',
    headline: "Komunitas Global WordPress",
    supportingSentence: "WordPress Community hadir di berbagai negara melalui Meetups, WordCamps, Contributor Events, dan Online Community.\n\nFrom Local to Global: Campus → City → Country → Global Community",
    points: [
      "Meetups & WordCamps (Pertemuan komunitas lokal hingga konferensi regional dan global)",
      "Contributor Events & Online Community (Kegiatan kontribusi langsung serta forum, Slack, documentation, dan GitHub)",
      "Your Location Matters (Komunitas global dimulai dari orang-orang yang mau berkumpul di tempat mereka sendiri)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 21
  {
    id: 'scene_21',
    chapterId: 'chapter_03',
    headline: "Mengenal WordPress Campus Connect",
    supportingSentence: "Bring WordPress to Your Campus — Program yang dirancang untuk memperkenalkan WordPress kepada lingkungan kampus.\n\nThe Model: Students + Faculty + WordPress Community = Campus Innovation",
    points: [
      "Learning & Practice (Hands-on practice dan pembelajaran teknologi web)",
      "Career Exposure (Mengenal peluang karier dalam ekosistem WordPress)",
      "Community & Open Source (Menghubungkan mahasiswa dengan komunitas open source)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 22
  {
    id: 'scene_22',
    chapterId: 'chapter_03',
    headline: "Manfaat Bagi Mahasiswa",
    supportingSentence: "Lebih dari sekadar sertifikat:\n\nThe Real Value = Experience + Knowledge + Network + Opportunity",
    points: [
      "01 — Hands-on Experience (Belajar WordPress melalui praktik langsung)",
      "02 — Career Exposure (Mengenal peluang karier dalam ekosistem WordPress)",
      "03 — Certificate (Mendapatkan Certificate of Participation)",
      "04 — Community Connection (Berkenalan dengan komunitas WordPress)",
      "05 — Free Hosting & Domain (Hosting & domain .blog/.art gratis 1 tahun dari WordPress.com)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 23
  {
    id: 'scene_23',
    chapterId: 'chapter_03',
    headline: "Partisipasi & Peran Kampus",
    supportingSentence: "Campus Connect membutuhkan dukungan kampus agar kegiatan dapat berjalan dengan baik.",
    points: [
      "01 — Students (Menyediakan peserta yang tertarik belajar teknologi web)",
      "02 — Venue (Menyediakan ruang yang sesuai untuk kegiatan)",
      "03 — Infrastructure (Laptop/lab komputer, internet, projector, dan fasilitas pendukung)",
      "04 — Coordination (Koordinasi dengan fakultas, program studi, dan pihak terkait)",
      "05 — Academic Support (Mendorong mahasiswa mengikuti kegiatan sebagai bagian dari pengembangan kompetensi)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 24
  {
    id: 'scene_24',
    chapterId: 'chapter_03',
    headline: "Perjalanan Anda Dimulai Di Sini",
    supportingSentence: "WordPress Campus Connect bukan sekadar workshop. Ini adalah kesempatan untuk mengenal teknologi, karier, open source, komunitas, dan peluang.",
    points: [
      "TECHNOLOGY (Bagaimana website dibangun)",
      "CAREER (Bagaimana skill dapat menjadi profesi)",
      "OPEN SOURCE (Bagaimana teknologi dikembangkan bersama)",
      "COMMUNITY (Bagaimana membangun network)",
      "OPPORTUNITY (Bagaimana membuka pintu menuju dunia profesional)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 25
  {
    id: 'scene_25',
    chapterId: 'chapter_04',
    headline: "Komunitas & Acara WordPress",
    supportingSentence: "Mengenal WordPress Community melalui Meetup, WordCamp, knowledge sharing, networking, dan berbagai bentuk kontribusi dalam ekosistem global.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 26
  {
    id: 'scene_26',
    chapterId: 'chapter_04',
    headline: "Arsitektur WordPress",
    supportingSentence: "Memahami bagaimana komponen utama WordPress bekerja bersama membentuk sebuah website.",
    points: [
      "WordPress Core (Menjalankan sistem utama, autentikasi, manajemen konten, dan berbagai fungsi dasar WordPress)",
      "Database (Menyimpan konten, konfigurasi, pengguna, pengaturan, dan data website)",
      "Themes (Mengatur tampilan, layout, typography, warna, dan pengalaman visual website)",
      "Plugins (Menambahkan atau memperluas fungsi sesuai kebutuhan website)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 27
  {
    id: 'scene_27',
    chapterId: 'chapter_04',
    headline: "Dashboard WordPress",
    supportingSentence: "Pusat kendali untuk mengelola seluruh aktivitas website.",
    points: [
      "Posts (Membuat dan mengelola artikel atau konten dinamis)",
      "Pages (Membuat halaman statis seperti Beranda, Tentang, dan Layanan)",
      "Media (Mengelola gambar, video, dokumen, dan file lainnya)",
      "Appearance / Editor (Mengatur tampilan dan struktur website)",
      "Plugins (Menambahkan kemampuan baru ke WordPress)",
      "Settings (Mengatur konfigurasi utama website)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 28
  {
    id: 'scene_28',
    chapterId: 'chapter_04',
    headline: "Posts vs Pages",
    supportingSentence: "Memahami dua jenis konten utama dalam WordPress.",
    points: [
      "Posts — Konten Dinamis (Berbasis tanggal publikasi, kategori & tag, cocok untuk artikel/berita, tampil kronologis)",
      "Pages — Konten Statis (Tidak bergantung tanggal, hierarki Parent-Child, cocok untuk Beranda, Tentang, Layanan, Kontak)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 29
  {
    id: 'scene_29',
    chapterId: 'chapter_04',
    headline: "Themes & Plugins",
    supportingSentence: "Dua komponen utama untuk membentuk tampilan dan memperluas fungsi WordPress.",
    points: [
      "Themes (Mengatur bagaimana website terlihat: Layout, Typography, Warna, Header, Footer, Template, Visual Style — Theme = Appearance)",
      "Plugins (Mengatur apa yang dapat dilakukan website: SEO, Security, Forms, E-Commerce, Membership, Performance, Integrasi API — Plugin = Functionality)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 30
  {
    id: 'scene_30',
    chapterId: 'chapter_04',
    headline: "Gutenberg Block Editor",
    supportingSentence: "Membangun konten secara visual menggunakan sistem blok. Setiap elemen konten dapat dibuat sebagai blok yang dapat disusun, dipindahkan, dan dikustomisasi.",
    points: [
      "Paragraph (Teks dan informasi)",
      "Heading (Struktur judul dan hierarki konten)",
      "Image (Menampilkan gambar dan media visual)",
      "Columns (Membuat layout multi-kolom)",
      "Button (Membuat call-to-action)",
      "Group / Cover (Menggabungkan beberapa elemen menjadi satu komposisi)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 31
  {
    id: 'scene_31',
    chapterId: 'chapter_04',
    headline: "Blocks & Patterns",
    supportingSentence: "Susun elemen secara modular dan gunakan kembali desain yang sudah dibuat.",
    points: [
      "Blocks (Elemen dasar untuk membangun konten seperti Paragraph · Heading · Image · Button · Columns · Video)",
      "Block Patterns (Kumpulan blok yang sudah disusun menjadi layout siap pakai. Contoh: Hero · Features · Testimonials · Call to Action)",
      "Custom Patterns (Buat pola desain sendiri sesuai kebutuhan website)",
      "Synced Patterns (Gunakan desain yang sama di beberapa bagian website dan kelola secara terpusat)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 32
  {
    id: 'scene_32',
    chapterId: 'chapter_04',
    headline: "Site Editor",
    supportingSentence: "Mendesain dan mengelola struktur website secara visual dari satu tempat.",
    points: [
      "Header & Footer (Mengatur bagian atas dan bawah website)",
      "Navigation (Membuat dan mengelola menu navigasi secara visual)",
      "Templates (Membuat struktur halaman untuk berbagai jenis konten)",
      "Template Parts (Mengelola bagian website yang digunakan kembali seperti Header dan Footer)",
      "Styles (Mengatur sistem visual website secara global)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 33
  {
    id: 'scene_33',
    chapterId: 'chapter_04',
    headline: "Global Styles",
    supportingSentence: "Satu sistem untuk menjaga konsistensi visual seluruh website.",
    points: [
      "Colors (Menentukan warna utama, sekunder, background, dan elemen interface)",
      "Typography (Mengatur font, ukuran, weight, dan line-height)",
      "Layout (Mengatur lebar konten dan struktur layout)",
      "Spacing (Menjaga jarak antar elemen tetap konsisten)",
      "Block Styles (Mengatur tampilan elemen seperti Button, Heading, Image, dan lainnya)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 34
  {
    id: 'scene_34',
    chapterId: 'chapter_04',
    headline: "Workflow WordPress.com Student Plan",
    supportingSentence: "Secara umum, proses membangun website dengan WordPress.com Student Plan mengikuti alur praktis dan cepat berikut.",
    points: [
      "01 — Registrasi Akun (Daftar atau masuk ke WordPress.com menggunakan email kampus Anda)",
      "02 — Klaim Student Plan (Aktifkan lisensi Student Plan gratis dari benefit akademis kampus)",
      "03 — Pilih Domain (Tentukan nama sub-domain unik kustom gratis yang Anda inginkan)",
      "04 — Pilih Block Theme (Aktifkan tema modern berbasis blok yang mendukung Full Site Editing)",
      "05 — Desain & Konten (Mulai susun halaman utama dan tulis artikel menggunakan Block Editor)",
      "06 — Publish Website (Luncurkan website Anda secara resmi ke internet agar bisa diakses publik)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 35
  {
    id: 'scene_35',
    chapterId: 'chapter_05',
    headline: "WordPress Campus Connect",
    supportingSentence: "Memahami bagaimana WordPress Campus Connect membawa hands-on learning, career exposure, community connection, dan digital skills ke lingkungan kampus.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 36
  {
    id: 'scene_36',
    chapterId: 'chapter_05',
    headline: "Yang Akan Dipraktikkan",
    supportingSentence: "Kita akan membangun website WordPress sederhana dari awal hingga dapat ditampilkan.",
    points: [
      "01 — Klaim Domain & Hosting (Aktivasi paket Student Plan gratis & domain .blog/.art dari WordPress.com)",
      "02 — Login Administrator (Mengakses dashboard WordPress melalui /wp-admin)",
      "03 — Pilih Block Theme (Menggunakan tema yang mendukung pengalaman berbasis blok)",
      "04 — Buat Beranda (Membangun homepage menggunakan Gutenberg Block Editor)",
      "05 — Atur Navigasi (Membuat struktur menu utama website)",
      "06 — Edit Site (Menggunakan Site Editor untuk mengatur tampilan website)",
      "07 — Preview & Publish (Memeriksa hasil akhir sebelum website dipublikasikan)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 37
  {
    id: 'scene_37',
    chapterId: 'chapter_05',
    headline: "Persiapan Praktik",
    supportingSentence: "Pastikan seluruh perangkat dan kebutuhan teknis sudah siap sebelum memulai hands-on workshop.",
    points: [
      "Perangkat (Laptop / komputer, Browser modern, Koneksi internet, Akun WordPress.com)",
      "Persiapan (Aktivasi paket Student Plan gratis, Siapkan ide situs portofolio/bisnis, Ikuti langkah pembuatan secara bertahap)",
      "Saat Praktik (Ikuti → Praktikkan → Eksperimen → Tanyakan. Tidak harus sempurna. Yang penting mulai membangun.)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 38
  {
    id: 'scene_38',
    chapterId: 'chapter_06',
    headline: "Membangun, Terhubung & Berkembang",
    supportingSentence: "Mengubah pembelajaran menjadi pengalaman nyata melalui workshop, community connection, resources, dan langkah berikutnya untuk terus berkembang bersama WordPress.",
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 39
  {
    id: 'scene_39',
    chapterId: 'chapter_06',
    headline: "Sumber Belajar & Dokumentasi",
    supportingSentence: "Gunakan sumber resmi dan komunitas untuk terus mengembangkan kemampuan WordPress.",
    points: [
      "Learn WordPress (Materi pembelajaran resmi untuk mempelajari WordPress melalui kursus, tutorial, dan workshop)",
      "WordPress Documentation (Dokumentasi dan referensi resmi untuk memahami fitur dan penggunaan WordPress)",
      "Developer Resources (Referensi teknis untuk mempelajari pengembangan WordPress lebih lanjut)",
      "WordPress Community (Bergabung dengan komunitas untuk berdiskusi, berbagi pengalaman, dan berkolaborasi)",
      "Local Meetup (Temukan komunitas WordPress di sekitar Anda dan ikuti kegiatan berikutnya)",
      "Tutorial & Practice (Terus belajar melalui praktik langsung, dokumentasi, dan proyek nyata)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 40
  {
    id: 'scene_40',
    chapterId: 'chapter_06',
    headline: "Sesi Tanya Jawab (Q&A)",
    supportingSentence: "Punya pertanyaan? Mari diskusikan bersama.",
    points: [
      "Kendala Teknis (Instalasi, konfigurasi, theme, plugin, atau error WordPress)",
      "Pengembangan Lanjut (Gutenberg, Block Theme, Site Editor, PHP, dan pengembangan WordPress)",
      "Karier & Peluang (Freelance, pekerjaan, portfolio, bisnis digital, dan peluang industri)",
      "Open Source & Kontribusi (Bagaimana mulai berkontribusi pada WordPress dan komunitas open source)",
      "Komunitas (Cara menemukan komunitas, mengikuti Meetup, WordCamp, dan kegiatan lainnya)",
      "Saran & Masukan (Bagikan pengalaman dan ide untuk pengembangan kegiatan berikutnya)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 41
  {
    id: 'scene_41',
    chapterId: 'chapter_06',
    headline: "Tetap Terhubung dengan Komunitas",
    supportingSentence: "Belajar tidak berhenti ketika workshop selesai. Tetap terhubung, berbagi, dan berkembang bersama.",
    points: [
      "WordPress Community (Terus terhubung dengan komunitas WordPress global dan lokal)",
      "Learn WordPress (Lanjutkan pembelajaran melalui sumber resmi WordPress)",
      "Local Meetup (Temukan kegiatan komunitas dan kesempatan untuk bertemu praktisi lainnya)",
      "Febri Suryanto (WordPress Specialist & AI Solutions Engineer — febrisuryanto.com — @febrisuryantoid)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  },
  // Slide 42
  {
    id: 'scene_42',
    chapterId: 'chapter_06',
    headline: "Mari Membangun Bersama WordPress",
    supportingSentence: "Teori telah usai. Sekarang saatnya membangun.\n\nWordPress bukan hanya sebuah software. WordPress adalah open-source ecosystem untuk belajar, berkarya, berbagi, dan membangun sesuatu yang nyata.",
    points: [
      "Build something (Mulai karya pertama Anda hari ini)",
      "Share it (Bagikan ke komunitas & dunia digital)",
      "Improve it (Terus kembangkan dan tingkatkan kualitasnya)",
      "Contribute (Kontribusi kembali untuk kemajuan ekosistem open source)"
    ],
    backgroundExperience: { colorWorld: '#0F172A' },
    heroExperience: { heroPosition: 'center' }
  }
];
