# 🪐 PRODUCTION BIBLE: SCENE 11 - 15

==================================================
## SCENE 11
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 11
*   **Judul:** Website Dibuka oleh Browser
*   **Tujuan Pembelajaran:** Menyambungkan konsep browser dari scene sebelumnya menuju cara browser memuat sebuah website.
*   **Estimasi Durasi:** 25 detik
*   **Emosi Audiens:** Penasaran & Fokus.
*   **Expected Wow Moment:** Melihat partikel dari luar (internet) disedot masuk ke dalam *Browser Window*, dan browser tersebut mulai merakit tampilan.

### LEARNING EXPERIENCE
*   **Hook:** "Sekarang kita sudah punya penerjemah (Browser). Apa yang terjadi saat kita mengetik sebuah alamat?"
*   **Pertanyaan:** "Pernahkah kalian melihat layar putih atau loading saat membuka web? Apa yang sebenarnya sedang terjadi di balik layar itu?"
*   **Cerita:** Saat kita menekan 'Enter', browser memesan data dari internet, lalu data tersebut datang berbentuk kepingan puzzle yang belum disusun.
*   **Analogi:** Seperti memesan rumah bongkar pasang dari luar negeri. Paketnya datang lewat kapal (internet), lalu sampai di tanah kosong (browser).
*   **Visualisasi:** Crystal digital dari jaringan melesat masuk ke dalam bingkai kaca browser.
*   **Penjelasan:** Browser adalah kanvas kosong yang bertugas menggambar data yang diterimanya.
*   **Contoh Nyata:** Mengetik www.google.com dan melihat elemen-elemen muncul satu per satu.
*   **Aha Moment:** "Oh, jadi browser itu awalnya kosong, dan dia yang bekerja keras menggambar website untuk kita."
*   **Transisi:** Kamera masuk menembus kaca browser, membawa kita masuk ke 'dunia' di dalam website tersebut.

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Objek luar (Crystal Core/Partikel) masuk ke dalam wadah (Browser).
*   **Apa arti perubahan tersebut:** Data mentah telah tiba di sisi *client* (pengguna).
*   **Mengapa memudahkan pemahaman:** Memberikan sensasi ruang (spasial) bahwa website "hidup" di dalam browser.

### HERO OBJECT EVOLUTION
*   Browser terbuka (dari scene 10).
*   Crystal Core masuk ke dalam Browser.
*   Browser masih kosong, lalu loading indicator 3D muncul.
*   **Makna:** Browser adalah wadah yang siap merender website.

### UI EXPERIENCE
*   **Layout:** Center stage. Teks di bawah bingkai 3D Browser.
*   **Hero Area:** Judul tipografi besar "Menerima Data".
*   **Glass Panel:** Panel loading kecil di sudut UI yang menampilkan persentase "Downloading Assets...".
*   **Negative Space:** Sangat luas di sekitar browser untuk menekankan fokus pada kanvas yang sedang dimuat.

### BACKGROUND EXPERIENCE
*   **Background Type:** Premium Browser Workspace.
*   **Detail:** Ruang bersih bercahaya putih mutiara dengan bias biru kaca yang sangat halus.

