import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5174'
        const res = await fetch(`${apiBase}/api/koleksi/${id}`)
        if (!res.ok) throw new Error('not-ok')
        const data = await res.json()
        setItem(data)
      } catch (_) {
        const fallback = [
          { id: 1, judul: 'Ulin', gambar: 'ulin.jpg', deskripsi: '<p>Kayu ulin adalah ...</p>' },
          { id: 2, judul: 'Meranti', gambar: 'meranti.jpg', deskripsi: '<p>Kayu meranti adalah ...</p>' },
          { id: 3, judul: 'Bayur', gambar: 'bayur.jpg', deskripsi: '<p>Kayu bayur adalah ...</p>' },
          { id: 4, judul: 'Cempedak', gambar: 'cempedak.jpg', deskripsi: '<p>Kayu cempedak adalah ...</p>' },
          { id: 5, judul: 'Durian', gambar: 'durian.jpg', deskripsi: '<p>Kayu durian adalah ...</p>' },
          { id: 6, judul: 'Nyatoh', gambar: 'nyatoh.jpg', deskripsi: '<p>Kayu nyatoh adalah ...</p>' }
        ].find(x => String(x.id) === String(id))
        if (fallback) setItem(fallback)
        else setError('Data tidak ditemukan')
      }
    }
    load()
  }, [id])

  if (error) return <main className="pt-24 pb-16 px-6"><div className="max-w-7xl mx-auto">{error}</div></main>
  if (!item) return <main className="pt-24 pb-16 px-6"><div className="max-w-7xl mx-auto">Memuat...</div></main>

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-start mt-3 px-30">
        <div className="flex items-start space-x-6 pt-4">
          <img src={`/assets/images/${item.gambar}`} alt={item.judul} className="w-1/3 rounded-lg shadow-lg object-cover" style={{ aspectRatio: '2/3' }} />
          <div className="flex flex-col space-y-5 text-black text-justify">
            <h2 className="text-7xl font-extrabold mb-4">{item.judul}</h2>
            <div dangerouslySetInnerHTML={{ __html: item.deskripsi || '' }} />
          </div>
        </div>
        {String(id) === '1' && (
          <img src="/assets/images/ulin2.jpg" alt="Ulin" className="w-full mt-10 rounded-lg shadow-lg" />
        )}
      </div>
    </main>
  )
}

