import jwt from "jsonwebtoken";
import {parseExpiration} from "./expirationParser.js";
import {v4 as uuidv4} from "uuid";
export function generateAccessToken(res, user){
    const accessToken = jwt.sign(
        { id: user._id, jti: uuidv4(), issuedAt: Date.now(), type: 'access'},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION});

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        maxAge: parseExpiration(process.env.JWT_ACCESS_TOKEN_EXPIRATION),
    });
}

export function generateRefreshToken(res, user){
    const refreshToken = jwt.sign(
        { id: user._id, jti: uuidv4(), issuedAt: Date.now(), type: 'refresh'},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION});

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        maxAge: parseExpiration(process.env.JWT_REFRESH_TOKEN_EXPIRATION),
    });
}

export function tokenGenerator(res, user){
    generateAccessToken(res, user);
    generateRefreshToken(res, user);
}