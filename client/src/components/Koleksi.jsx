import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'

export default function Koleksi() {
  const [items, setItems] = useState([])
  const swiperRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    let alive = true
    const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5174'

    const shallowEqualList = (a = [], b = []) => {
      if (a.length !== b.length) return false
      for (let i = 0; i < a.length; i++) {
        const x = a[i],
          y = b[i]
        if (!x || !y) return false
        if (x.id !== y.id || x.judul !== y.judul || x.gambar !== y.gambar)
          return false
      }
      return true
    }

    const load = async () => {
      try {
        const res = await fetch(`${apiBase}/api/koleksi`)
        if (!alive) return
        if (!res.ok) throw new Error('Failed to fetch koleksi')
        const data = await res.json()
        setItems(prev => (shallowEqualList(prev, data) ? prev : data))
      } catch (e) {}
    }

    // initial load
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
  }, [])

  useEffect(() => {
    if (items.length === 0) return
    if (swiperRef.current) {
      try {
        swiperRef.current.destroy(true, true)
      } catch {
        /* noop */
      }
    }
    swiperRef.current = new Swiper('.mySwiper', {
      modules: [Navigation],
      slidesPerView: 1.5,
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: { 640: { slidesPerView: 1.5 }, 1024: { slidesPerView: 3 } },
    })
    return () => {
      if (swiperRef.current) {
        try {
          swiperRef.current.destroy(true, true)
        } catch {
          /* noop */
        }
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
              {items.map(it => (
                <div key={it.id} className="swiper-slide p-1">
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardActionArea
                      onClick={() => navigate(`/deskripsi/${it.id}`)}
                      sx={{ alignItems: 'stretch' }}
                    >
                      <CardMedia
                        component="img"
                        image={`/assets/images/${it.gambar}`}
                        sx={{ height: 224 }}
                        alt={it.judul}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {it.judul}
                        </Typography>
                        {/* You can add a short description here if available */}
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{ mt: 'auto', justifyContent: 'flex-end' }}
                    >
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => navigate(`/deskripsi/${it.id}`)}
                      >
                        Detail
                      </Button>
                    </CardActions>
                  </Card>
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
