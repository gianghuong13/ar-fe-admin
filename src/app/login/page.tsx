'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { toastError, toastSuccess } from '@/utils/toast';
import { MESSAGES } from '@/config/const';
import ROUTES from '@/config/route';
import useAuthStore from '@/stores/useAuthStore';
import { SignInPayload, signIn } from '@/apis/authAPI';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const { setToken } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const loginMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (response) => {
      if (response.data.access_token) {
        const token = response.data.access_token;

        // Store token in localStorage and Zustand store
        localStorage.setItem('token', token);
        setToken(token);
        toastSuccess('Login successful!');
        // Redirect to dashboard
        setTimeout(() => {
          router.push(ROUTES.DASHBOARD);
        }, 1000);
      }
    },
    onError: (error: Error & { response?: { status?: number } }) => {
      if (error.response?.status === 401) {
        toastError('Invalid email or password. Please try again.');
      } else if (error.response?.status === 404) {
        toastError('Account not found. Please check your email address.');
      } else {
        toastError(MESSAGES.INTERNAL_SERVER_ERROR);
      }
    },
  });

  const onSubmit = (data: LoginFormData) => {
    const payload: SignInPayload = {
      email: data.email,
      password: data.password,
    };

    loginMutation.mutate(payload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-grey-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-grey-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-grey-600">
            Please sign in to your admin account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              id="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              register={register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email format',
                },
              })}
              error={errors.email?.message}
              autoFocus
              disabled={loginMutation.isPending}
            />

            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              register={register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              error={errors.password?.message}
              disabled={loginMutation.isPending}
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              variant="contained"
              size="normal"
              isLoading={loginMutation.isPending}
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? 'Signing in...' : 'Sign In'}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-grey-600">
            If you have any issues, please contact the system administrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;