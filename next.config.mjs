/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './', // Tambahkan ini untuk mendukung path relatif
  images: {
    unoptimized: true, // Nonaktifkan optimisasi gambar jika menggunakan `next/image`
  },
};
export default nextConfig;