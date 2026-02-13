import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'kajkarma-admin-secret-key-2024';


const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('admin1234', 10);

export function verifyAdminCredentials(email: string, password: string): boolean {
  if (email !== ADMIN_EMAIL) return false;
  return bcrypt.compareSync(password, ADMIN_PASSWORD_HASH);
}

export function generateToken(email: string): string {
  return jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): { email: string; role: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { email: string; role: string };
  } catch {
    return null;
  }
}
