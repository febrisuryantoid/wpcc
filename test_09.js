const fs = require('fs');
const helper = fs.readFileSync('src/story/utils/pointHelper.tsx', 'utf8');
const points = [
  "43%+ Web Dunia (Memberdayakan lebih dari 43% dari seluruh website yang ada di internet saat ini)",
  "Open Source (Bebas digunakan, dimodifikasi, dan dikembangkan oleh siapa saja secara gratis)",
  "Ekosistem Luas (Memiliki puluhan ribu tema visual dan plugin fitur yang siap digunakan)",
  "Fleksibilitas Tinggi (Satu platform untuk semua jenis web, mulai dari blog pribadi hingga toko online global)"
];
for(const p of points) {
  const match = p.match(/^(.*?)\s*\((.*)\)$/);
  console.log(match ? match[1] : 'no');
}
