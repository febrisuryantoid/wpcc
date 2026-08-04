const fs = require('fs');

let data = fs.readFileSync('src/story/data.ts', 'utf8');

data = data.replace(
  "    supportingSentence: \"Website untuk membangun identitas perusahaan.\",\n    backgroundExperience: { colorWorld: '#0F172A' },",
  "    supportingSentence: \"Website untuk membangun identitas perusahaan.\",\n    topImage: \"https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&h=900&fit=crop\",\n    backgroundExperience: { colorWorld: '#0F172A' },"
);

data = data.replace(
  "    supportingSentence: \"Website yang fokus pada promosi dan konversi.\",\n    backgroundExperience: { colorWorld: '#0F172A' },",
  "    supportingSentence: \"Website yang fokus pada promosi dan konversi.\",\n    topImage: \"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop\",\n    backgroundExperience: { colorWorld: '#0F172A' },"
);

data = data.replace(
  "    supportingSentence: \"Menjual produk dan menerima pesanan secara online.\",\n    backgroundExperience: { colorWorld: '#0F172A' },",
  "    supportingSentence: \"Menjual produk dan menerima pesanan secara online.\",\n    topImage: \"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop\",\n    backgroundExperience: { colorWorld: '#0F172A' },"
);

data = data.replace(
  "    supportingSentence: \"Platform pembelajaran digital.\",\n    backgroundExperience: { colorWorld: '#0F172A' },",
  "    supportingSentence: \"Platform pembelajaran digital.\",\n    topImage: \"https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&h=900&fit=crop\",\n    backgroundExperience: { colorWorld: '#0F172A' },"
);

data = data.replace(
  "    supportingSentence: \"Menampilkan karya dan pengalaman profesional.\",\n    backgroundExperience: { colorWorld: '#0F172A' },",
  "    supportingSentence: \"Menampilkan karya dan pengalaman profesional.\",\n    topImage: \"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1600&h=900&fit=crop\",\n    backgroundExperience: { colorWorld: '#0F172A' },"
);

data = data.replace(
  "    supportingSentence: \"Menyajikan informasi dan berita kepada masyarakat.\",\n    backgroundExperience: { colorWorld: '#0F172A' },",
  "    supportingSentence: \"Menyajikan informasi dan berita kepada masyarakat.\",\n    topImage: \"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=900&fit=crop\",\n    backgroundExperience: { colorWorld: '#0F172A' },"
);

fs.writeFileSync('src/story/data.ts', data);
