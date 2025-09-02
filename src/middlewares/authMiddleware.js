import jwt from 'jsonwebtoken';
import { generateAccessToken } from '../utils/jwtTokenGenerator.js';

const authMiddleware = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;
    console.log("Solicitud de autentificacion recibida!");
    if (!accessToken && !refreshToken) {
        return res.status(401).json({
            message: '❌ No autorizado: falta access token y refresh token',
            tokenStatus: '00',
        });
    }

    try {
        req.user = jwt.verify(accessToken, process.env.JWT_SECRET);
        return next();
    } catch (accessError) {
        // ⚠️ Access token inválido o caducado
        if (!refreshToken) {
            return res.status(403).json({
                message: '❌ Access token inválido y sin refresh token disponible',
                tokenStatus: 'access_invalid_refresh_missing',
            });
        }

        try {
            // 🔁 Verificar refresh token
            const user = jwt.verify(refreshToken, process.env.JWT_SECRET);

            // 🔄 Renovar access token
            generateAccessToken(res, user);
            req.user = user;
            req.tokenStatus = 'access_renewed';

            return next(); // ✅ continuar después de renovar
        } catch (refreshError) {
            return res.status(403).json({
                message: '❌ Ambos tokens inválidos o caducados',
                tokenStatus: 'both_invalid',
            });
        }
    }
};

export default authMiddleware;
