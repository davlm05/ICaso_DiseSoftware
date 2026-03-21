import { UserRole } from './user-role.enum';

export interface UserSession {
  userId: string;
  email: string;
  role: UserRole;
  token: string;
  expiresAt: Date;
}
