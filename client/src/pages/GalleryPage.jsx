import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function GalleryPage() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const load = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5174'
        const res = await fetch(`${apiBase}/api/koleksi`)
        if (!res.ok) throw new Error('Failed to fetch koleksi')
        const data = await res.json()
        setItems(data)
      } catch (_) {
        setItems([
          { id: 1, judul: 'Ulin', gambar: 'ulin.jpg' },
          { id: 2, judul: 'Meranti', gambar: 'meranti.jpg' },
          { id: 3, judul: 'Bayur', gambar: 'bayur.jpg' },
          { id: 4, judul: 'Cempedak', gambar: 'cempedak.jpg' },
          { id: 5, judul: 'Durian', gambar: 'durian.jpg' },
          { id: 6, judul: 'Nyatoh', gambar: 'nyatoh.jpg' }
        ])
      }
    }
    load()
  }, [])
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">Galeri</h1>
        <p className="text-gray-700 mb-8">Kumpulan foto terkait Museum Kayu Tuah Himba.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(it => (
            <Link key={it.id} to={`/deskripsi/${it.id}`} className="block">
              <img src={`/assets/images/${it.gambar}`} alt={it.judul} className="w-full h-64 object-cover rounded-lg shadow" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

