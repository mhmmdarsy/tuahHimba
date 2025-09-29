import React from 'react'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef(null)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    requestAnimationFrame(() => {
      el.classList.remove('blur-md')
      el.classList.remove('opacity-0')
      el.classList.add('opacity-100')
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-cover bg-center content blur-md opacity-1 transition-all duration-500" style={{ backgroundImage: `url('/assets/images/tampak_depan1.jpg')`, height: 680 }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      <div className="absolute inset-0 flex justify-center items-center text-white pl-20 pt-[350px]">
        <div>
          <h1 className="text-5xl font-bold mb-3">Museum Kayu Tuah Himba</h1>
          <p className="mb-3 pr-50">Museum Kayu Tuah Himba adalah museum yang terletak di Tenggarong, Kalimantan Timur, Indonesia. Museum ini adalah tempat untuk menyimpan berbagai jenis kayu yang ada di Kalimantan Timur.</p>
          <a href="#sejarah" className="bg-zinc-50 text-black px-6 py-2.5 rounded-lg shadow-lg hover:bg-gray-300 transition inline-flex items-center space-x-2 text-base">
            <span>Sejarah</span>
            <img src="/assets/icon/Arrow1.svg" alt="Icon" className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

