# 🪐 PRODUCTION BIBLE: SCENE 06 - 10

==================================================
## SCENE 06
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 06
*   **Judul:** Bagaimana Internet Bekerja?
*   **Tujuan Pembelajaran:** Mahasiswa memahami bahwa internet pada dasarnya adalah kabel dan sinyal yang menghubungkan komputer di seluruh dunia, bukan sesuatu yang magis di awan.
*   **Estimasi Durasi:** 35 detik
*   **Emosi Audiens:** Penasaran & Tercerahkan.
*   **Expected Wow Moment:** Melihat "kabel" virtual bawah laut menyala menghubungkan benua di atas globe 3D bergaya wireframe.

### LEARNING EXPERIENCE
*   **Hook:** "Pernahkah kalian berpikir, dari mana datangnya gambar di Instagram kalian?"
*   **Pertanyaan kepada Audiens:** "Apakah internet itu ada di udara? Di awan?"
*   **Cerita:** Mematahkan mitos "Cloud". Cloud sebenarnya adalah komputer milik orang lain yang terhubung dengan kabel ke komputer kita.
*   **Analogi:** Seperti sistem pipa air raksasa yang mengalirkan data, bukan air.
*   **Visualisasi:** Aliran cahaya yang bergerak dari satu node server ke node smartphone.
*   **Penjelasan:** Data dikirim dalam bentuk "paket" kecil melalui kabel fiber optik, melewati lautan dan benua.
*   **Contoh Nyata:** Kabel bawah laut yang menghubungkan Indonesia dengan Singapura dan Amerika.
*   **Aha Moment:** "Oh... ternyata internet itu fisik, ada kabelnya di bawah laut."
*   **Kesimpulan:** Internet adalah infrastruktur fisik komunikasi global.
*   **Transisi:** Kamera masuk (zoom in) ke salah satu node penerima (smartphone).

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Objek *Crystal Digital Core* membuka menjadi beberapa titik (node) yang saling menembakkan garis cahaya.
*   **Apa arti perubahan tersebut:** Transformasi dari satu entitas menjadi jaringan komunikasi.
*   **Mengapa memudahkan pemahaman:** Abstrak "jaringan" divisualisasikan sebagai titik yang saling bertukar energi (data), membuat konsep transfer data terlihat nyata.

### HERO OBJECT EVOLUTION
*   *Crystal Digital Core* mulai mengirim sinyal (pulse) ke node-node lain.
*   **Visualisasi:** Packet Data (partikel bercahaya), Connection Line (garis bezier bercahaya), Pulse, dan Flow (aliran data).
*   **Makna:** Internet menghubungkan banyak perangkat melalui jalur data.

### UI EXPERIENCE
*   **Layout:** Split 40/60. Kiri untuk Teks, Kanan untuk Visualisasi 3D Jaringan.
*   **Hero Area:** Judul besar "Infrastruktur Fisik".
*   **Content Area:** Poin-poin singkat tentang "Kabel Fiber Optik", "Server", dan "Client".
*   **Media Area:** Canvas 3D mendominasi sisi kanan hingga ke background.
*   **Negative Space:** Sangat luas di area teks untuk memberikan kontras pada cahaya 3D.
*   **Glass Panel:** Sebuah panel *glassmorphism* di sudut bawah menampilkan kecepatan transfer data buatan (mock telemetry).
*   **Typography:** *Cinzel* untuk Headline, *Inter* untuk penjelasan teknis.
*   **Progress Indicator:** Garis tipis bercahaya di sisi kiri layar menunjukkan posisi slide 6 dari 58.

### BACKGROUND EXPERIENCE
*   **Background Type:** Dark Network Grid.
*   **Detail:** Sebuah grid bergaris tipis berwarna cyan sangat gelap yang bergerak perlahan (seperti efek kecepatan warp yang sangat lambat).

