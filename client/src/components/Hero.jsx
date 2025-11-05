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
      el.classList.add('opacity-300')
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center content blur-md opacity-1 transition-all duration-500 h-screen"
      style={{
        backgroundImage: `url('/assets/images/tampak_depan1.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

      <div className="relative z-10 flex items-end h-full text-white pb-18">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-4 pt-[70vh]">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            Museum Kayu Tuah Himba
          </h1>
          <p className="mb-4 md:pr-2 lg:mr-45">
            Museum Kayu Tuah Himba adalah museum yang terletak di Tenggarong, Kalimantan Timur,
            Indonesia. Museum ini adalah tempat untuk menyimpan berbagai jenis kayu yang ada di
            Kalimantan Timur.
          </p>
          <a
            href="#sejarah"
            className="bg-zinc-50 text-black px-6 py-2.5 rounded-lg shadow-lg hover:bg-gray-300 transition inline-flex items-center space-x-2 text-base"
          >
            <span>Sejarah</span>
            <img src="/assets/icon/Arrow1.svg" alt="Icon" className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
