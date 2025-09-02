// models/Serie.js
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const serieSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4, // 🔑 Genera un UUID automáticamente
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    genero: {
        type: [String],
        default: []
    },
    añoLanzamiento: {
        type: String
    },
    numeroEpisodios: {
        type: String
    },
    description: {
        type: String
    },
    thumbnail: {
        type: String
    },
    video: {
        type: String
    },
    videoID: {
        type: String
    }
}, { collection: 'series' });

export default mongoose.model('Serie', serieSchema);