### COLOR PALETTE
*   **Primary:** Deep Navy (#0A1128)
*   **Secondary:** Space Black (#050507)
*   **Accent:** Electric Blue (#00E5FF)
*   **Glass Tint:** rgba(0, 229, 255, 0.05)
*   **Lighting Color:** Ice Blue

### GSAP CHOREOGRAPHY
*   **Opening:** UI masuk dengan `y: 30`, `opacity: 0`, `stagger: 0.1`.
*   **Hero Reveal:** Jaringan 3D "menyala" satu per satu layaknya lampu kota yang dihidupkan pada malam hari.
*   **Connection Animation:** Garis cahaya ditarik antar node menggunakan `drawSVG` atau modifikasi *dash offset* pada materi Three.js.
*   **Exit:** Teks memudar, kamera 3D melesat maju masuk ke dalam salah satu node.
*   **Custom Ease:** `power3.out` untuk UI, `expo.inOut` untuk transisi kamera 3D.

### THREE.JS EXPERIENCE
*   **Object:** Kumpulan sphere (*Nodes*) dan bezier curves (*Connections*).
*   **Material:** Node menggunakan `MeshPhysicalMaterial` dengan `transmission: 1`, `roughness: 0`. Garis menggunakan `LineBasicMaterial` atau `MeshLine` dengan vertex colors.
*   **Lighting:** *Bloom effect* yang sangat kuat menggunakan *EffectComposer*.
*   **Particles:** Paket data yang bergerak menyusuri kurva menggunakan instanced meshes.
*   **Mouse Interaction:** Saat mouse digerakkan, seluruh jaringan sedikit berotasi (Parallax) dan node terdekat dengan kursor akan bersinar lebih terang.

### CAMERA DIRECTION
*   **Initial Camera:** Wide shot dari sudut agak atas (Isometric feel).
*   **Movement:** Orbit perlahan 15 derajat selama scene berlangsung.
*   **Exit Camera:** Dolly zoom Ekstrem langsung menembus satu node di tengah.

### COMPONENTS
*   Hero Headline
*   Telemetry Glass Card (Data Transfer Speed)
*   Network Visualization (Three.js)
*   Chapter Indicator (Bab 2: Memahami Internet)

### CUSTOM ICON SYSTEM
*   **Icon Dibutuhkan:** Server Rack, Submarine Cable, Satellite.
*   **Style:** Liquid Glass, PBR, Floating, Blue Cyan, Semi Realistic.

### ASSETS
*   **3D:** Custom Node & Line geometry (Procedural).
*   **Texture:** Grid normal map.
*   **Audio:** Suara *low frequency hum* dan *digital pulse* (Subtle).

### IMPLEMENTATION NOTES
*   **Prioritas:** Tinggi. Scene ini mendefinisikan estetika "jaringan".
*   **Optimasi:** Gunakan `InstancedMesh` untuk ribuan partikel data agar 60FPS tetap terjaga. Batasi jumlah koneksi garis maksimal 100.
*   **Aksesibilitas:** Transkrip teks untuk deskripsi jaringan.

### QUALITY REVIEW
*   **Review:** Visualisasi jaringan data dengan *bloom* sudah standar industri tertinggi (Apple-level keynote). Sangat efektif mengilustrasikan "koneksi".
*   **Perbaikan (Jika ada):** Pastikan garis tidak terlalu ramai (cluttered). Kurangi node jika FPS turun di bawah 60.

==================================================
## SCENE 07
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 07
*   **Judul:** Siapa yang Terhubung ke Internet?
*   **Tujuan Pembelajaran:** Menyadarkan mahasiswa bahwa "node" dalam jaringan tersebut adalah perangkat yang mereka gunakan setiap hari.
*   **Estimasi Durasi:** 30 detik
*   **Emosi Audiens:** Terhubung (Relatable).
*   **Expected Wow Moment:** Node abstrak di scene sebelumnya morphing (berubah bentuk) menjadi ikon 3D realistis (Laptop, HP, Smart TV).

### LEARNING EXPERIENCE
*   **Hook:** "Siapa saja yang menempati jaringan raksasa ini?"
*   **Pertanyaan kepada Audiens:** "Berapa banyak perangkat yang terhubung ke internet di ruangan ini saja?"
*   **Cerita:** Dari jaringan server besar ke perangkat di genggaman tangan.
*   **Analogi:** Seperti jalan raya, internet tidak hanya dilewati truk besar (server), tapi juga jutaan sepeda motor (smartphone).
*   **Visualisasi:** Node jaringan berubah menjadi representasi perangkat keras konsumen.
*   **Penjelasan:** Setiap perangkat memiliki identitas (IP Address) untuk bisa saling mengirim paket data.
*   **Contoh Nyata:** Smartphone di saku mereka sedang terhubung sekarang.
*   **Aha Moment:** "Semua benda ini saling berbicara satu sama lain dalam bahasa yang sama."
*   **Transisi:** Perangkat-perangkat tersebut mulai memancarkan ikon-ikon aplikasi.

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Titik cahaya (node) berubah menjadi perangkat untuk mendaratkan konsep abstrak ke realitas audiens.
*   **Apa arti perubahan tersebut:** Internet = Kumpulan perangkat manusia.
*   **Mengapa memudahkan pemahaman:** Transisi dari abstrak (titik) ke nyata (smartphone) membangun jembatan kognitif.

### HERO OBJECT EVOLUTION
*   Node bertambah banyak.
*   Visualisasi: Laptop, Smartphone, Tablet, TV, Server bermunculan dari titik-titik jaringan.
*   Semuanya saling menembakkan garis koneksi.
*   **Makna:** Ekosistem internet sangat beragam namun menggunakan protokol komunikasi yang sama.

### UI EXPERIENCE
*   **Layout:** Center stage. Teks di atas (Headline), Objek 3D mengambang di tengah.
*   **Content Area:** Statistik jumlah miliaran perangkat yang terhubung di dunia (Data Readout Component).
*   **Floating Panel:** Kartu-kartu kecil muncul di dekat objek 3D berisi label (Misal: "Mobile: 6.8 Miliar", "IoT: 15 Miliar").
*   **Reading Direction:** Top (Judul) -> Center (Visualisasi 3D) -> Floating Cards.

### BACKGROUND EXPERIENCE
*   **Background Type:** World Connection.
*   **Detail:** Siluet peta dunia bergaya dot/partikel di latar belakang, sangat pudar (opacity 10%).

### COLOR PALETTE
*   **Primary:** Midnight Blue (#1A237E)
*   **Secondary:** Void Gray (#0C0D12)
*   **Accent:** Cyan (#00BCD4)
*   **Highlight:** Starlight White (#F2F2F4)

### GSAP CHOREOGRAPHY
*   **Morphing Timeline:** Titik membesar (`scale`), meledak ringan (partikel), lalu digantikan oleh model 3D perangkat.
*   **Floating Labels:** Muncul dengan efek *spring* (`back.out(1.7)`) setelah model 3D terbentuk.
*   **Statistic Counter:** Angka menghitung cepat dari 0 ke miliar (GSAP `TextPlugin` atau `Snap` modifikasi).

### THREE.JS EXPERIENCE
*   **Object:** Model 3D Stylized (Glass & Metal) dari Laptop, Smartphone, Server.
*   **Material:** PBR Material. Layar perangkat memancarkan cahaya (Emissive material). Bodi perangkat terbuat dari *frosted glass*.
*   **Environment:** HDRI studio setup (high contrast).
*   **Floating:** Setiap objek mengambang independen dengan fase sinus yang berbeda (`Math.sin(time + offset)`).

### CAMERA DIRECTION
*   **Initial Camera:** Berada tepat di tengah kerumunan objek.
*   **Movement:** Kamera perlahan mundur (Dolly Out) untuk memperlihatkan skala bahwa ada banyak sekali perangkat.

### COMPONENTS
*   Centered Hero Headline
*   Statistic Counter (Big Numbers)
*   Floating Label (Glass)
*   3D Device Flock

### CUSTOM ICON SYSTEM
*   **Icon Dibutuhkan:** Smartwatch, Laptop, Smartphone, Server Tower.
*   **Style:** Liquid Glass, Rounded, Blue Cyan.

### ASSETS
*   **3D:** GLB models untuk Smartphone, Laptop, Tablet, Server. (Low-poly, baked normal, no textures - purely material driven).
*   **HDRI:** Studio lighting.

### IMPLEMENTATION NOTES
*   **Optimasi:** Model 3D perangkat harus sangat sederhana (< 5000 polygon per objek). Gunakan instancing jika jumlahnya lebih dari 10.

### QUALITY REVIEW
*   **Review:** Penggunaan model *glassmorphism* di dalam WebGL memberikan sentuhan modern khas presentasi produk teknologi tinggi. Pesan bahwa "internet adalah perangkat kita" tersampaikan dengan sangat elegan.

==================================================
## SCENE 08
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 08
*   **Judul:** Internet dalam Kehidupan Sehari-hari
*   **Tujuan Pembelajaran:** Menunjukkan aplikasi konkret dari infrastruktur jaringan (Apa gunanya kabel dan perangkat tadi?).
*   **Estimasi Durasi:** 35 detik
*   **Emosi Audiens:** Familiar & Relevan.
*   **Expected Wow Moment:** Ikon-ikon aplikasi terkenal terbentuk dari partikel cahaya yang ditarik dari perangkat.

### LEARNING EXPERIENCE
*   **Hook:** "Lalu, data apa yang mengalir di dalam perangkat ini?"
*   **Cerita:** Internet bukan sekadar teknologi, melainkan fondasi gaya hidup modern kita (Sosial, Hiburan, Edukasi, Belanja).
*   **Visualisasi:** Aliran data dari perangkat memproyeksikan logo/ikon layanan sehari-hari.
*   **Penjelasan:** Setiap kali kita membuka aplikasi, kita "meminta" data ke server aplikasi tersebut melalui internet.
*   **Contoh Nyata:** Streaming Netflix, scroll Instagram, pesan Gojek.
*   **Aha Moment:** "Website/Aplikasi adalah 'wajah' dari data yang dikirim lewat internet."

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Objek perangkat keras memancarkan layar/hologram ikon software.
*   **Apa arti perubahan tersebut:** Transisi dari layer Hardware/Infrastruktur ke layer Aplikasi/Software.
*   **Mengapa memudahkan pemahaman:** Mahasiswa tidak peduli dengan server, mereka peduli dengan Instagram. Scene ini menghubungkan infrastruktur ke hal yang mereka pedulikan.

### HERO OBJECT EVOLUTION
*   Node perangkat memproyeksikan aktivitas nyata.
*   Visualisasi: Logo-logo raksasa terbuat dari kaca (Glass) mengambang: WhatsApp, Instagram, YouTube, Shopee, Tokopedia.
*   Semua aplikasi ini terlihat menyedot partikel data dari jaringan.
*   **Makna:** Semua aplikasi modern sepenuhnya bergantung pada aliran data internet. Tanpa internet, aplikasi ini hanya cangkang kosong.

### UI EXPERIENCE
*   **Layout:** Masonry atau Grid melayang (Floating Grid) yang organik.
*   **White Space:** Sangat luas. Warna background lebih terang dari sebelumnya.
*   **Glass Panel:** Panel deskripsi melayang di samping setiap kategori (Misal: "E-Commerce", "Social Media").
*   **Typography:** Label menggunakan font *Geist* dengan *tracking* lebar (uppercase).

### BACKGROUND EXPERIENCE
*   **Background Type:** Lifestyle Digital.
*   **Detail:** Transisi halus ke warna background yang lebih terang/putih. Ada efek *Mesh Gradient* (Liquid gradient) berwarna putih, biru langit, dan abu-abu terang bergerak di latar.

### COLOR PALETTE
*   **Primary:** Pearl White (#FFFFFF)
*   **Secondary:** Off-White (#F8F9FA)
*   **Accent:** Sky Blue (#40C4FF)
*   **Glass Tint:** rgba(255, 255, 255, 0.6) (Light mode glass)

### GSAP CHOREOGRAPHY
*   **Transition:** Layar berubah dari gelap ke terang (Invert warna dramatis).
*   **Icon Reveal:** Ikon aplikasi muncul dengan rotasi sumbu Y 180 derajat dan *scale* dari 0 ke 1 (Pop up).
*   **Hover:** Jika presentasi interaktif, kursor diarahkan ke logo akan membuat logo tersebut menyala sesuai brand color aslinya secara subtle di material kaca.

### THREE.JS EXPERIENCE
*   **Object:** Ikon 3D ekstrusi logo-logo aplikasi.
*   **Material:** *Dispersion/Refraction material*. Material kaca premium seperti kristal swarovski. Cahaya dari mesh gradient di belakang dibiaskan melalui ikon-ikon ini.
*   **Lighting:** Global illumination cerah.
*   **Shader:** *Chromatic aberration* pada sisi kaca untuk efek prisma pelangi tipis.

### CAMERA DIRECTION
*   **Movement:** Panning perlahan secara horizontal melintasi "galeri" logo aplikasi.

### COMPONENTS
*   3D Extruded Logo (WhatsApp, IG, dll)
*   Category Floating Labels
*   Mesh Gradient Background (CSS/WebGL)

### CUSTOM ICON SYSTEM
*   **Style:** Brand logos, tapi dirender ulang dalam material Liquid Glass tembus pandang.

### ASSETS
*   **SVG/3D:** Vector path logo IG, YouTube, dll untuk diekstrusi di Three.js.
*   **Shader:** Liquid Mesh Gradient shader.

### IMPLEMENTATION NOTES
*   **Tantangan:** Material dispersi/refraksi kaca sangat berat (gpu-intensive).
*   **Optimasi:** Gunakan `MeshTransmissionMaterial` dari *drei* dengan resolusi terukur, atau *baked environmental map* terang.

### QUALITY REVIEW
*   **Review:** Transisi dari gelap (luar angkasa/infrastruktur) ke terang (dunia aplikasi/lifestyle) adalah *pacing* presentasi yang cerdas untuk membangunkan kembali audiens.

==================================================
## SCENE 09
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 09
*   **Judul:** Kesimpulan Internet
*   **Tujuan Pembelajaran:** Mensintesis semua penjelasan menjadi satu pemahaman utuh: Internet adalah jaringan global yang menghubungkan miliaran perangkat keras untuk menjalankan berbagai aplikasi perangkat lunak.
*   **Estimasi Durasi:** 25 detik
*   **Emosi Audiens:** Megah (Awe) & Mengerti.
*   **Expected Wow Moment:** Seluruh jaringan menyusut dan membungkus sebuah bola dunia yang bersinar.

### LEARNING EXPERIENCE
*   **Cerita & Kesimpulan:** Menggabungkan poin 1 (Kabel/Server), poin 2 (Perangkat kita), dan poin 3 (Aplikasi).
*   **Visualisasi:** Camera Zoom Out ekstrem. Semua logo, laptop, server mengecil dan berubah kembali menjadi node bercahaya, yang semuanya membalut sebuah planet bumi.
*   **Aha Moment:** "Jadi internet = infrastruktur fisik + perangkat kita + data aplikasi."
*   **Transisi:** Globe memudar ke warna gelap pekat, bersiap memperkenalkan "Jendela" menuju dunia ini (Browser).

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Menyortir kembali detail menjadi "Big Picture".
*   **Apa arti perubahan tersebut:** Kesimpulan. Menyatukan semua elemen ke dalam konteks global (Bumi).

### HERO OBJECT EVOLUTION
*   Seluruh node, perangkat, dan logo bergabung.
*   Membentuk satu jaringan dunia (Earth Hologram yang dibalut jaring-jaring cahaya).
*   **Makna:** Gambaran utuh dari World Wide Web.

### UI EXPERIENCE
*   **Layout:** Centered. Fokus total pada Globe 3D di tengah.
*   **Hero Area:** Judul "The World Wide Web".
*   **Content Area:** Quote/Kesimpulan singkat dengan tipografi serif elegan (*Cinzel Decorative*).
*   **Negative Space:** Maksimal. Seluruh UI di-hide kecuali Kesimpulan.

### BACKGROUND EXPERIENCE
*   **Background Type:** Earth From Space / Starfield.
*   **Detail:** Ruang angkasa yang dalam dengan bintang-bintang halus dan cahaya aurora biru di ujung bumi.

### COLOR PALETTE
*   **Primary:** Dark Space (#020205)
*   **Accent:** Aurora Blue (#00B4D8)
*   **Highlight:** Glowing Gold (#FFD700) - untuk garis khatulistiwa atau highlight jaringan utama.

### GSAP CHOREOGRAPHY
*   **UI Sweep:** Seluruh UI dari Scene 08 tersapu bersih (`opacity: 0`, `y: -50`).
*   **Text Reveal:** Teks kesimpulan muncul kata per kata (`stagger: 0.2`, blur filter).

### THREE.JS EXPERIENCE
*   **Object:** Globe 3D dengan dot-dot instanced matrix + Garis lengkung koneksi mengitari bumi.
*   **Material:** Earth shader (Hitam/Transparan dengan outline benua bercahaya cyan).
*   **Bloom:** Sangat kuat di area titik persimpangan jaringan (kota-kota besar).
*   **Camera:** Kamera mundur perlahan tanpa henti selama scene berlangsung (Continuous Zoom Out).

### CAMERA DIRECTION
*   **Initial Camera:** Sangat dekat dengan jaringan.
*   **Movement:** Tarik mundur ekstrem untuk memperlihatkan bumi.
*   **Exit Camera:** Zoom in cepat melesat ke salah satu benua hingga menembus masuk ke "layar" yang menyala.

### COMPONENTS
*   Centered Quote
*   Holographic Earth (Three.js)

### CUSTOM ICON SYSTEM
*   Tidak ada ikon UI. Pure Cinematic 3D.

### ASSETS
*   **3D/Texture:** Earth topology/satellite map (hitam putih) untuk didrive ke shader.
*   **Audio:** Suara "Whoosh" kosmik dan pad musik yang megah.

### IMPLEMENTATION NOTES
*   Gunakan library `three-globe` atau buat custom shader dot-globe untuk performa terbaik.

### QUALITY REVIEW
*   **Review:** Memberikan efek epik dan penutupan *chapter* yang sangat emosional. Standar presentasi *keynote* internasional tercapai.

==================================================
## SCENE 10
==================================================

### IDENTITAS SCENE
*   **Nomor Scene:** 10
*   **Judul:** Apa itu Browser?
*   **Tujuan Pembelajaran:** Memisahkan konsep "Internet" (infrastruktur) dengan "Browser" (Software pembaca).
*   **Estimasi Durasi:** 35 detik
*   **Emosi Audiens:** Berfokus & Siap menjelajah.
*   **Expected Wow Moment:** Transisi mulus dari partikel cahaya di internet (Scene 09) yang berkumpul dan membentuk antarmuka kaca sebuah Browser Window 3D.

### LEARNING EXPERIENCE
*   **Hook:** "Internet sangat luas dan berisi triliunan data mentah. Bagaimana mata manusia bisa membacanya?"
*   **Analogi:** Internet adalah saluran sinyal TV, sedangkan Browser adalah Pesawat TV-nya. Tanpa TV, sinyal tersebut tidak terlihat.
*   **Visualisasi:** Kode mentah (1 dan 0, tag HTML abstrak) terbang menabrak sebuah bingkai kaca, dan seketika berubah menjadi halaman visual yang indah di baliknya.
*   **Penjelasan:** Browser (Chrome, Safari) adalah *penerjemah* (Translator). Mengubah kode bahasa mesin menjadi tampilan grafis.
*   **Aha Moment:** "Oh... jadi Browser itu seperti kacamata ajaib penerjemah kode."
*   **Transisi:** Kamera berfokus ke bingkai Browser, siap untuk menjelaskan komponen di dalamnya.

### LEARNING VISUALIZATION ENGINE
*   **Mengapa objek berubah:** Partikel data internet menyatu membentuk objek berstruktur kotak (Window).
*   **Apa arti perubahan tersebut:** Transisi dari "Jaringan (Bebas)" menuju "Aplikasi Client (Terstruktur)".
*   **Mengapa memudahkan pemahaman:** Memberikan batas visual yang jelas (Frame Browser) bahwa kita sekarang melihat sesuatu *melalui* sebuah alat.

### HERO OBJECT EVOLUTION
*   Crystal digital dari internet masuk dan membentuk struktur *Browser Window* (Chrome/Safari bergaya abstrak glass).
*   Browser mulai "merender" kode (partikel hijau/biru) menjadi bentuk blok (Website).
*   **Makna:** Browser merakit raw data menjadi visual.

### UI EXPERIENCE
*   **Layout:** 3D Object di tengah, Penjelasan UI di sisi kiri.
*   **Browser Mockup:** Sebuah mockup UI 3D melayang. Tidak menggunakan UI macOS/Windows asli, tapi UI "Holo-display" minimalis (Tiga titik di kiri atas, sebuah URL bar tipis bercahaya, canvas kosong).
*   **Floating Label:** Label UI menunjuk ke "URL Bar" dan "Render Engine" dari model 3D browser tersebut.
*   **Visual Hierarchy:** Mockup Browser > Judul > Penjelasan.

### BACKGROUND EXPERIENCE
*   **Background Type:** Premium Browser Workspace.
*   **Detail:** Gradien radial biru gelap ke hitam. Sangat halus dan bersih. Ruang kerja tanpa gangguan.

### COLOR PALETTE
*   **Primary:** Pearl White (#FFFFFF - pada bingkai browser)
*   **Secondary:** Glass Cyan (Tembus pandang, kebiruan)
*   **Accent:** Accent Biru Chrome/Logo Browser.

### GSAP CHOREOGRAPHY
*   **Formation:** Partikel dari Scene 09 tersedot ke satu titik tengah, lalu meledak menyusun bingkai 3D Browser Window (Animasi bentuk/ScaleX dan ScaleY dari titik 0).
*   **Code Fall:** Angka biner dan teks kode mengalir turun (seperti Matrix, tapi bersih/putih) ke dalam browser, dan saat menyentuh dasar browser memantul dan berubah warna.
*   **UI Fade In:** Teks panel penjelasan muncul perlahan setelah browser terbentuk stabil.

### THREE.JS EXPERIENCE
*   **Object:** Bingkai *Rounded Rectangle* tebal terbuat dari kaca (Browser Mockup).
*   **Material:** `MeshPhysicalMaterial` dengan ketebalan tinggi (Tebal, pinggiran bersinar/refraktif).
*   **Particles:** Kode mengalir menggunakan instanced text (Sangat canggih) atau sekadar tekstur berjalan pada sebuah plane di belakang kaca browser.
*   **Reflection:** Kaca browser memantulkan cahaya studio tersembunyi.

### CAMERA DIRECTION
*   **Initial Camera:** Sedikit menyamping untuk memperlihatkan ketebalan kaca 3D Browser (Isometric 3D Look).
*   **Movement:** Orbit perlahan ke depan (Frontal view) agar penonton bisa "melihat" ke dalam layar browser.

### COMPONENTS
*   3D Glass Browser Window (Hero)
*   Code Stream Visualization
*   UI Info Cards (Kiri layat)
*   Chapter Indicator (Bab 3: Mengenal Browser)

### CUSTOM ICON SYSTEM
*   **Icon Dibutuhkan:** Translator, Eye (Visual), Chrome/Safari logo abstract.
*   **Style:** Glassmorphism, 3D relief.

### ASSETS
*   **3D:** Model Browser Window minimalis.
*   **Texture:** Font texture untuk angka/kode.

### IMPLEMENTATION NOTES
*   **Tantangan:** Membuat efek kaca di atas kode yang bergerak butuh pengaturan *render order* yang presisi di Three.js (Transparent objects on top of other objects).
*   **Optimasi:** Jika teks berjatuhan terlalu berat, ganti dengan tekstur video dengan alpha channel atau shader *scrolling UV*.

### QUALITY REVIEW
*   **Review:** Mengubah "browser" yang biasa-biasa saja menjadi objek "Holographic Glass" epik akan sangat menarik perhatian. Konsep "penerjemah" tersampaikan secara kuat dengan visual kode berubah menjadi grafik. Sangat elegan.

==================================================
// END OF SCENE 06-10 PRODUCTION MANUAL
// WAITING FOR APPROVAL
==================================================
