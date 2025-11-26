'use client';

import useAuthStore from '@/stores/useAuthStore';
import { jwtDecode } from 'jwt-decode';

export const getToken = () => {
  const { token } = useAuthStore.getState();
  const storedToken = localStorage.getItem('token');
  return token || storedToken;
};

export const resetToken = () => {
  localStorage.removeItem('token');
};

export enum JWTValidationStatus {
  Valid = 'valid',
  Expired = 'expired',
  Invalid = 'invalid',
}

export const validateJWT = (token: string | null): JWTValidationStatus => {
  if (!token) return JWTValidationStatus.Invalid;
  try {
    const decoded: { exp?: number } = jwtDecode(token);
    if (!decoded?.exp) return JWTValidationStatus.Invalid;
    
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decoded.exp > currentTimestamp) {
      return JWTValidationStatus.Valid;
    } else {
      return JWTValidationStatus.Expired;
    }
  } catch {
    return JWTValidationStatus.Invalid;
  }
};

export const isValidJWT = (token: string | null): boolean => {
  return validateJWT(token) === JWTValidationStatus.Valid;
};