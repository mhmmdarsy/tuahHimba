import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let alive = true
    const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5174'

    const load = async () => {
      try {
        const res = await fetch(`${apiBase}/api/koleksi/${id}`)
        if (!alive) return
        if (res.ok) {
          const data = await res.json()
          setError('')
          setItem((prev) => {
            try {
              const same = prev && prev.id === data.id && prev.judul === data.judul && prev.gambar === data.gambar && prev.deskripsi === data.deskripsi
              return same ? prev : data
            } catch {
              return data
            }
          })
        } else if (res.status === 404) {
          setItem(null)
          setError('Data tidak ditemukan')
        } else {
          setError('Gagal memuat data')
        }
      } catch (_) {
        setError('Tidak dapat terhubung ke server')
      }
    }

    // first load
    setError('')
    setItem(null)
    load()

    // auto refresh every 10s
    const timer = setInterval(load, 10000)

    // refetch on tab focus/visible
    const onVisible = () => {
      if (document.visibilityState === 'visible') load()
    }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      alive = false
      clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisible)
    }
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
