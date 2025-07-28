import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { db } from './config/firebase';

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Ruta de prueba
app.get('/', (_req, res) => {
res.send('Backend corriendo de forma correcta');
});

/*
// Prueba para la conexion a Firebase
app.get('/test-firebase', async (_req, res) => {
  try {
    const docRef = db.collection('test').doc('hello');
    await docRef.set({ message: 'Firebase está conectado 🔥' });
    const snapshot = await docRef.get();
    res.json(snapshot.data());
  } catch (error: any) {
    console.error('❌ Firebase error:', error);
    res.status(500).json({ error: error.message || 'Error al conectar con Firebase' });
  }
});
*/

export default app;
