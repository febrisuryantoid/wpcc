import React from 'react';
import { 
  Target, Search, Megaphone, ShieldCheck, Globe, Code2, Cpu, Database, 
  Laptop, Smartphone, Tv, Server, AppWindow, FileCode, MonitorPlay,
  Linkedin, Instagram, Youtube, Github, Chrome, Compass, Flame, Shield,
  Heading, Type, AlignLeft, Image, Sparkles, MousePointerClick, Palette,
  LayoutGrid, Wand2, Zap, Sliders, CheckSquare, Volume2, Wifi, FolderArchive, FileEdit, Puzzle, RefreshCw, Layers, MessageSquare,
  Brain, Key, Fingerprint, BadgeCheck, Cloud, Lock, Tag, Gift, GitBranch,
  Blocks, LayoutTemplate, FileText, Newspaper, Calendar, Ticket, Users,
  MessageCircle, GraduationCap, Building2, HeartPulse, MapPin, Award,
  BookOpen, FolderGit2, Briefcase, BrainCircuit, Rocket, Layout,
  Crown, FileSearch, Touchpad, TextQuote, FormInput, ShieldAlert,
  Rss, Landmark, Activity, UserCheck, Plug, Unlock, TrendingUp,
  Monitor, LayoutDashboard, ShoppingBag, Lightbulb, Mail
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
  title: string;  originalText?: string;
  description: string;
  icon: any;
}

export const getIconForTitle = (title: string, desc: string): any => {
  const t = title.toLowerCase();
  const d = desc.toLowerCase();

  // Socials / Brands
  if (t.includes('linkedin')) return Linkedin;
  if (t.includes('instagram')) return Instagram;
  if (t.includes('tiktok')) return TikTokIcon;
  if (t.includes('github') || t.includes('repositori')) return Github;
  if (t.includes('youtube')) return Youtube;
  if (t.includes('chrome') || t.includes('google chrome')) return ChromeIcon;
  if (t.includes('edge') || t.includes('microsoft edge')) return EdgeIcon;
  if (t.includes('firefox') || t.includes('mozilla firefox')) return FirefoxIcon;
  if (t.includes('safari') || t.includes('apple safari')) return SafariIcon;

  // Tech / Languages
  if (t.includes('wordpress') || d.includes('wordpress')) return WPIcon;
  if (t.includes('html') || d.includes('html')) return HTMLIcon;
  if (t.includes('css') || d.includes('css')) return CSSIcon;
  if (t.includes('javascript') || t.includes('js') || d.includes('javascript')) return JSIcon;

  // Web concepts
  if (t.includes('domain') || d.includes('domain')) return Globe;
  if (t.includes('dns') || d.includes('dns')) return Compass;
  if (t.includes('hosting') || t.includes('server') || d.includes('hosting') || t.includes('cloud')) return Cloud;
  if (t.includes('database') || t.includes('db') || d.includes('database')) return Database;
  if (t.includes('core') || d.includes('core')) return Cpu;
  if (t.includes('website') || t.includes('web') || d.includes('website')) return Monitor;
  if (t.includes('dashboard') || d.includes('dashboard')) return LayoutDashboard;
  if (t.includes('site editor') || t.includes('block editor') || t.includes('full site editing')) return Layout;
  if (t.includes('plugin') || d.includes('plugin')) return Plug;
  if (t.includes('theme') || t.includes('tema') || d.includes('tema') || t.includes('tampilan') || t.includes('desain') || t.includes('design') || t.includes('appearance') || t.includes('warna') || t.includes('typography') || t.includes('tipografi')) return Palette;

  // General features & quality
  if (t.includes('security') || t.includes('keamanan') || t.includes('aman') || d.includes('aman') || t.includes('shield')) return ShieldCheck;
  if (t.includes('kendali') || t.includes('kontrol') || t.includes('akses') || t.includes('login') || t.includes('masuk')) return Unlock;
  if (t.includes('skala') || t.includes('trend') || t.includes('kembang') || t.includes('tumbuh')) return TrendingUp;
  if (t.includes('cepat') || t.includes('speed') || t.includes('performa') || t.includes('efisiensi') || t.includes('zap') || t.includes('kilat') || t.includes('praktis')) return Zap;
  if (t.includes('visual') || t.includes('efek') || t.includes('animasi') || t.includes('spark') || t.includes('interaktif') || t.includes('pola') || t.includes('block patterns')) return Sparkles;

  // Business & Edu
  if (t.includes('introduction') || t.includes('konsep') || t.includes('dasar') || t.includes('belajar') || t.includes('materi') || t.includes('pembelajaran') || t.includes('sekolah') || t.includes('e-learning') || t.includes('akademik') || t.includes('learn')) return BookOpen;
  if (t.includes('career') || t.includes('karier') || t.includes('kerja') || t.includes('industri') || t.includes('pekerjaan')) return Briefcase;
  if (t.includes('komunitas') || t.includes('community') || t.includes('user') || t.includes('pengguna') || t.includes('tim') || t.includes('multi-user') || t.includes('pembagian peran')) return Users;
  if (t.includes('workshop') || t.includes('praktik') || t.includes('hands-on') || t.includes('buat') || t.includes('bikin') || t.includes('tata letak')) return Touchpad;
  if (t.includes('identitas') || t.includes('brand') || t.includes('porto') || t.includes('kredibilitas') || t.includes('company profile')) return Target;
  if (t.includes('promosi') || t.includes('marketing') || t.includes('iklan')) return Megaphone;
  if (t.includes('sejarah') || t.includes('tahun') || t.includes('2003') || t.includes('tanggal')) return Calendar;
  if (t.includes('gratis') || t.includes('free') || t.includes('biaya') || t.includes('tag')) return Tag;
  if (t.includes('post') || t.includes('artikel') || t.includes('berita') || t.includes('blog') || t.includes('news')) return Newspaper;
  if (t.includes('page') || t.includes('halaman') || t.includes('statis')) return FileText;
  if (t.includes('header') || t.includes('footer') || t.includes('menu')) return LayoutTemplate;
  if (t.includes('navigation') || t.includes('navigasi') || t.includes('menu')) return Compass;
  if (t.includes('publish') || t.includes('rilis') || t.includes('online')) return Rocket;
  if (t.includes('email') || t.includes('surat')) return FileText;

  // Fallback map
  return CheckSquare;
};

