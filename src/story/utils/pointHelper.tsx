import React from 'react';
import { 
  Target, Search, Megaphone, ShieldCheck, Globe, Code2, Cpu, Database, 
  Laptop, Smartphone, Tv, Server, AppWindow, FileCode, MonitorPlay,
  Linkedin, Instagram, Youtube, Github, Chrome, Compass, Flame, Shield,
  Heading, Type, AlignLeft, Image, Sparkles, MousePointerClick, Palette,
  LayoutGrid, Wand2, Zap, Sliders, CheckSquare, Layers, MessageSquare,
  Brain, Key, Fingerprint, BadgeCheck, Cloud, Lock, Tag, Gift, GitBranch,
  Blocks, LayoutTemplate, FileText, Newspaper, Calendar, Ticket, Users,
  MessageCircle, GraduationCap, Building2, HeartPulse, MapPin, Award,
  BookOpen, FolderGit2, Briefcase, BrainCircuit, Rocket, Layout,
  Crown, FileSearch, Touchpad, TextQuote, FormInput, ShieldAlert,
  Rss, Landmark, Activity, UserCheck, Plug, Unlock, TrendingUp
} from 'lucide-react';

export const WPIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M259,271.3,226.2,367h-.1l-25.4,73.1c1.8.5,3.5.9,5.3,1.4h.3a192.51,192.51,0,0,0,49.5,6.5,157,157,0,0,0,24.9-1.8,184.3,184.3,0,0,0,32.5-7.1h0c2.6-.8,5.2-1.7,7.8-2.6-2.8-6-8.8-19.3-9.1-19.9Z" />
    <path d="M80.8,180.5C70.8,203.1,64,230.9,64,256c0,6.3.3,12.6.9,18.8,6.9,71.2,52.9,131,116.1,157.9,2.6,1.1,5.3,2.2,8,3.2L96,180.6C88,180.3,86.5,180.8,80.8,180.5Z" />
    <path d="M430.2,175.4a188,188,0,0,0-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193,193,0,0,0,325.1,77a189.2,189.2,0,0,0-69.2-13,191.51,191.51,0,0,0-149.4,71.7A196,196,0,0,0,89,161.3c14.2.1,31.8.1,33.8.1,18.1,0,46-2.2,46-2.2,9.4-.6,10.4,13.1,1.1,14.2,0,0-9.4,1.1-19.8,1.6L213,362l37.8-113.3L224,175.1c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8,1-14.2,0,0,28.5,2.2,45.5,2.2,18.1,0,46-2.2,46-2.2,9.3-.6,10.5,13.1,1.1,14.2,0,0-9.3,1.1-19.7,1.6l62.3,185.6,17.3-57.6c8.7-22.4,13.1-40.9,13.1-55.7,0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4,0-15.9,12-30.7,29-30.7h2.2c26.2-.7,34.8,25.3,35.9,43v.6c.4,7.2.1,12.5.1,18.8,0,17.4-3.3,37.1-13.1,61.8l-39,112.8-22.3,65.7c1.8-.8,3.5-1.6,5.3-2.5,56.7-27.4,98-82,106.7-146.7a172.07,172.07,0,0,0,1.9-26A191.11,191.11,0,0,0,430.2,175.4Z" />
    <path d="M256,48a208.06,208.06,0,0,1,81,399.66A208.06,208.06,0,0,1,175,64.34,206.7,206.7,0,0,1,256,48m0-16C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32Z" />
  </svg>
);

export const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.33a6.33 6.33 0 0 0-1-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 0 0 0 6.33-6.33V8.69a8.27 8.27 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.05-.1z" />
  </svg>
);

export const ChromeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="https://www.svgrepo.com/show/354863/chrome.svg" 
    alt="Google Chrome" 
    className={`${className || 'w-8 h-8'} object-contain`} 
  />
);

export const EdgeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="https://www.svgrepo.com/show/378791/edge.svg" 
    alt="Microsoft Edge" 
    className={`${className || 'w-8 h-8'} object-contain`} 
  />
);

export const FirefoxIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="https://www.svgrepo.com/show/452204/firefox.svg" 
    alt="Mozilla Firefox" 
    className={`${className || 'w-8 h-8'} object-contain`} 
  />
);

export const SafariIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="https://www.svgrepo.com/show/452096/safari.svg" 
    alt="Apple Safari" 
    className={`${className || 'w-8 h-8'} object-contain`} 
  />
);

