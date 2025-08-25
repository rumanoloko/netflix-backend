import express from 'express';
import { db } from '../ddbb/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const series = await db.collection('series').find().toArray();
        res.json(series);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener series' });
    }
});

export default router;
