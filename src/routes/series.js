import express from 'express';
import { db } from '../ddbb/db.js';
const router = express.Router();
import {register, login} from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.get('/', async (req, res) => {
    const { query } = req.query;

    try {
        const filtro = query
            ? { title: { $regex: query, $options: 'i' } }
            : {};

        const series = await db.collection('series').find(filtro).toArray();
        res.json(series);
    } catch (error) {
        console.error('Error en /buscar:', error);
        res.status(500).json({ error: 'Error al buscar series' });
    }
});

router.post('/register', register);
router.post('/login', login);
usersRouter.get('/verify', authMiddleware, (req, res) => {
    const { tokenStatus, user } = req;

    if (!user) {
        return res.status(401).json({
            message: 'No autorizado',
            tokenStatus,
        });
    }

    res.json({
        message: 'Perfil privado',
        user,
        tokenStatus,
    });
});


