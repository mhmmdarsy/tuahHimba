import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function Koleksi() {
  const [items, setItems] = useState([])
  const swiperRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const load = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5174'
        const res = await fetch(`${apiBase}/api/koleksi`)
        if (!res.ok) throw new Error('Failed to fetch koleksi')
        const data = await res.json()
        setItems(data)
      } catch (e) {
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

  useEffect(() => {
    if (items.length === 0) return
    if (swiperRef.current) {
      try { swiperRef.current.destroy(true, true) } catch { /* noop */ }
    }
    swiperRef.current = new Swiper('.mySwiper', {
      modules: [Navigation],
      slidesPerView: 1.5,
      spaceBetween: 20,
      loop: false,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: { 640: { slidesPerView: 1.5 }, 1024: { slidesPerView: 3 } }
    })
    return () => {
      if (swiperRef.current) {
        try { swiperRef.current.destroy(true, true) } catch { /* noop */ }
      }
    }
  }, [items])

  return (
    <section id="koleksi" className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-start mt-3 px-30">
        <h2 className="text-5xl font-extrabold mb-4">Koleksi</h2>
        <div className="w-full py-2 bg-cover bg-center">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {items.map((it) => (
                <div key={it.id} className="swiper-slide rounded-xl overflow-hidden shadow-lg relative cursor-pointer" onClick={() => navigate(`/deskripsi/${it.id}`)}>
                  <img src={`/assets/images/${it.gambar}`} className="w-full h-60 object-cover" alt={it.judul} />
                  <div className="text-white text-xl font-semibold p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent absolute bottom-0 w-full">
                    <p>{it.judul}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-button-next p-2 rounded-full"></div>
            <div className="swiper-button-prev p-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
