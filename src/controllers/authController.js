import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import {tokenGenerator} from '../utils/jwtTokenGenerator.js';
import {parseExpiration} from "../utils/expirationParser.js";

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta' });

        tokenGenerator(res, user);

        res.status(200).json({ message: 'Login exitoso '});
    } catch (error) {
        console.error('❌ Error en login:', error);
        res.status(500).json({ message: 'Error interno al iniciar sesión' });
    }
};

export const register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    try {
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Las contraseñas no coinciden' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'El correo ya pertenece a otra cuenta' });
        }

        const user = new User({ name, email, password });
        await user.save();

        tokenGenerator(res, user);

        res.status(201).json({ message: 'Usuario registrado correctamente, ya puede acceder al sistema'});
    } catch (error) {
        console.error('❌ Error en registro:', error);
        res.status(500).json({ message: 'Error interno al registrar usuario' });
    }
};
