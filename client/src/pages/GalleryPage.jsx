import React, { useEffect, useMemo, useState } from 'react'
import BentoGrid from '../components/BentoGrid'

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
    return () => {
      alive = false
    }
  }, [apiBase])

  const masonryItems = useMemo(
    () =>
      items.map((it, idx) => ({
        id: it.gambar || String(idx),
        img: `/assets/images/${it.gambar}`,
        url: `/assets/images/${it.gambar}`,
        height: 600
      })),
    [items]
  )

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">Galeri</h1>
        <p className="text-gray-700 mb-8">Semua karya yang ada di Museum Kayu Tuah Himba.</p>

        {error && <div className="text-red-600 mb-6">{error}</div>}

        {masonryItems.length > 0 ? (
          <BentoGrid
            items={masonryItems}
            overlay
            overlayClassName="bg-gradient-to-tr from-violet-500/30 to-fuchsia-500/30"
            overlayHoverOpacityClass="group-hover:opacity-40"
          />
        ) : !error ? (
          <div className="text-gray-600">Belum ada data galeri.</div>
        ) : null}
      </div>
    </main>
  )
}
