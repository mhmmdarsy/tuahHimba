import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-[#b47750] p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-black">
        <div className="text-2xl font-bold pl-2.5">
          <Link to="/" className="flex items-center">
            <img src="/assets/icon/logo.svg" alt="Logo" className="h-9 aspect-auto ml-1" />
          </Link>
        </div>
        <div className="space-x-10" style={{ fontSize: 14 }}>
          <Link to="/" className="hover:text-[#85a3cc] hover:font-semibold transition-all text-white">Beranda</Link>
          <a href="/#koleksi" className="hover:text-[#85a3cc] hover:font-semibold transition-all text-white">Koleksi</a>
          <Link to="/galeri" className="hover:text-gray-400 hover:font-semibold transition-all text-white">Galeri</Link>
          <a href="/#lokasi" className="hover:text-gray-400 hover:font-semibold transition-all text-white">Lokasi</a>
          <Link to="/tentang" className="hover:text-gray-400 hover:font-semibold transition-all text-white">Tentang</Link>
        </div>
      </div>
    </nav>
  )
}

