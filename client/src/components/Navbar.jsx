import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleHomeClick = e => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <nav className="bg-[#b47750] p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-black">
        <div className="text-2xl font-bold pl-2.5">
          <Link to="/" onClick={handleHomeClick} className="flex items-center">
            <img
              src="/assets/icon/logo.svg"
              alt="Logo"
              className="h-9 aspect-auto ml-1"
            />
          </Link>
        </div>
        <div className="space-x-11 text-white [&_a]:text-[14px] [&_a]:transition-colors [&_a]:duration-300 [&_a:hover]:text-[#85a3cc]">
          <Link to="/" onClick={handleHomeClick}>
            Beranda
          </Link>
          <a href="/#koleksi">Koleksi</a>
          <a href="/#lokasi">Lokasi</a>
          <Link to="/galeri">Galeri</Link>
          <Link to="/tentang">Tentang</Link>
        </div>
      </div>
    </nav>
  )
}
