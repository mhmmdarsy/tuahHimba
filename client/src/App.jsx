import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => (
  <nav className="bg-[#b47750] p-4 fixed top-0 left-0 w-full z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center text-black">
      <div className="text-2xl font-bold pl-2.5">
        <a href="#" className="flex items-center">
          <img src="/assets/icon/logo.svg" alt="Logo" className="h-9 aspect-auto ml-1" />
        </a>
      </div>
      <div className="space-x-10" style={{ fontSize: 14 }}>
        <a href="#koleksi" className="hover:text-[#85a3cc] hover:font-semibold transition-all text-white">Koleksi</a>
        <a href="#lokasi" className="hover:text-gray-400 hover:font-semibold transition-all text-white">Lokasi</a>
        <a href="#tentang" className="hover:text-gray-400 hover:font-semibold transition-all text-white">Tentang</a>
      </div>
    </div>
  </nav>
)

const Hero = () => {
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
    <section ref={sectionRef} className="relative bg-cover bg-center content blur-md opacity-0 transition-all duration-500" style={{ backgroundImage: `url('/assets/images/tampak_depan1.jpg')`, height: 680 }}>
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

const Sejarah = () => (
  <section id="sejarah" className="py-16 px-6">
    <div className="max-w-7xl mx-auto text-start mt-3 px-30">
      <h2 className="text-7xl font-extrabold mb-4">Sejarah</h2>
      <p className="text-gray-700 text-justify mb-5">
        Museum Kayu Tuah Himba menjadi salah satu destinasi wisata edukasi yang menyimpan berbagai koleksi kayu dan fosil alam. Museum ini mulai dibangun pada 1 Januari 1994 dan resmi dibuka untuk umum pada 25 September 1996, bertepatan dengan peringatan Hari Jadi ke-214 Kota Tenggarong. Pendirian museum ini dilatarbelakangi oleh maraknya kerusakan hutan yang terjadi di Kalimantan Timur, khususnya di Kutai Kartanegara. Untuk itu, Pemerintah Daerah membangun museum ini sebagai bentuk edukasi dan pelestarian terhadap berbagai jenis kayu yang semakin langka.
      </p>
      <p className="text-gray-700 text-justify">
        Nama Museum Kayu Tuah Himba sendiri memiliki makna filosofis berdasarkan bahasa Kutai. "Museum Kayu" disebut sebagai "Odah", yang berarti tempat untuk menyimpan berbagai jenis kayu. Kata "Tuah" memiliki arti sakti, keramat, serta membawa berkah dan keberuntungan. Sementara itu, "Himba" berarti hutan dalam bahasa Kutai, yang mencerminkan tujuan museum ini sebagai tempat pelestarian hutan dan kayu.
      </p>
    </div>
  </section>
)

const Koleksi = () => {
  const [items, setItems] = useState([])
  const swiperRef = useRef(null)

  useEffect(() => {
    const load = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5174'
        const res = await fetch(`${apiBase}/api/koleksi`)
        if (!res.ok) throw new Error('Failed to fetch koleksi')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        // fallback to static items if API not available
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
      swiperRef.current.destroy(true, true)
    }
    // Initialize Swiper from global
    // eslint-disable-next-line no-undef
    swiperRef.current = new Swiper('.mySwiper', {
      slidesPerView: 1.5,
      spaceBetween: 20,
      loop: false,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: { 640: { slidesPerView: 1.5 }, 1024: { slidesPerView: 3 } }
    })
    return () => {
      if (swiperRef.current) swiperRef.current.destroy(true, true)
    }
  }, [items])

  return (
    <section id="koleksi" className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-start px-30">
        <h2 className="text-7xl font-extrabold mb-4">Koleksi</h2>
        <div className="w-full px-4 py-8 bg-cover bg-center">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {items.map((it) => (
                <div key={it.id} className="swiper-slide rounded-xl overflow-hidden shadow-lg relative">
                  <a href={`/assets/images/${it.gambar}`} target="_blank" rel="noreferrer">
                    <img src={`/assets/images/${it.gambar}`} className="w-full h-60 object-cover" alt={it.judul} />
                    <div className="text-white text-xl font-semibold p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent absolute bottom-0 w-full">
                      <p>{it.judul}</p>
                    </div>
                  </a>
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

const Lokasi = () => (
  <section id="lokasi" className="py-16 px-6">
    <div className="max-w-7xl mx-auto text-start px-30">
      <h2 className="text-7xl font-extrabold mb-4">Lokasi</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.871856575975!2d116.96704237080809!3d-0.40638164390839976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6655027b3b263%3A0x3425cd2e96bc3b7f!2sMuseum%20Kayu!5e0!3m2!1sen!2sid!4v1746891862589!5m2!1sen!2sid" width="1000" height="600" style={{ border: 0, borderRadius: 8 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
)

const Footer = () => (
  <footer id="tentang" className="bg-blue-950 text-white py-15">
    <div className="max-w-7xl mx-auto flex self-start text-left">
      <img src="/assets/images/lambang_kukar.png" alt="Museum Kayu" className="rounded-lg mr-6 self-start" style={{ width: '80%', maxWidth: 100 }} />
      <div>
        <h3 className="text-2xl font-bold mb-4">PEMERINTAH KABUPATEN KUTAI KARTANEGARA</h3>
        <div className="flex space-x-50">
          <div>
            <p className="mb-2 font-bold text-lg">Terhubung</p>
            <p className=" text-sm">Email :</p>
            <p className="mb-4"><a href="mailto:diskominfo@mail.kukarkab.go.id" className="text-white hover:underline text-sm">diskominfo@mail.kukarkab.go.id</a></p>
            <p className="text-sm">Alamat :</p>
            <p className="mb-4 text-sm">Jalan Pahlawan No.1 Timbau Tenggarong</p>
            <p className="text-sm">Telepon :</p>
            <p className="mb-4 text-sm">(+62) 541 661350</p>
            <p className="text-sm">Fax :</p>
            <p className="mb-4 text-sm">(+62) 541 664507</p>
          </div>
          <div>
            <p className="mb-2 font-bold text-lg">Link Terkait</p>
            <div className="flex space-x-20">
              <a href="https://bapenda.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Bapenda</a>
              <a href="https://bappeda.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Bappeda</a>
              <a href="https://disdikbud.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Disdikbud</a>
            </div>
            <div className="flex space-x-20 pt-2">
              <a href="https://diskominfo.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Diskominfo</a>
              <a href="https://dpmptsp.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">DPMPTSP</a>
              <a href="https://prokom.kukarkab.go.id/" target="_blank" className="text-white hover:underline w-32 text-sm" rel="noreferrer">Sekretariat Daerah</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-white mt-5 mx-40"></div>
    <div className="flex justify-center mt-5">
      <p>&copy; 2021 Kabupaten Kutai Kartanegara. All Rights Reserved</p>
    </div>
  </footer>
)

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sejarah />
      <Koleksi />
      <Lokasi />
      <Footer />
    </div>
  )
}