export const HTMLIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="https://www.svgrepo.com/show/452228/html-5.svg" 
    alt="HTML5" 
    className={`${className || 'w-8 h-8'} object-contain`} 
  />
);

export const CSSIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="https://www.svgrepo.com/show/373535/css.svg" 
    alt="CSS3" 
    className={`${className || 'w-8 h-8'} object-contain`} 
  />
);

export const JSIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="https://www.svgrepo.com/show/452045/js.svg" 
    alt="JavaScript" 
    className={`${className || 'w-8 h-8'} object-contain`} 
  />
);

export interface PointData {
  title: string;
  description: string;
  icon: any;
}

export const getPointDetails = (pointText: string, sceneHeadline?: string): PointData => {
  const text = pointText.trim();
  const lower = text.toLowerCase();

  // If pointText contains ' — ' or ' – ' or ' - ', parse Title and Description
  if (text.includes(' — ') || text.includes(' – ') || text.includes(' - ')) {
    const parts = text.split(/\s+[—–-]\s+/);
    if (parts.length >= 2) {
      const rawTitle = parts[0].trim();
      const rawDesc = parts.slice(1).join(' — ').trim();
      
      let icon = CheckSquare;
      const lowerT = rawTitle.toLowerCase();
      if (lowerT.includes('siap pakai') || lowerT.includes('🚀')) icon = Rocket;
      else if (lowerT.includes('hosting') || lowerT.includes('☁️')) icon = Cloud;
      else if (lowerT.includes('perawatan') || lowerT.includes('🔒') || lowerT.includes('keamanan')) icon = ShieldCheck;
      else if (lowerT.includes('cepat online') || lowerT.includes('⚡')) icon = Zap;
      else if (lowerT.includes('kustomisasi') || lowerT.includes('🎨')) icon = Palette;
      else if (lowerT.includes('plugin') || lowerT.includes('🔌')) icon = Plug;
      else if (lowerT.includes('kontrol') || lowerT.includes('🔓') || lowerT.includes('akses')) icon = Unlock;
      else if (lowerT.includes('skalabilitas') || lowerT.includes('📈')) icon = TrendingUp;

      return {
        title: rawTitle,
        description: rawDesc,
        icon
      };
    }
  }

  // Scene 7 (Mengapa Website Penting?)
  if (text === 'Branding') {
    return {
      title: 'Branding',
      description: 'Membangun citra dan identitas yang profesional di dunia digital.',
      icon: Target
    };
  }
  if (text === 'Informasi') {
    return {
      title: 'Informasi',
      description: 'Menyediakan informasi lengkap dan akurat kapan saja.',
      icon: FileSearch
    };
  }
  if (text === 'Promosi') {
    return {
      title: 'Promosi',
      description: 'Menjangkau lebih banyak orang dan meningkatkan visibilitas.',
      icon: Megaphone
    };
  }
  if (text === 'Kredibilitas') {
    return {
      title: 'Kredibilitas',
      description: 'Meningkatkan kepercayaan pelanggan dengan kehadiran online.',
      icon: ShieldCheck
    };
  }

  // Scene 2 (Speaker profile)
  if (lower.includes('technology consultant')) {
    return {
      title: 'Tech Consultant',
      description: 'Konsultasi strategi teknologi & arsitektur sistem digital.',
      icon: Briefcase
    };
  }
  if (lower.includes('wordpress specialist')) {
    return {
      title: 'WordPress Specialist',
      description: 'Pengalaman mendalam membangun ekosistem WordPress.',
      icon: WPIcon
    };
  }
  if (lower.includes('ai engineer')) {
    return {
      title: 'AI (Artificial Intelligence) Engineer',
      description: 'Pengembangan kecerdasan buatan & otomatisasi modern.',
      icon: BrainCircuit
    };
  }
  if (lower.includes('ziezan') || lower.includes('founder')) {
    return {
      title: 'Agency Founder',
      description: 'Pendiri Ziezan Solutions untuk layanan teknologi terpadu.',
      icon: Rocket
    };
  }

  // Scene 11 (Browser)
  if (lower === 'chrome' || lower.includes('google chrome')) {
    return {
      title: 'Google Chrome',
      description: 'Browser paling populer dunia dengan ekosistem luas.',
      icon: ChromeIcon
    };
  }
  if (lower === 'edge' || lower.includes('microsoft edge')) {
    return {
      title: 'Microsoft Edge',
      description: 'Browser cepat berbasis Chromium bawaan Windows.',
      icon: EdgeIcon
    };
  }
  if (lower === 'firefox' || lower.includes('mozilla firefox')) {
    return {
      title: 'Mozilla Firefox',
      description: 'Browser independen yang fokus pada privasi & keamanan.',
      icon: FirefoxIcon
    };
  }
  if (lower === 'safari' || lower.includes('apple safari')) {
    return {
      title: 'Apple Safari',
      description: 'Browser resmi Apple teroptimasi untuk macOS & iOS.',
      icon: SafariIcon
    };
  }

  // Scene 15 (HTML)
  if (lower === 'heading') {
    return {
      title: 'Heading (H1-H6)',
      description: 'Menentukan hierarki judul dan struktur dokumen web.',
      icon: Heading
    };
  }
  if (lower === 'paragraph') {
    return {
      title: 'Paragraph (<p>)',
      description: 'Menyusun teks penjelasan dan paragraf konten.',
      icon: TextQuote
    };
  }
  if (lower === 'image') {
    return {
      title: 'Image (<img>)',
      description: 'Menampilkan berkas gambar dan ilustrasi visual.',
      icon: Image
    };
  }
  if (lower === 'button') {
    return {
      title: 'Button (<button>)',
      description: 'Elemen interaktif pemicu aksi dan aksi klik.',
      icon: Touchpad
    };
  }

  // Scene 16 (CSS)
  if (lower === 'warna') {
    return {
      title: 'Warna & Tema',
      description: 'Mengatur skema warna, latar belakang, dan gradasi.',
      icon: Palette
    };
  }
  if (lower === 'layout') {
    return {
      title: 'Tata Letak (Layout)',
      description: 'Menata tata letak responsif dengan Grid & Flexbox.',
      icon: LayoutGrid
    };
  }
  if (lower === 'typography') {
    return {
      title: 'Tipografi',
      description: 'Mengatur jenis font, ukuran, spasi, dan keterbacaan.',
      icon: Type
    };
  }
  if (lower === 'visual effect') {
    return {
      title: 'Efek Visual',
      description: 'Menambahkan bayangan, animasi, dan estetika.',
      icon: Sparkles
    };
  }

  // Scene 17 (JavaScript)
  if (lower === 'animasi') {
    return {
      title: 'Animasi Halus',
      description: 'Menciptakan pergerakan elemen yang hidup dan dinamis.',
      icon: Zap
    };
  }
  if (lower === 'slider') {
    return {
      title: 'Slider & Carousel',
      description: 'Menampilkan galeri foto atau banner berganti otomatis.',
      icon: Sliders
    };
  }
  if (lower === 'form') {
    return {
      title: 'Form Interaktif',
      description: 'Memproses validasi dan pengiriman input pengguna.',
      icon: FormInput
    };
  }
  if (lower === 'popup') {
    return {
      title: 'Popup & Modal',
      description: 'Menampilkan dialog interaktif dan notifikasi.',
      icon: Layers
    };
  }

  // Scene 22 (Domain)
  if (lower.includes('mudah diingat')) {
    return {
      title: 'Mudah Diingat',
      description: 'Alamat simpel yang gampang diketik dan diingat pengunjung.',
      icon: Brain
    };
  }
  if (lower.includes('unik')) {
    return {
      title: 'Unik & Eksklusif',
      description: 'Satu-satunya alamat resmi milik Anda di seluruh dunia.',
      icon: Fingerprint
    };
  }
  if (lower.includes('identitas website')) {
    return {
      title: 'Identitas Resmi',
      description: 'Mewakili nama brand, perusahaan, atau organisasi.',
      icon: BadgeCheck
    };
  }

  // Scene 33 (WordPress.com)
  if (lower.includes('hosting disediakan')) {
    return {
      title: 'Hosting Siap Pakai',
      description: 'Server dan keamanan dikelola langsung oleh WordPress.com.',
      icon: Cloud
    };
  }
  if (lower.includes('praktis')) {
    return {
      title: 'Praktis & Cepat',
      description: 'Dapat langsung digunakan tanpa instalasi teknis rumit.',
      icon: Rocket
    };
  }
  if (lower.includes('fleksibel terbatas')) {
    return {
      title: 'Fitur Terbatas',
      description: 'Kustomisasi tema & plugin dibatasi paket berlangganan.',
      icon: ShieldAlert
    };
  }

  // Scene 34 (WordPress.org)
  if (lower === 'gratis') {
    return {
      title: '100% Gratis',
      description: 'Perangkat lunak bebas tanpa biaya lisensi software.',
      icon: Tag
    };
  }
  if (lower.includes('open source')) {
    return {
      title: 'Open Source',
      description: 'Kode sumber terbuka yang dikembangkan komunitas global.',
      icon: GitBranch
    };
  }
  if (lower.includes('kendali penuh')) {
    return {
      title: 'Kendali Penuh',
      description: 'Akses bebas ke seluruh server, file, dan database.',
      icon: Cpu
    };
  }
  if (lower.includes('plugin') && lower.includes('theme')) {
    return {
      title: 'Ekosistem Melimpah',
      description: 'Akses ke puluhan ribu plugin dan tema kustom.',
      icon: Blocks
    };
  }

  // Scene 36 (Page & Post)
  if (lower.includes('page')) {
    return {
      title: 'WordPress Page',
      description: 'Halaman statis yang jarang berubah seperti Home, About, Contact.',
      icon: FileText
    };
  }
  if (lower.includes('post')) {
    return {
      title: 'WordPress Post',
      description: 'Konten dinamis berkategori seperti artikel blog dan berita.',
      icon: Newspaper
    };
  }

  // Scene 49 (Website Lainnya)
  if (lower === 'booking') {
    return {
      title: 'Booking System',
      description: 'Sistem reservasi jadwal, hotel, dan layanan online.',
      icon: Calendar
    };
  }
  if (lower === 'event') {
    return {
      title: 'Website Event',
      description: 'Halaman promosi acara & registrasi peserta.',
      icon: Ticket
    };
  }
  if (lower === 'membership') {
    return {
      title: 'Membership',
      description: 'Area khusus untuk anggota terdaftar berlangganan.',
      icon: Users
    };
  }
  if (lower === 'komunitas') {
    return {
      title: 'Komunitas',
      description: 'Wadah forum diskusi dan jejaring antar anggota.',
      icon: MessageCircle
    };
  }
  if (lower === 'sekolah') {
    return {
      title: 'Website Sekolah',
      description: 'Portal informasi akademik, siswa, dan guru.',
      icon: GraduationCap
    };
  }
  if (lower === 'masjid') {
    return {
      title: 'Website Masjid',
      description: 'Jadwal sholat, laporan keuangan & kegiatan umat.',
      icon: Landmark
    };
  }
  if (lower.includes('rumah sakit')) {
    return {
      title: 'Rumah Sakit',
      description: 'Jadwal dokter, informasi layanan & janji temu.',
      icon: HeartPulse
    };
  }
  if (lower === 'travel') {
    return {
      title: 'Travel & Wisata',
      description: 'Katalog paket wisata & pemesanan tur digital.',
      icon: MapPin
    };
  }

  // Scene 52 (Skill yang Akan Anda Miliki)
  if (lower.includes('web design')) {
    return {
      title: 'Web Design',
      description: 'Merancang estetika visual dan layout yang memikat.',
      icon: Palette
    };
  }
  if (lower.includes('development')) {
    return {
      title: 'Web Development',
      description: 'Membangun logika teknis & fungsionalitas website.',
      icon: Code2
    };
  }
  if (lower.includes('ui/ux')) {
    return {
      title: 'UI / UX (User Interface / User Experience)',
      description: 'Memastikan kenyamanan pengguna saat bernavigasi dan keindahan visual.',
      icon: Layout
    };
  }
  if (lower.includes('seo')) {
    return {
      title: 'SEO (Search Engine Optimization)',
      description: 'Meningkatkan peringkat website di hasil pencarian Google agar mudah ditemukan.',
      icon: Search
    };
  }
  if (lower === 'ai' || lower.includes('ai')) {
    return {
      title: 'AI (Artificial Intelligence / Kecerdasan Buatan)',
      description: 'Memanfaatkan AI untuk meningkatkan produktivitas dan efisiensi pembuatan website.',
      icon: BrainCircuit
    };
  }

  // Scene 57 (Roadmap)
  if (lower.includes('html, css')) {
    return {
      title: '1. Fondasi Web',
      description: 'Kuasai HTML, CSS, dan dasar-dasar JavaScript.',
      icon: FileCode
    };
  }
  if (lower.includes('wordpress dasar')) {
    return {
      title: '2. WordPress Basic',
      description: 'Pelajari pengelolaan dashboard, konten, dan media.',
      icon: WPIcon
    };
  }
  if (lower.includes('theme & plugin')) {
    return {
      title: '3. Theme & Plugin',
      description: 'Instalasi dan konfigurasi tampilan & fitur tambahan.',
      icon: Blocks
    };
  }
  if (lower.includes('elementor')) {
    return {
      title: '4. Page Builder',
      description: 'Desain visual cepat menggunakan Elementor drag & drop.',
      icon: Touchpad
    };
  }
  if (lower.includes('portfolio') && !lower.includes('com')) {
    return {
      title: '5. Buat Portofolio',
      description: 'Bangun hasil karya nyata untuk ditunjukkan ke klien.',
      icon: Award
    };
  }

  // Scene 59 (Ringkasan)
  if (lower === 'website') {
    return {
      title: 'Website',
      description: 'Halaman digital sebagai pusat identitas online.',
      icon: Globe
    };
  }
  if (lower === 'html') {
    return {
      title: 'HTML (HyperText Markup Language)',
      description: 'Bahasa standar penyusun kerangka fondasi struktur halaman web.',
      icon: HTMLIcon
    };
  }
  if (lower === 'css') {
    return {
      title: 'CSS (Cascading Style Sheets)',
      description: 'Pengatur gaya, warna, tata letak, dan estetika visual.',
      icon: CSSIcon
    };
  }
  if (lower === 'javascript' || lower === 'js') {
    return {
      title: 'JavaScript',
      description: 'Bahasa pemrograman pemberi logika interaktif, form, & animasi.',
      icon: JSIcon
    };
  }
  if (lower === 'domain') {
    return {
      title: 'Domain',
      description: 'Alamat unik pengakses website (contoh: google.com).',
      icon: Key
    };
  }
  if (lower === 'hosting') {
    return {
      title: 'Hosting',
      description: 'Server aktif penyimpan seluruh file dan database website.',
      icon: Server
    };
  }
  if (lower === 'wordpress') {
    return {
      title: 'WordPress',
      description: 'Platform CMS (Content Management System) terpopuler di dunia.',
      icon: WPIcon
    };
  }

  // Scene 61 (Belajar Lebih Lanjut)
  if (lower.includes('wordpress.org')) {
    return {
      title: 'WordPress.org',
      description: 'Pusat unduhan software gratis dan dokumentasi.',
      icon: WPIcon
    };
  }
  if (lower.includes('community')) {
    return {
      title: 'Komunitas WordPress (WP)',
      description: 'Bergabung dengan Meetup dan grup pengembang lokal.',
      icon: Users
    };
  }
  if (lower.includes('dokumentasi')) {
    return {
      title: 'Dokumentasi Resmi',
      description: 'Membaca panduan teknis dan tutorial terlengkap.',
      icon: BookOpen
    };
  }
  if (lower.includes('youtube')) {
    return {
      title: 'Video YouTube',
      description: 'Tonton tutorial langkah-demi-langkah visual.',
      icon: Youtube
    };
  }

  // Socials (Scene 63)
  if (lower.includes('linkedin')) {
    return {
      title: 'LinkedIn',
      description: 'Jejaring profesional & rekam jejak karier.',
      icon: Linkedin
    };
  }
  if (lower.includes('instagram')) {
    return {
      title: 'Instagram',
      description: 'Update harian, edukasi & aktivitas kreatif.',
      icon: Instagram
    };
  }
  if (lower.includes('tiktok')) {
    return {
      title: 'TikTok',
      description: 'Konten video singkat seputar tech & coding.',
      icon: TikTokIcon
    };
  }
  if (lower.includes('github')) {
    return {
      title: 'GitHub',
      description: 'Kumpulan repositori kode & proyek open source.',
      icon: Github
    };
  }
  if (lower.includes('febrisuryanto.com')) {
    return {
      title: 'Website Resmi',
      description: 'Kunjungi febrisuryanto.com untuk informasi lengkap.',
      icon: Globe
    };
  }

  // Fallback
  return {
    title: text,
    description: 'Poin utama dalam pembahasan materi.',
    icon: CheckSquare
  };
};