export const getPointDetails = (pointText: string, sceneHeadline?: string): PointData => {
  const text = pointText.trim();
  const lower = text.toLowerCase();

  // 1. Detect Parenthesis Pattern: Title (Description)
  const firstOpen = text.indexOf('(');
  const lastClose = text.lastIndexOf(')');
  
  if (firstOpen !== -1 && lastClose > firstOpen) {
    const rawTitle = text.slice(0, firstOpen).trim();
    const rawDesc = text.slice(firstOpen + 1, lastClose).trim();
    
    if (rawTitle && rawDesc) {
      const icon = getIconForTitle(rawTitle, rawDesc);
      return { originalText: text,
        title: rawTitle,
        description: rawDesc,
        icon
      };
    }
  }

  // If pointText contains ' — ' or ' – ' or ' - ' or ': ', parse Title and Description
  if (text.includes(' — ') || text.includes(' – ') || text.includes(' - ') || text.includes(': ')) {
    const parts = text.split(/\s*(?:[—–-]|:)\s+/);
    if (parts.length >= 2) {
      const rawTitle = parts[0].trim();
      const rawDesc = parts.slice(1).join(' — ').trim();
      
      let icon = CheckSquare;
      const lowerT = rawTitle.toLowerCase();
      if (lowerT.includes('siap pakai')) icon = Rocket;
      else if (lowerT.includes('domain')) icon = Globe;
      else if (lowerT.includes('dns')) icon = Compass;
      else if (lowerT.includes('hosting')) icon = Cloud;
      else if (lowerT.includes('website')) icon = Monitor;
      else if (lowerT.includes('perawatan') || lowerT.includes('keamanan')) icon = ShieldCheck;
      else if (lowerT.includes('cepat online') || lowerT.includes('cepat')) icon = Zap;
      else if (lowerT.includes('kustomisasi')) icon = Palette;
      else if (lowerT.includes('plugin')) icon = Plug;
      else if (lowerT.includes('kontrol') || lowerT.includes('akses')) icon = Unlock;
      else if (lowerT.includes('skalabilitas')) icon = TrendingUp;

      return { originalText: text,
        title: rawTitle,
        description: rawDesc,
        icon
      };
    }
  }

  // Slide 4 (Learning Objectives)
  if (lower.includes('memahami konsep website modern')) {
    return { originalText: text,
      title: 'Web Modern',
      description: 'Memahami fondasi, cara kerja, dan arsitektur website masa kini.',
      icon: BookOpen
    };
  }
  if (lower.includes('mengenal wordpress sebagai cms')) {
    return { originalText: text,
      title: 'Sistem CMS',
      description: 'Mengenal ekosistem CMS terpopuler di dunia dan keunggulannya.',
      icon: Globe
    };
  }
  if (lower.includes('mengenal dashboard & site editor') || lower.includes('dashboard & site editor')) {
    return { originalText: text,
      title: 'Site Editor',
      description: 'Navigasi area kerja, pengelolaan konten, dan penyuntingan situs.',
      icon: LayoutDashboard
    };
  }
  if (lower.includes('siap membangun website sendiri')) {
    return { originalText: text,
      title: 'Bikin Website',
      description: 'Keterampilan praktis untuk merancang dan merilis website mandiri.',
      icon: Rocket
    };
  }

  // Slide 6 (Website di Sekitar Kita)
  if (lower.includes('portal berita')) {
    return { originalText: text,
      title: 'Berita',
      description: 'Menyajikan informasi dan liputan terkini secara real-time.',
      icon: Newspaper
    };
  }
  if (lower.includes('e-commerce') || lower.includes('berbelanja')) {
    return { originalText: text,
      title: 'E-Commerce',
      description: 'Platform toko online untuk transaksi jual beli barang & jasa.',
      icon: ShoppingBag
    };
  }
  if (lower.includes('company profile')) {
    return { originalText: text,
      title: 'Profile',
      description: 'Media profil resmi bisnis, perusahaan, atau organisasi.',
      icon: Building2
    };
  }
  if (lower.includes('e-learning')) {
    return { originalText: text,
      title: 'E-Learning',
      description: 'Portal edukasi online, kelas digital, dan modul belajar.',
      icon: GraduationCap
    };
  }

  // Slide 9 (Komponen Website)
  if (lower.includes('domain') && !lower.includes('alamat')) {
    return { originalText: text,
      title: 'Domain',
      description: 'Alamat unik pengakses website di internet (contoh: google.com).',
      icon: Globe
    };
  }
  if (lower.includes('dns') && !lower.includes('petunjuk')) {
    return { originalText: text,
      title: 'DNS',
      description: 'Sistem pemeta nama domain ke alamat IP server hosting.',
      icon: Compass
    };
  }
  if (lower.includes('hosting') && !lower.includes('rumah tempat')) {
    return { originalText: text,
      title: 'Hosting',
      description: 'Layanan server penyimpanan seluruh berkas & data website.',
      icon: Server
    };
  }
  if (lower === 'website' || lower === ' website') {
    return { originalText: text,
      title: 'Website',
      description: 'Kumpulan halaman web interaktif yang dapat diakses publik.',
      icon: AppWindow
    };
  }

  // Scene 7 (Mengapa Website Penting?)
  if (text === 'Branding') {
    return { originalText: text,
      title: 'Branding',
      description: 'Membangun citra dan identitas yang profesional di dunia digital.',
      icon: Target
    };
  }
  if (text === 'Informasi') {
    return { originalText: text,
      title: 'Informasi',
      description: 'Menyediakan informasi lengkap dan akurat kapan saja.',
      icon: FileSearch
    };
  }
  if (text === 'Promosi') {
    return { originalText: text,
      title: 'Promosi',
      description: 'Menjangkau lebih banyak orang dan meningkatkan visibilitas.',
      icon: Megaphone
    };
  }
  if (text === 'Kredibilitas') {
    return { originalText: text,
      title: 'Kredibilitas',
      description: 'Meningkatkan kepercayaan pelanggan dengan kehadiran online.',
      icon: ShieldCheck
    };
  }

  // Scene 2 (Speaker profile)
  if (lower.includes('technology consultant')) {
    return { originalText: text,
      title: 'Consultant',
      description: 'Konsultasi strategi teknologi & arsitektur sistem digital.',
      icon: Briefcase
    };
  }
  if (lower.includes('wordpress specialist')) {
    return { originalText: text,
      title: 'Specialist',
      description: 'Pengalaman mendalam membangun ekosistem WordPress.',
      icon: WPIcon
    };
  }
  if (lower.includes('performance expert') || lower.includes('speed specialist')) {
    return { originalText: text,
      title: 'Performance',
      description: 'Optimasi kecepatan web, Core Web Vitals, dan performa tinggi.',
      icon: Cpu
    };
  }
  if (lower.includes('ziezan') || lower.includes('founder')) {
    return { originalText: text,
      title: 'Founder',
      description: 'Pendiri Ziezan Solutions untuk layanan teknologi terpadu.',
      icon: Rocket
    };
  }

  // Scene 11 (Browser)
  if (lower === 'chrome' || lower.includes('google chrome')) {
    return { originalText: text,
      title: 'Chrome',
      description: 'Browser paling populer dunia dengan ekosistem luas.',
      icon: ChromeIcon
    };
  }
  if (lower === 'edge' || lower.includes('microsoft edge')) {
    return { originalText: text,
      title: 'Edge',
      description: 'Browser cepat berbasis Chromium bawaan Windows.',
      icon: EdgeIcon
    };
  }
  if (lower === 'firefox' || lower.includes('mozilla firefox')) {
    return { originalText: text,
      title: 'Firefox',
      description: 'Browser independen yang fokus pada privasi & keamanan.',
      icon: FirefoxIcon
    };
  }
  if (lower === 'safari' || lower.includes('apple safari')) {
    return { originalText: text,
      title: 'Safari',
      description: 'Browser resmi Apple teroptimasi untuk macOS & iOS.',
      icon: SafariIcon
    };
  }

  // Scene 15 (HTML)
  if (lower === 'heading') {
    return { originalText: text,
      title: 'Heading',
      description: 'Menentukan hierarki judul dan struktur dokumen web.',
      icon: Heading
    };
  }
  if (lower === 'paragraph') {
    return { originalText: text,
      title: 'Paragraph',
      description: 'Menyusun teks penjelasan dan paragraf konten.',
      icon: TextQuote
    };
  }
  if (lower === 'image') {
    return { originalText: text,
      title: 'Image',
      description: 'Menampilkan berkas gambar dan ilustrasi visual.',
      icon: Image
    };
  }
  if (lower === 'button') {
    return { originalText: text,
      title: 'Button',
      description: 'Elemen interaktif pemicu aksi dan aksi klik.',
      icon: Touchpad
    };
  }

  // Scene 16 (CSS)
  if (lower === 'warna') {
    return { originalText: text,
      title: 'Tema',
      description: 'Mengatur skema warna, latar belakang, dan gradasi.',
      icon: Palette
    };
  }
  if (lower === 'layout') {
    return { originalText: text,
      title: 'Layout',
      description: 'Menata tata letak responsif dengan Grid & Flexbox.',
      icon: LayoutGrid
    };
  }
  if (lower === 'typography') {
    return { originalText: text,
      title: 'Tipografi',
      description: 'Mengatur jenis font, ukuran, spasi, dan keterbacaan.',
      icon: Type
    };
  }
  if (lower === 'visual effect') {
    return { originalText: text,
      title: 'Visual',
      description: 'Menambahkan bayangan, animasi, dan estetika.',
      icon: Sparkles
    };
  }

  // Scene 17 (JavaScript)
  if (lower === 'animasi') {
    return { originalText: text,
      title: 'Animasi',
      description: 'Menciptakan pergerakan elemen yang hidup dan dinamis.',
      icon: Zap
    };
  }
  if (lower === 'slider') {
    return { originalText: text,
      title: 'Carousel',
      description: 'Menampilkan galeri foto atau banner berganti otomatis.',
      icon: Sliders
    };
  }
  if (lower === 'form') {
    return { originalText: text,
      title: 'Form',
      description: 'Memproses validasi dan pengiriman input pengguna.',
      icon: FormInput
    };
  }
  if (lower === 'popup') {
    return { originalText: text,
      title: 'Modal',
      description: 'Menampilkan dialog interaktif dan notifikasi.',
      icon: Layers
    };
  }

  // Scene 22 (Domain)
  if (lower.includes('mudah diingat')) {
    return { originalText: text,
      title: 'Memorable',
      description: 'Alamat simpel yang gampang diketik dan diingat pengunjung.',
      icon: Brain
    };
  }
  if (lower.includes('unik')) {
    return { originalText: text,
      title: 'Eksklusif',
      description: 'Satu-satunya alamat resmi milik Anda di seluruh dunia.',
      icon: Fingerprint
    };
  }
  if (lower.includes('identitas website')) {
    return { originalText: text,
      title: 'Identitas',
      description: 'Mewakili nama brand, perusahaan, atau organisasi.',
      icon: BadgeCheck
    };
  }

  // Scene 33 (WordPress.com)
  if (lower.includes('hosting disediakan')) {
    return { originalText: text,
      title: 'Siap Pakai',
      description: 'Server dan keamanan dikelola langsung oleh WordPress.com.',
      icon: Cloud
    };
  }
  if (lower.includes('praktis')) {
    return { originalText: text,
      title: 'Praktis',
      description: 'Dapat langsung digunakan tanpa instalasi teknis rumit.',
      icon: Rocket
    };
  }
  if (lower.includes('fleksibel terbatas')) {
    return { originalText: text,
      title: 'Terbatas',
      description: 'Kustomisasi tema & plugin dibatasi paket berlangganan.',
      icon: ShieldAlert
    };
  }

  // Scene 34 (WordPress.org)
  if (lower === 'gratis') {
    return { originalText: text,
      title: 'Gratis',
      description: 'Perangkat lunak bebas tanpa biaya lisensi software.',
      icon: Tag
    };
  }
  if (lower.includes('open source')) {
    return { originalText: text,
      title: 'Open Source',
      description: 'Kode sumber terbuka yang dikembangkan komunitas global.',
      icon: GitBranch
    };
  }
  if (lower.includes('kendali penuh')) {
    return { originalText: text,
      title: 'Kendali Penuh',
      description: 'Akses bebas ke seluruh server, file, dan database.',
      icon: Cpu
    };
  }
  if (lower.includes('plugin') && lower.includes('theme')) {
    return { originalText: text,
      title: 'Ekosistem',
      description: 'Akses ke puluhan ribu plugin dan tema kustom.',
      icon: Blocks
    };
  }

  // Scene 36 (Page & Post)
  if (lower.includes('page')) {
    return { originalText: text,
      title: 'Pages',
      description: 'Halaman statis yang jarang berubah seperti Home, About, Contact.',
      icon: FileText
    };
  }
  if (lower.includes('post')) {
    return { originalText: text,
      title: 'Posts',
      description: 'Konten dinamis berkategori seperti artikel blog dan berita.',
      icon: Newspaper
    };
  }

  // Scene 49 (Website Lainnya)
  if (lower === 'booking') {
    return { originalText: text,
      title: 'Booking',
      description: 'Sistem reservasi jadwal, hotel, dan layanan online.',
      icon: Calendar
    };
  }
  if (lower === 'event') {
    return { originalText: text,
      title: 'Event',
      description: 'Halaman promosi acara & registrasi peserta.',
      icon: Ticket
    };
  }
  if (lower === 'membership') {
    return { originalText: text,
      title: 'Membership',
      description: 'Area khusus untuk anggota terdaftar berlangganan.',
      icon: Users
    };
  }
  if (lower === 'komunitas') {
    return { originalText: text,
      title: 'Komunitas',
      description: 'Wadah forum diskusi dan jejaring antar anggota.',
      icon: MessageCircle
    };
  }
  if (lower === 'sekolah') {
    return { originalText: text,
      title: 'Sekolah',
      description: 'Portal informasi akademik, siswa, dan guru.',
      icon: GraduationCap
    };
  }
  if (lower === 'masjid') {
    return { originalText: text,
      title: 'Masjid',
      description: 'Jadwal sholat, laporan keuangan & kegiatan umat.',
      icon: Landmark
    };
  }
  if (lower.includes('rumah sakit')) {
    return { originalText: text,
      title: 'Rumah Sakit',
      description: 'Jadwal dokter, informasi layanan & janji temu.',
      icon: HeartPulse
    };
  }
  if (lower === 'travel') {
    return { originalText: text,
      title: 'Travel',
      description: 'Katalog paket wisata & pemesanan tur digital.',
      icon: MapPin
    };
  }

  // Scene 52 (Skill yang Akan Anda Miliki)
  if (lower.includes('web design')) {
    return { originalText: text,
      title: 'Web Design',
      description: 'Merancang estetika visual dan layout yang memikat.',
      icon: Palette
    };
  }
  if (lower.includes('development')) {
    return { originalText: text,
      title: 'Development',
      description: 'Membangun logika teknis & fungsionalitas website.',
      icon: Code2
    };
  }
  if (lower.includes('ui/ux')) {
    return { originalText: text,
      title: 'UI / UX',
      description: 'Memastikan kenyamanan pengguna saat bernavigasi dan keindahan visual.',
      icon: Layout
    };
  }
  if (lower.includes('seo')) {
    return { originalText: text,
      title: 'SEO',
      description: 'Meningkatkan peringkat website di hasil pencarian Google agar mudah ditemukan.',
      icon: Search
    };
  }
  if (lower.includes('security') || lower.includes('keamanan')) {
    return { originalText: text,
      title: 'Security',
      description: 'Melindungi website dari serangan siber, malware, dan akses ilegal.',
      icon: ShieldCheck
    };
  }

  // Scene 57 (Roadmap)
  if (lower.includes('html, css')) {
    return { originalText: text,
      title: 'Fondasi',
      description: 'Kuasai HTML, CSS, dan dasar-dasar JavaScript.',
      icon: FileCode
    };
  }
  if (lower.includes('wordpress dasar')) {
    return { originalText: text,
      title: 'WP Basic',
      description: 'Pelajari pengelolaan dashboard, konten, dan media.',
      icon: WPIcon
    };
  }
  if (lower.includes('theme & plugin')) {
    return { originalText: text,
      title: 'Ekstensi',
      description: 'Instalasi dan konfigurasi tampilan & fitur tambahan.',
      icon: Blocks
    };
  }
  if (lower.includes('elementor')) {
    return { originalText: text,
      title: 'Builder',
      description: 'Desain visual cepat menggunakan Elementor drag & drop.',
      icon: Touchpad
    };
  }
  if (lower.includes('portfolio') && !lower.includes('com')) {
    return { originalText: text,
      title: 'Portofolio',
      description: 'Bangun hasil karya nyata untuk ditunjukkan ke klien.',
      icon: Award
    };
  }

  // Scene 59 (Ringkasan)
  if (lower === 'website') {
    return { originalText: text,
      title: 'Website',
      description: 'Halaman digital sebagai pusat identitas online.',
      icon: Globe
    };
  }
  if (lower === 'html') {
    return { originalText: text,
      title: 'HTML',
      description: 'Bahasa standar penyusun kerangka fondasi struktur halaman web.',
      icon: HTMLIcon
    };
  }
  if (lower === 'css') {
    return { originalText: text,
      title: 'CSS',
      description: 'Pengatur gaya, warna, tata letak, dan estetika visual.',
      icon: CSSIcon
    };
  }
  if (lower === 'javascript' || lower === 'js') {
    return { originalText: text,
      title: 'JavaScript',
      description: 'Bahasa pemrograman pemberi logika interaktif, form, & animasi.',
      icon: JSIcon
    };
  }
  if (lower === 'domain') {
    return { originalText: text,
      title: 'Domain',
      description: 'Alamat unik pengakses website (contoh: google.com).',
      icon: Key
    };
  }
  if (lower === 'hosting') {
    return { originalText: text,
      title: 'Hosting',
      description: 'Server aktif penyimpan seluruh file dan database website.',
      icon: Server
    };
  }
  if (lower === 'wordpress') {
    return { originalText: text,
      title: 'WordPress',
      description: 'Platform CMS (Content Management System) terpopuler di dunia.',
      icon: WPIcon
    };
  }

  // Scene 61 (Belajar Lebih Lanjut)
  if (lower.includes('wordpress.org')) {
    return { originalText: text,
      title: 'WordPress.org',
      description: 'Pusat unduhan software gratis dan dokumentasi.',
      icon: WPIcon
    };
  }
  if (lower.includes('community')) {
    return { originalText: text,
      title: 'Komunitas',
      description: 'Bergabung dengan Meetup dan grup pengembang lokal.',
      icon: Users
    };
  }
  if (lower.includes('dokumentasi')) {
    return { originalText: text,
      title: 'Dokumentasi',
      description: 'Membaca panduan teknis dan tutorial terlengkap.',
      icon: BookOpen
    };
  }
  if (lower.includes('youtube')) {
    return { originalText: text,
      title: 'YouTube',
      description: 'youtube.com/@febrisuryantoid',
      icon: Youtube
    };
  }

  // Socials & Contacts (Scene 39 / Closing)
  if (lower.includes('linkedin')) {
    return { originalText: text,
      title: 'LinkedIn',
      description: 'linkedin.com/in/febrisuryantoid',
      icon: Linkedin
    };
  }
  if (lower.includes('instagram')) {
    return { originalText: text,
      title: 'Instagram',
      description: 'instagram.com/febrisuryantoid',
      icon: Instagram
    };
  }
  if (lower.includes('tiktok')) {
    return { originalText: text,
      title: 'TikTok',
      description: 'tiktok.com/@febrisuryantoid',
      icon: TikTokIcon
    };
  }
  if (lower.includes('github')) {
    return { originalText: text,
      title: 'GitHub',
      description: 'github.com/febrisuryantoid',
      icon: Github
    };
  }
  if (lower.includes('febrisuryanto.com') || lower.includes('website')) {
    return { originalText: text,
      title: 'Website',
      description: 'febrisuryanto.com',
      icon: Globe
    };
  }

  if (lower.includes('meetup.com/wpserang') || lower.includes('wpserang') || lower.includes('meetup serang')) {
    return { originalText: text,
      title: 'WordPress Meetup Serang',
      description: 'Komunitas lokal resmi WordPress di Serang untuk belajar, berbagi ilmu, dan berjejaring gratis.',
      icon: Users
    };
  }


  // Slide 12 (Mengapa CMS?)
  if (lower.includes("mempercepat pembuatan website")) {
    return { originalText: text,
      title: "Kecepatan",
      description: "Memangkas waktu pembuatan web dari bulanan menjadi hitungan jam.",
      icon: Zap
    };
  }
  if (lower.includes("mudah mengelola konten")) {
    return { originalText: text,
      title: "Konten",
      description: "Menambah, mengubah, dan mengedit teks maupun media tanpa coding.",
      icon: FileEdit
    };
  }
  if (lower.includes("mendukung banyak pengguna")) {
    return { originalText: text,
      title: "Akses",
      description: "Pengaturan akses bertingkat untuk Admin, Editor, Penulis, & Kontributor.",
      icon: Users
    };
  }
  if (lower.includes("fleksibel dan mudah dikembangkan")) {
    return { originalText: text,
      title: "Skalabilitas",
      description: "Dapat diperluas fungsionalitasnya dengan ribuan plugin & integrasi API.",
      icon: TrendingUp
    };
  }

  // Slide 18 (Keunggulan WordPress)
  if (lower.includes("open source & gratis")) {
    return { originalText: text,
      title: "Gratis",
      description: "Kode sumber terbuka tanpa biaya lisensi software.",
      icon: Unlock
    };
  }
  if (lower.includes("ribuan plugin")) {
    return { originalText: text,
      title: "Ekosistem",
      description: "Ribuan modul ekstensi untuk menambah fitur spesifik.",
      icon: Plug
    };
  }
  if (lower.includes("ribuan theme")) {
    return { originalText: text,
      title: "Tema",
      description: "Pilihan gaya visual instan sesuai kebutuhan brand.",
      icon: Palette
    };
  }
  if (lower.includes("terus berkembang")) {
    return { originalText: text,
      title: "Berkembang",
      description: "Mendapatkan pembaruan sistem dan keamanan berkala.",
      icon: TrendingUp
    };
  }

  // Slide 25 & 26 (Posts & Pages)
  if (lower.startsWith("posts |") || lower === "posts") {
    return { originalText: text,
      title: "Posts",
      description: "Konten dinamis berdasarkan urutan waktu (artikel, berita, blog).",
      icon: Newspaper
    };
  }
  if (lower.startsWith("pages |") || lower === "pages") {
    return { originalText: text,
      title: "Pages",
      description: "Konten statis yang jarang berubah (Beranda, Tentang Kami, Layanan, Kontak).",
      icon: FileText
    };
  }
  if (lower === "appearance") {
    return { originalText: text,
      title: "Appearance",
      description: "Pengaturan tema tampilan visual dan gaya antarmuka situs.",
      icon: Palette
    };
  }
  if (lower === "plugins") {
    return { originalText: text,
      title: "Plugins",
      description: "Manajemen ekstensi untuk menambah fitur baru pada situs.",
      icon: Plug
    };
  }
  if (lower.includes("settings")) {
    return { originalText: text,
      title: "Settings",
      description: "Pengaturan umum situs, membaca, permalink, dan opsi sistem.",
      icon: Sliders
    };
  }

  // Slide 33 (Keunggulan Block Editor)
  if (lower === "mudah digunakan") {
    return { originalText: text,
      title: "Visual",
      description: "Penyuntingan WYSIWYG intuitif langsung di halaman web.",
      icon: Sparkles
    };
  }
  if (lower === "fleksibel") {
    return { originalText: text,
      title: "Modular",
      description: "Menyusun berbagai elemen blok sesuai struktur kebutuhan.",
      icon: Puzzle
    };
  }
  if (lower === "responsive") {
    return { originalText: text,
      title: "Responsif",
      description: "Tampilan otomatis menyesuaikan layar smartphone, tablet, & desktop.",
      icon: Smartphone
    };
  }
  if (lower.includes("mudah disusun ulang")) {
    return { originalText: text,
      title: "Fleksibel",
      description: "Geser dan atur ulang posisi blok tanpa merusak tata letak.",
      icon: RefreshCw
    };
  }

  // Slide 36 (Apa yang Dapat Dikelola?)
  if (lower === "header") {
    return { originalText: text,
      title: "Header",
      description: "Merancang logo, menu navigasi atas, dan bagian kepala website.",
      icon: Layout
    };
  }
  if (lower === "templates") {
    return { originalText: text,
      title: "Templates",
      description: "Mengontrol struktur tampilan Halaman Utama, Single Post, & 404 Page.",
      icon: FileText
    };
  }
  if (lower === "template parts") {
    return { originalText: text,
      title: "Parts",
      description: "Komponen modular seperti Header, Footer, dan Sidebar yang reusable.",
      icon: Layers
    };
  }
  if (lower === "navigation") {
    return { originalText: text,
      title: "Navigation",
      description: "Mengatur susunan link menu, sub-menu, dan tombol aksi navigasi.",
      icon: Compass
    };
  }
  if (lower === "footer") {
    return { originalText: text,
      title: "Footer",
      description: "Menyusun bagian kaki website, hak cipta, sosial media, & link informasi.",
      icon: LayoutTemplate
    };
  }
  if (lower === "global styles") {
    return { originalText: text,
      title: "Styles",
      description: "Menentukan tema warna, tipografi font, dan gaya komponen secara universal.",
      icon: Palette
    };
  }

  // Slide 39 (Yang Akan Dipraktikkan)
  if (lower === "install wordpress") {
    return { originalText: text,
      title: "Install",
      description: "Panduan setup instan server lokal atau staging platform.",
      icon: Monitor
    };
  }
  if (lower === "mengenal site editor") {
    return { originalText: text,
      title: "Editor",
      description: "Navigasi antarmuka Site Editor, Block Theme, & Global Styles.",
      icon: Palette
    };
  }
  if (lower === "membuat header") {
    return { originalText: text,
      title: "Header",
      description: "Merancang tata letak header, logo brand, dan navigasi atas.",
      icon: Layout
    };
  }
  if (lower === "membuat homepage") {
    return { originalText: text,
      title: "Homepage",
      description: "Menyusun halaman beranda dengan Hero Section, Feature, & Banner.",
      icon: FileText
    };
  }
  if (lower === "mengatur navigation") {
    return { originalText: text,
      title: "Navigation",
      description: "Menghubungkan menu ke halaman-halaman utama website.",
      icon: Compass
    };
  }
  if (lower === "publish website") {
    return { originalText: text,
      title: "Publish",
      description: "Finalisasi, pengecekan akhir, dan mempublikasikan website online.",
      icon: Rocket
    };
  }


  // Scene 5, 14, 16, 27, 38, 41, 42
  if (lower.includes("cms & wordpress")) {
    return { originalText: text,
      title: "CMS",
      description: "Mengenal sistem pengelola konten paling terpopuler di dunia.",
      icon: Globe
    };
  }
  if (lower === "2003") {
    return { originalText: text,
      title: "2003",
      description: "Tahun awal mula dimulainya proyek pengembangan WordPress.",
      icon: Calendar
    };
  }
  if (lower.includes("matt mullenweg")) {
    return { originalText: text,
      title: "Pendiri",
      description: "Diinisiasi oleh Matt Mullenweg dan Mike Little sebagai penerus b2/cafelog.",
      icon: Users
    };
  }
  if (lower === "cms modern") {
    return { originalText: text,
      title: "Modern",
      description: "Berkembang dari platform blog menjadi CMS paling dominan.",
      icon: Sparkles
    };
  }
  if (lower === "blogging") {
    return { originalText: text,
      title: "Blogging",
      description: "Fokus awal sebagai sistem manajemen jurnal dan artikel tulisan.",
      icon: FileText
    };
  }
  if (lower === "full site editing") {
    return { originalText: text,
      title: "FSE",
      description: "Fitur modern penyuntingan seluruh bagian situs secara visual.",
      icon: Layout
    };
  }
  if (lower === "audio") {
    return { originalText: text,
      title: "Audio",
      description: "Format media suara, podcast, rekaman, dan sampel musik.",
      icon: Volume2
    };
  }
  if (lower === "login dashboard") {
    return { originalText: text,
      title: "Login",
      description: "Masuk ke halaman admin situs untuk memulai kustomisasi.",
      icon: Unlock
    };
  }
  if (lower.includes("cocok untuk berbagai jenis website")) {
    return { originalText: text,
      title: "Serbaguna",
      description: "Sangat fleksibel untuk blog, portofolio kampus, e-commerce, hingga portal instansi.",
      icon: Lightbulb
    };
  }
  if (lower.includes("pastikan wordpress telah terinstal")) {
    return { originalText: text,
      title: "Akses",
      description: "Telah terpasang pada Localhost (LocalWP, XAMPP) atau staging server.",
      icon: Laptop
    };
  }
  if (lower.includes("koneksi internet tersedia")) {
    return { originalText: text,
      title: "Internet",
      description: "Koneksi stabil untuk mengunduh tema, gambar, & pustaka Gutenberg.",
      icon: Wifi
    };
  }
  if (lower.includes("siapkan file pendukung")) {
    return { originalText: text,
      title: "File",
      description: "Aset gambar logo, teks sampel, dan media pendukung yang dibutuhkan.",
      icon: FolderArchive
    };
  }
  if (lower.includes("ikuti instruksi pemateri")) {
    return { originalText: text,
      title: "Praktik",
      description: "Menyimak setiap tahapan dan langsung mencoba di laptop masing-masing.",
      icon: UserCheck
    };
  }

  // Generic match for "Title (Description)"
  const bracketMatch = text.match(/^(.*?)\s*\((.*)\)$/);
  if (bracketMatch) {
    return { originalText: text,
      title: bracketMatch[1],
      description: bracketMatch[2],
      icon: CheckSquare // fallback icon
    };
  }

  // Fallback
  return { originalText: text,
    title: text,
    description: '',
    icon: CheckSquare
  };
};
