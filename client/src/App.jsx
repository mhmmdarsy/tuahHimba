import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import DetailPage from './pages/DetailPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/deskripsi/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
