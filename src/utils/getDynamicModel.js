// utils/getDynamicModel.js
import mongoose from 'mongoose';

const modelCache = {};

export const getDynamicModel = (collectionName) => {
    if (modelCache[collectionName]) return modelCache[collectionName];

    const schema = new mongoose.Schema({}, { strict: false, collection: collectionName });
    const model = mongoose.model(collectionName, schema);
    modelCache[collectionName] = model;
    return model;
};
