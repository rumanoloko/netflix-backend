import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './ddbb/db.js';
import usersRouter from './routes/usersRouter.js';
import seriesRouter from './routes/seriesRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5001',
    credentials: true,
}));

// Rutas por colección
app.use('/api/users', usersRouter);
app.use('/api/series', seriesRouter);
console.log("MongoDB uri: ", process.env.MONGO_URI)
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
});
