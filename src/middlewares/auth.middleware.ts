import { Request, Response, NextFunction } from 'express';
import { auth } from '../config/firebase';

export interface AuthRequest extends Request {
  uid?: string;
  email?: string;
}

export const verifyFirebaseToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authorizationHeader.replace('Bearer ', '');

  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.uid = decodedToken.uid;
    req.email = decodedToken.email || undefined;

    next();
  } catch (error) {
    console.error('🔐 Token verification error:', error);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
