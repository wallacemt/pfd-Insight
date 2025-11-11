export interface AuthUser {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  emailVerified?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthSession {
  id: string;
  userId: string;
  expiresAt: Date;
  token: string;
  ipAddress?: string | null;
  userAgent?: string | null;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}
