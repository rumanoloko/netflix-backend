import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const client = new MongoClient(process.env.MONGO_URI);
export const db = client.db('Netflix');
