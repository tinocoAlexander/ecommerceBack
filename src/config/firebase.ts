import admin from 'firebase-admin';
import path from 'path';

// Ruta absoluta hacia el archivo de credenciales
const serviceAccountPath = path.resolve(__dirname, 'firebase-admin-sdk.json');

// Inicializa Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath),
});

// Exportar servicios útiles
const db = admin.firestore();
const auth = admin.auth();

export { admin, db, auth };
