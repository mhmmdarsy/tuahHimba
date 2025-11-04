import React, { useEffect, useState } from 'react'

export default function GalleryPage() {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5174'

  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        const res = await fetch(`${apiBase}/api/galeri`)
        if (!alive) return
        if (!res.ok) throw new Error('not-ok')
        const data = await res.json()
        setItems(data)
        setError('')
      } catch (_) {
        setError('Gagal memuat galeri')
      }
    }
    load()
    return () => { alive = false }
  }, [apiBase])

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">Galeri</h1>
        <p className="text-gray-700 mb-8">Semua karya yang ada di Museum Kayu Tuah Himba.</p>

        {error && (
          <div className="text-red-600 mb-6">{error}</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.id} className="block">
              <img
                src={`/assets/images/${it.gambar}`}
                alt={it.judul}
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg shadow"
              />
              <figcaption className="mt-2 text-sm text-gray-600">{it.judul}</figcaption>
            </figure>
          ))}
          {!error && items.length === 0 && (
            <div className="text-gray-600">Belum ada data galeri.</div>
          )}
        </div>
      </div>
    </main>
  )
}