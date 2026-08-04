const fs = require('fs');

// 1. Update data.ts
let dataContent = fs.readFileSync('src/story/data.ts', 'utf-8');
dataContent = dataContent.replace(/topImage:\s*"https:\/\/images.unsplash.com\/photo-1497215728101-856f4ea42174\?w=1600&h=900&fit=crop"/, 'topImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC6F0Uv5s8FIiNj6vYLSC0vCe6soHLM3NCPu4Uq9blq0-WqUK9utd2jjTx6IVrWVgQoQD_qBmnAcCFRDLkKmvtar8nwC3CRuTBY8_h-97Z_k_90-4Z-RYQ8a50CtHPOf0ilM2JYGGvblXHY55gEQJuKGYl4l2QP5-vLQfEMNm4hhLbuAPIrR12fPgp8a8/s1600/Website%20Company%20Profile.webp"');

dataContent = dataContent.replace(/topImage:\s*"https:\/\/images.unsplash.com\/photo-1460925895917-afdab827c52f\?w=1600&h=900&fit=crop"/, 'topImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidIbwYvvcrYUaqJPyk0mYp7pkkTgZ6vIBOpx-PSVx4SxrshisCq6rdt4zSCC-iAylVPx4H0TqusX_GmHNCf13oMBRFqdvxRLMVt_G5IeHeTRDJM_M9LiRI_jK_ovGIjqKCAUAFlqZUUHinfSHCbi7L49BNrQBvOwf1RzZVKBLeY08qhl_D_b5YgHSWEeo/s1600/Landing%20Page.webp"');

dataContent = dataContent.replace(/topImage:\s*"https:\/\/images.unsplash.com\/photo-1556742049-0cfed4f6a45d\?w=1600&h=900&fit=crop"/, 'topImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWCi8H7qSY6-g3v7iTsIGT99o1vM1VGIf-Iqzg05FIm2rL5J-Phyy1G42o5GDZk88T4eNpsHl5OuyjZSYo-xpjiWpa1UayHajtFu7rIA6iCPqlaRJufHloJzwpT3-gRZ0Q8PBf02xZgdnfOQuvd5e5rSNcztLXHPYr6W8lGzBwIHPmZK_Ma3BvX1wxWmQ/s1600/E-Commerce.webp"');

dataContent = dataContent.replace(/topImage:\s*"https:\/\/images.unsplash.com\/photo-1501504905252-473c47e087f8\?w=1600&h=900&fit=crop"/, 'topImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQblQzMCyYWKpeaIvKpEGRXi8LeMFHmKyZSY_s9VCaZ3iUrGk66ECqKuIW0bsfefe7XaZzB5qaFufwq_yeftCF4yUqqDsQ3Ks4JGSRviFbDdhJLDMw53j-r4xTjzRVFSwCq-3RCjdkH2vjZmWfAnHXVWxVDl1ijJ-UlIIzlMPmFBWcdZSNPDXM3Yqceo4/s1600/E-Learning.webp"');

dataContent = dataContent.replace(/topImage:\s*"https:\/\/images.unsplash.com\/photo-1522542550221-31fd19575a2d\?w=1600&h=900&fit=crop"/, 'topImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgthpYgqea4rxujp_3c7RlqXKva4ivVR8ZEBdWiLClVGq79wxPKJ02vTEmC5777fT9Yf_GuqtSTelQi9ijFzE5JRf23PCjqBb4ZY9v_z2PyiBUtd5UqYPKwcnvUX90wf6Gj9WQGs5N8xPIcOFUqo4hbqCfuRNt6Kp2JztvqftC7UjeJdfVXgIyBieDmFLU/s1600/Portfolio%20Website.webp"');

dataContent = dataContent.replace(/topImage:\s*"https:\/\/images.unsplash.com\/photo-1504711434969-e33886168f5c\?w=1600&h=900&fit=crop"/, 'topImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3zFoNcaPCKnyRwjgwJ2jU2cT0imfihSwWSRTxll8uyNcWqMl7KFyZ3HZrUlCEp7mAMnys3Y-ZlVaGqB5MGVo2QuZf7owZwFSDYrWp409CEEK1mLBl_o6shJFWw1ZHGTGjyhZwPTRq9h-F_TIHNqC9cuuW1RVEHtj4yI6l3w2llnp5RINN0V11jObNepY/s1600/Portal%20Berita.webp"');

fs.writeFileSync('src/story/data.ts', dataContent);

