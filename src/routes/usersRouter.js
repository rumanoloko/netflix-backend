// routes/users.js
import express from 'express';
import { register, login } from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const usersRouter = express.Router();

usersRouter.post('/register', register);
usersRouter.post('/login', login);
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


export default usersRouter;
