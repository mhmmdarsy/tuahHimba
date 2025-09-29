import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

// GET /api/koleksi - fetch items from galeri_museum
app.get('/api/koleksi', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, judul, gambar FROM galeri_museum ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// GET /api/koleksi/:id - fetch single item by id
app.get('/api/koleksi/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(
      'SELECT id, judul, gambar, deskripsi FROM galeri_museum WHERE id = ? LIMIT 1',
      [id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
