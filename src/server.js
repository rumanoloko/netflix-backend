import express from 'express';
import dotenv from 'dotenv';
import { client } from './ddbb/db.js';
import seriesRoutes from './routes/series.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api/series', seriesRoutes);

client.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('❌ Error al conectar con MongoDB:', err);
});
