import { getToken } from '@/utils';
import axios, { createAuthAxiosInstance } from '@/utils/axios';

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResponse {
    data: {
        user: {
            id: string;
            name: string;
            email: string;
        };
        access_token: string;
    }
}

export const signIn = async (
  params: SignInPayload,
): Promise<SignInResponse> => {
  const response = await axios.post('auth/login', params);
  return response.data;
};