import React from 'react'

export default function GalleryPage() {
  const base = (import.meta && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/'
  const galleryFiles = [
    'alatdapur.jpg',
    'alatkayu.jpg',
    'alatkayu2.jpg',
    'biawak.jpg',
    'buaya.jpg',
    'contohkayu.jpg',
    'gaharu.jpg',
    'jenisrotan.jpg',
    'kayu1.jpg',
    'kayu2.jpg',
    'kayu3.jpg',
    'kayu4.jpg',
    'kayu5.jpg',
    'kayu6.jpg',
    'kayu7.jpg',
    'kayu8.jpg',
    'kayu9.jpg',
    'kucinghutan.jpg',
    'lamin.jpg',
    'obat1.jpg',
    'obat2.jpg',
    'overview.jpg',
    'overview2.jpg',
    'overview3.jpg',
    'overview4.jpg',
    'overview5.jpg',
    'overview6.jpg',
    'overview7.jpg',
    'patung.jpg',
    'patung2.jpg',
    'patung3.jpg',
    'rotan.jpg',
    'rotan2.jpg',
    'rotan3.jpg',
    'rotan4.jpg',
    'rotan5.jpg',
    'rotan6.jpg',
    'rumahadat.jpg',
    'rumahadat2.jpg',
    'rumahadat3.jpg',
    'rumahadat4.jpg'
  ]

  const prettify = (name) => name
    .replace(/\.jpg|\.jpeg|\.png|\.webp|\.gif/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">Galeri</h1>
        <p className="text-gray-700 mb-8">Semua gambar dari folder gallery.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryFiles.map((file) => (
            <figure key={file} className="block">
              <img
                src={`${base}assets/images/gallery/${file}`}
                alt={prettify(file)}
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg shadow"
              />
              <figcaption className="mt-2 text-sm text-gray-600">{prettify(file)}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  )
}
