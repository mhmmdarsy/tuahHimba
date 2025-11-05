import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import { pool } from './db.js'

const app = express()
const PORT = process.env.PORT || 5174

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

// Resolve gallery images folder inside client
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const galleryDir = path.resolve(__dirname, '../../client/public/assets/images/gallery')

// Helper to make a human-readable title from filename
const prettifyName = filename =>
  filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())

// POST /api/galeri/sync - scan files and upsert into DB
app.post('/api/galeri/sync', async (_req, res) => {
  try {
    const entries = await fs.readdir(galleryDir, { withFileTypes: true })
    const files = entries
      .filter(e => e.isFile())
      .map(e => e.name)
      .filter(n => /\.(jpg|jpeg|png|webp|gif)$/i.test(n))

    let inserted = 0,
      skipped = 0
    for (const fname of files) {
      const relPath = `gallery/${fname}` // stored path relative to /assets/images
      const [rows] = await pool.query('SELECT id FROM galeri WHERE gambar = ? LIMIT 1', [relPath])
      if (rows.length) {
        skipped++
        continue
      }
      await pool.query('INSERT INTO galeri (gambar) VALUES (?)', [relPath])
      inserted++
    }
    res.json({ ok: true, totalFiles: files.length, inserted, skipped, dir: galleryDir })
  } catch (err) {
    console.error('Sync error:', err)
    res.status(500).json({ error: 'Sync failed', details: String(err) })
  }
})

// GET /api/galeri - list gallery items (reuse galeri_museum for now)
app.get('/api/galeri', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT gambar, deskripsi FROM galeri ORDER BY id DESC')
    res.json(rows)
  } catch (err) {
    console.error('DB error:', err)
    res.status(500).json({ error: 'Database error' })
  }
})

// GET /api/koleksi - fetch items from galeri_museum
app.get('/api/koleksi', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, judul, gambar FROM galeri ORDER BY id DESC')
    res.json(rows)
  } catch (err) {
    console.error('DB error:', err)
    res.status(500).json({ error: 'Database error' })
  }
})

// GET /api/koleksi/:id - fetch single item by id
app.get('/api/koleksi/:id', async (req, res) => {
  const { id } = req.params
  try {
    const [rows] = await pool.query(
      'SELECT id, judul, gambar, deskripsi FROM galeri WHERE id = ? LIMIT 1',
      [id]
    )
    if (!rows.length) return res.status(404).json({ error: 'Not found' })
    res.json(rows[0])
  } catch (err) {
    console.error('DB error:', err)
    res.status(500).json({ error: 'Database error' })
  }
})

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})
