import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('❌ MONGO_URI no está definida en .env');
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log('✅ Conectado a MongoDB');

        try {
            const collections = await mongoose.connection.db.listCollections().toArray();
            console.log('📚 Colecciones disponibles:', collections.map(c => c.name));
        } catch (err) {
            console.error('❌ Error al listar colecciones:', err);
        } finally {
            mongoose.disconnect();
        }
    })
    .catch((err) => {
        console.error('❌ Error de conexión:', err.message);
    });
