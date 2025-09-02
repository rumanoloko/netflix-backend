// routes/series.js
import express from 'express';
import Serie from '../models/Serie.js';

const seriesRouter = express.Router();

seriesRouter.get('/', async (req, res) => {
    const { query } = req.query;

    try {
        const filtro = query
            ? { title: { $regex: query, $options: 'i' } } // búsqueda por título
            : {};

        const series = await Serie.find(filtro);
        res.json(series);
    } catch (error) {
        console.error('❌ Error al buscar series:', error);
        res.status(500).json({ error: 'Error al buscar series' });
    }
});

export default seriesRouter;