### COLOR PALETTE
*   **Primary:** Pearl White (#FFFFFF)
*   **Secondary:** Light Silver (#E2E8F0)
*   **Accent:** Glass Blue (#00E5FF)

### GSAP CHOREOGRAPHY
*   **Camera Motion:** Dolly-in perlahan mendekati layar browser.
*   **Hero Reveal:** Partikel menyatu di tengah bingkai kaca browser membentuk simbol loading putar (spinner 3D).
*   **Transition:** Kamera melesat masuk menembus kaca layar, memenuhi seluruh pandangan dengan putih.

### THREE.JS EXPERIENCE
*   **Object:** Browser Window (Glass), 3D Loading Spinner di dalamnya.
*   **Material:** `MeshPhysicalMaterial` untuk kaca, `MeshStandardMaterial` dengan *emissive* cyan untuk spinner.
*   **Lighting:** Cahaya terang dari dalam layar (Backlight).
*   **Camera:** Kamera bergerak maju secara konstan.

### CAMERA DIRECTION
*   **Initial Camera:** Di depan Browser Window.
*   **Movement:** Bergerak maju lambat.
*   **Exit Camera:** Melaju kencang menembus kaca browser.

### COMPONENTS
*   3D Browser Frame
*   3D Loader
*   Progress Indicator (UI)

### CUSTOM ICON SYSTEM
*   **Icon Dibutuhkan:** Loading, Refresh, Globe.

### ASSETS
*   **3D:** Browser Frame, Loading Spinner.
*   **Audio:** Suara hisapan ringan lalu "ting" saat loading selesai.

==================================================
## SCENE 12
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 12
*   **Judul:** Apa Itu Website?
*   **Tujuan Pembelajaran:** Menanamkan konsep bahwa website pada dasarnya adalah struktur informasi yang disusun secara logis.
*   **Estimasi Durasi:** 30 detik
*   **Emosi Audiens:** Mengerti & Analitis.
*   **Expected Wow Moment:** Layar putih kosong tiba-tiba tergambar garis-garis blueprint yang membentuk wireframe 3D sebuah gedung/halaman.

### LEARNING EXPERIENCE
*   **Hook:** "Selamat datang di dalam dunia website. Tapi tunggu... kenapa bentuknya seperti ini?"
*   **Pertanyaan:** "Apakah website langsung muncul dengan warna dan gambar?"
*   **Cerita:** Sebelum menjadi cantik, website adalah sekumpulan balok informasi. Arsitek digital tidak mulai dari mengecat dinding, mereka mulai dari membuat pondasi.
*   **Analogi:** Membangun gedung pencakar langit. Harus ada gambar cetak biru (blueprint) dan tiang pancang terlebih dahulu.
*   **Visualisasi:** Wireframe geometris dari sebuah halaman web (kotak-kotak kosong) terbentuk dari garis bercahaya.
*   **Penjelasan:** Website bukanlah gambar yang dicetak mati (seperti brosur), melainkan struktur balok yang disusun oleh browser.
*   **Aha Moment:** "Website itu kayak susunan lego, bukan selembar gambar foto."
*   **Transisi:** Kamera mengitari wireframe tersebut.

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Loading spinner memudar, digantikan oleh garis-garis kerangka (Wireframe).
*   **Apa arti perubahan tersebut:** Data telah diubah menjadi struktur awal (DOM).
*   **Mengapa memudahkan pemahaman:** Memberikan bukti visual bahwa website dirakit dari komponen-komponen kotak, mematahkan miskonsepsi bahwa website adalah sebuah "halaman gambar".

### HERO OBJECT EVOLUTION
*   Crystal/Loading berubah menjadi sebuah Website Wireframe.
*   Belum ada warna. Belum ada gambar. Hanya struktur garis (Edges).
*   **Makna:** Website memiliki struktur pondasi.

### UI EXPERIENCE
*   **Layout:** Split screen asimetris. Teks di kanan, Blueprint 3D di kiri.
*   **Hero Area:** Headline "Pondasi Digital" dengan tipografi monospace/arsitektural.
*   **Blueprint Overlay:** Ada grid lines samar di atas seluruh UI HTML (CSS background grid).
*   **Typography:** *JetBrains Mono* untuk kesan teknis yang rapi.

### BACKGROUND EXPERIENCE
*   **Background Type:** Minimal White Blueprint.
*   **Detail:** Latar belakang putih bersih dengan grid arsitek berwarna biru sangat pudar.

### COLOR PALETTE
*   **Primary:** White (#FFFFFF)
*   **Secondary:** Light Gray (#F1F5F9)
*   **Accent:** Blueprint Blue (#2563EB)

### GSAP CHOREOGRAPHY
*   **Wireframe Build:** Garis-garis wireframe digambar (animasi `drawSVG` style pada Three.js material).
*   **Hover:** Jika disorot, garis wireframe akan sedikit menebal.

### THREE.JS EXPERIENCE
*   **Object:** Kumpulan BoxGeometry abstrak yang disusun menyerupai layout website (Navbar, Hero, Sidebar), tapi dirender hanya garis rusuknya.
*   **Material:** `LineBasicMaterial` atau shader `EdgesGeometry` berwarna biru tua (#1E3A8A).
*   **Lighting:** Flat lighting, tanpa shadow agar terlihat seperti gambar arsitek.
*   **Camera:** Isometric projection atau perspective dengan FOV kecil.

### CAMERA DIRECTION
*   **Initial Camera:** Sudut miring (Isometric style).
*   **Movement:** Kamera perlahan mendekati dan berputar lambat (orbit ringan).

### COMPONENTS
*   Blueprint Grid Background
*   3D Wireframe Layout
*   Floating Label (menunjuk ke kotak: "Area Header", "Area Konten")

### ASSETS
*   **3D:** Kumpulan balok yang disusun rapi (Procedural box placement).
*   **Texture:** Blueprint Grid pattern.

==================================================
## SCENE 13
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 13
*   **Judul:** Website Dibuat Dari Apa?
*   **Tujuan Pembelajaran:** Mahasiswa mengetahui anatomi umum dari sebuah halaman web.
*   **Estimasi Durasi:** 35 detik
*   **Emosi Audiens:** Tercerahkan & Terstruktur.
*   **Expected Wow Moment:** Balok wireframe tadi meledak rapi ke udara, memisah menjadi bagian-bagian (Header, Konten, Sidebar, Footer) yang mengambang terpisah dengan label.

### LEARNING EXPERIENCE
*   **Hook:** "Mari kita bedah bangunan ini."
*   **Pertanyaan:** "Pernahkah kalian perhatikan, hampir semua website di dunia memiliki pola yang sama?"
*   **Cerita:** Semua website dibangun dari komponen yang dapat didaur ulang.
*   **Analogi:** Seperti mobil yang memiliki kap, kabin, dan bagasi. Website juga punya anatomi.
*   **Visualisasi:** Susunan kotak wireframe terpisah secara vertikal (meledak seperti diagram teknis / *exploded view*).
*   **Penjelasan:** Memperkenalkan nama anatomi: Header, Navbar, Hero, Content, Sidebar, Footer.
*   **Aha Moment:** "Ternyata website yang rumit itu cuma terdiri dari kotak-kotak besar ini saja."
*   **Transisi:** Kamera masuk fokus ke salah satu kotak (Content).

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Objek yang menyatu dipisahkan (Exploded view).
*   **Apa arti perubahan tersebut:** Analisis dekonstruksi dari sebuah halaman web.
*   **Mengapa memudahkan pemahaman:** Membuat sesuatu yang tampak kompleks menjadi bagian-bagian kecil yang mudah dikelola secara mental.

### HERO OBJECT EVOLUTION
*   Wireframe dipecah.
*   Mahasiswa melihat bahwa website terdiri dari komponen terpisah.
*   **Makna:** Website tersusun dari berbagai bagian.

### UI EXPERIENCE
*   **Layout:** Kotak-kotak 3D di sebelah kiri. Di sebelah kanan, ada daftar (List) UI komponen yang menyala selaras dengan kotak 3D.
*   **Section Indicator:** List UI dengan garis hubung ke objek 3D.
*   **Visual Hierarchy:** Fokus pada nama-nama komponen.

### BACKGROUND EXPERIENCE
*   **Background Type:** Blueprint Grid.
*   **Detail:** Masih dengan nuansa arsitektural, tapi grid biru lebih tegas (Medium blue) untuk memunculkan kesan sedang melakukan *engineering*.

### COLOR PALETTE
*   **Primary:** Blueprint Blue (#1D4ED8)
*   **Secondary:** White (#FFFFFF)
*   **Accent:** Cyan highlight (#22D3EE) untuk balok yang sedang dibicarakan.

### GSAP CHOREOGRAPHY
*   **Exploded View:** Jarak Y antar balok bertambah dengan animasi *bounce* ringan.
*   **Section Reveal:** Daftar komponen di layar UI muncul bergantian dari atas ke bawah seiring dengan bergesernya balok 3D.

### THREE.JS EXPERIENCE
*   **Object:** Balok Wireframe (dari scene 12) yang kini terpisah jarak (Y axis).
*   **Material:** Tetap material garis, namun sekarang ada isi berupa kaca tipis tembus pandang (`MeshPhysicalMaterial` opacity 0.1).
*   **Floating Motion:** Tiap balok melayang naik turun sedikit (offset rotasi Y dan posisi Y).
*   **Camera:** Berputar mengelilingi struktur yang meledak ini.

### CAMERA DIRECTION
*   **Initial Camera:** Sudut agak bawah melihat ke atas (Worm's eye view) agar struktur tampak tinggi.
*   **Movement:** Orbit 360 derajat mengelilingi struktur Website (sangat perlahan).

### COMPONENTS
*   3D Exploded Wireframe
*   Floating Labels (HTML UI)
*   List Component Indicator

### ASSETS
*   **3D:** Grup balok terpisah.

==================================================
## SCENE 14
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 14
*   **Judul:** HTML — Kerangka Website
*   **Tujuan Pembelajaran:** Mahasiswa memahami bahwa HTML adalah bahasa yang digunakan untuk menyusun kerangka pondasi tadi.
*   **Estimasi Durasi:** 35 detik
*   **Emosi Audiens:** Wow & Paham.
*   **Expected Wow Moment:** Layar meredup drastis, wireframe tiba-tiba bersinar terang warna cyan bergaya Tron. Label `<header>`, `<h1>`, `<p>` muncul melayang seperti hologram di dalam balok-balok tersebut.

### LEARNING EXPERIENCE
*   **Hook:** "Bagaimana cara kita memberi tahu browser untuk membuat kotak-kotak pondasi tadi?"
*   **Pertanyaan:** "Apakah kita menggambarnya dengan mouse?"
*   **Cerita:** Kita tidak menggambarnya. Kita *menulis* instruksinya. Bahasa instruksi pondasi ini disebut HTML.
*   **Analogi:** HTML adalah daftar material dan instruksi perakitan untuk si tukang bangunan (Browser).
*   **Visualisasi:** Susunan wireframe kini dipenuhi dengan tag-tag HTML yang bercahaya.
*   **Penjelasan:** HTML hanya mendefinisikan *apa* itu (ini judul, ini paragraf, ini tombol). Bukan *bagaimana* bentuknya.
*   **Aha Moment:** "Oh... ternyata HTML itu cuma bahasa untuk membuat kerangkanya saja."
*   **Transisi:** Cahaya cyan memudar, kita kembali melihat susunan pondasi tersebut dalam bentuk paling polos.

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Suasana berubah gelap agar tag HTML yang bercahaya menonjol.
*   **Apa arti perubahan tersebut:** Menghubungkan konsep visual (pondasi) dengan bahasa kode yang sebenarnya (HTML).
*   **Mengapa memudahkan pemahaman:** Memberikan asosiasi langsung antara tag kode (`<p>`) dengan balok pondasi fisiknya di layar.

### HERO OBJECT EVOLUTION
*   Wireframe berubah menjadi HTML Structure.
*   Semua elemen muncul sebagai tag: Heading, Paragraph, Button, Image, Section, Form.
*   Masih tanpa warna (hitam & cyan), masih tanpa animasi.
*   **Makna:** HTML adalah murni struktur dan makna data (Semantik).

### UI EXPERIENCE
*   **Layout:** Centered Hero. Fokus total pada bangunan hologram.
*   **Glass Panel:** Panel di sudut berisi barisan kode HTML asli yang di-highlight selaras dengan bagian bangunan yang menyala.
*   **Typography:** Sangat berbau *coding* (Monospace untuk tag HTML).

### BACKGROUND EXPERIENCE
*   **Background Type:** Dark Wireframe Space.
*   **Detail:** Transisi tajam dari putih (blueprint) ke ruang hampa gelap gulita (Dark Navy) agar hologram kerangka memancar kuat.

### COLOR PALETTE
*   **Primary:** Dark Navy (#0B1120)
*   **Accent:** Cyan Wireframe (#06B6D4)
*   **Highlight:** Neon Green (untuk tag HTML, #4ADE80)

### GSAP CHOREOGRAPHY
*   **Lighting Sweep:** Lampu studio dimatikan (Background memudar jadi hitam), Edge material menyala terang.
*   **Typography Reveal:** Hologram tag (`<h1>`, `<img>`) pop up di tengah kotak-kotak kerangka dengan efek mengetik (Typewriter effect).

### THREE.JS EXPERIENCE
*   **Object:** Wireframe blocks dengan HTML Tag melayang di tengahnya (Text3D dari *drei*).
*   **Material:** Garis cyan terang (Bloom tinggi) di atas bidang hitam transparan. Tag teks dengan material *emissive*.
*   **Lighting:** Hanya *Ambient* lemah. Fokus pada cahaya *Emissive* objek.
*   **Bloom:** EffectComposer *Bloom* dinyalakan tinggi.

### CAMERA DIRECTION
*   **Movement:** Kamera melakukan Zoom in perlahan, meluncur menembus dari satu blok (Header) turun ke blok lainnya (Content).

### COMPONENTS
*   Code Editor Panel (UI)
*   3D Holographic Wireframe
*   3D Floating Text Tags

### ASSETS
*   **3D:** Text3D geometri.

==================================================
## SCENE 15
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 15
*   **Judul:** Website Tanpa CSS dan JavaScript
*   **Tujuan Pembelajaran:** Mahasiswa menyadari limitasi HTML; bahwa HTML sendiri itu "jelek" dan sangat mentah.
*   **Estimasi Durasi:** 30 detik
*   **Emosi Audiens:** Senyum & Mengerti secara empiris.
*   **Expected Wow Moment:** Hologram canggih memudar, digantikan oleh tampilan website asli yang benar-benar tanpa *styling* (Times New Roman, hitam putih, tautan biru standar), dirender sebagai plane 3D.

### LEARNING EXPERIENCE
*   **Hook:** "Lalu, bagaimana tampilan sebuah website jika KITA HANYA MENGGUNAKAN HTML?"
*   **Pertanyaan:** "Apakah akan langsung terlihat seperti website Apple atau Netflix?"
*   **Cerita:** Tidak. HTML murni tanpa desain itu sangat membosankan. Seperti rumah yang baru jadi batu bata, belum diplester dan dicat.
*   **Analogi:** Dokumen kertas hitam putih.
*   **Visualisasi:** Layar menampilkan website *bare-bones* 90-an style. Times New Roman teks, hyperlink biru dengan garis bawah.
*   **Penjelasan:** Tanpa CSS (Warna/Desain) dan JavaScript (Interaksi), website tetap bisa berjalan, tapi tampilannya hanya seperti dokumen teks murni.
*   **Aha Moment:** "Pantesan dulu web jelek-jelek, soalnya belum dipoles desain."
*   **Transisi:** Kamera menjauh perlahan dari website polos tersebut, membiarkannya berdiri sendiri.

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Menghilangkan keindahan wireframe hologram untuk memperlihatkan realitas.
*   **Apa arti perubahan tersebut:** HTML telanjang.
*   **Mengapa memudahkan pemahaman:** Memberikan bukti nyata (bukti visual historis) bahwa HTML saja tidak cukup untuk web modern.

### HERO OBJECT EVOLUTION
*   HTML Hologram diproses (Rendered) menjadi tampilan final HTML Murni.
*   Bentuknya plane datar yang berisi teks hitam putih.
*   **Makna:** Kerangka saja berdiri kokoh tapi tidak memiliki estetika.

### UI EXPERIENCE
*   **Layout:** Sebuah kanvas putih (seperti kertas) di tengah.
*   **Typography:** Secara sengaja menggunakan *Times New Roman* (Font default browser) di dalam media area untuk memberikan efek kontras dengan UI presentasi yang modern.
*   **Comparison:** Ada semacam cap "100% PURE HTML" berwarna merah di sudut.

### BACKGROUND EXPERIENCE
*   **Background Type:** Minimal Monochrome Studio.
*   **Detail:** Latar belakang abu-abu sangat lembut, fokus pencahayaan spot ke tengah "dokumen" tersebut.

### COLOR PALETTE
*   **Primary:** Monochrome (Putih & Hitam)
*   **Secondary:** Soft Gray (#E2E8F0)
*   **Accent:** Blue Link (#0000EE - warna tautan jadul)

### GSAP CHOREOGRAPHY
*   **Transition:** Meredupkan hologram cyan, digantikan oleh bidang putih bercahaya (efek lampu dinyalakan kembali).
*   **Reveal:** Dokumen teks muncul dari atas ke bawah.

### THREE.JS EXPERIENCE
*   **Object:** Sebuah `PlaneGeometry` tegak.
*   **Material:** `MeshBasicMaterial` dengan *map* berupa tekstur gambar website HTML murni (hitam putih).
*   **Lighting:** Spotlight kuat mengarah ke bidang dokumen.
*   **Camera:** Kamera perlahan mundur (Dolly Out), memperlihatkan website polos tersebut berdiri sendirian di ruang abu-abu.

### CAMERA DIRECTION
*   **Movement:** Mundur menjauh dari dokumen.
*   **Exit Camera:** Berhenti pada posisi diam, menciptakan suasana antiklimaks (karena websitenya jelek) sebelum masuk ke solusi (CSS) di chapter berikutnya.

### COMPONENTS
*   3D Plane Text Document
*   Spotlight Effect

### ASSETS
*   **Texture:** Screenshot gambar website (misal halaman wikipedia tanpa CSS) berwarna hitam putih.

==================================================
// END OF SCENE 11-15 PRODUCTION MANUAL
// WAITING FOR APPROVAL
==================================================
