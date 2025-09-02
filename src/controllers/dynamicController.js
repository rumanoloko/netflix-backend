// controllers/dynamicController.js
import { getDynamicModel } from '../utils/getDynamicModel.js';

export const handleRequest = async (req, res) => {
    const collection = req.baseUrl.split('/').pop(); // 'users', 'series', etc.
    const Model = getDynamicModel(collection);

    try {
        if (req.method === 'GET') {
            const data = await Model.find({});
            return res.json(data);
        }

        if (req.method === 'POST') {
            const newDoc = new Model(req.body);
            await newDoc.save();
            return res.status(201).json({ message: 'Documento creado', data: newDoc });
        }

        res.status(405).json({ message: 'Método no permitido' });
    } catch (err) {
        res.status(500).json({ message: 'Error en la operación', error: err.message });
    }
};
