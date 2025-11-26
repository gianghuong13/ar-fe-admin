'use client';

import Loading from '@/components/common/Loading';
import ROUTES from '@/config/route';
import { getToken, resetToken } from '@/utils';
import { jwtDecode } from 'jwt-decode';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
}

// Protected pages: Cannot access unless logged in
const PROTECTED_PAGES = [
  ROUTES.HOME,
  ROUTES.ORDERS,
  ROUTES.USERS,
  ROUTES.PRODUCTS
];

// Pre-login pages: Cannot access after logged in
const PRE_LOGIN_PAGES = [
  // Login Routes
  ROUTES.LOGIN,
];

const AuthGuard = ({ children }: AuthGuardProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  const isProtectedPage = PROTECTED_PAGES.some((page) => {
    if (page.includes(':')) {
      const staticPath = page.split('/:')[0];
      return pathname?.startsWith(staticPath);
    } else return pathname === page;
  });
  const isPreLoginPage = PRE_LOGIN_PAGES.includes(pathname || '');

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      if (isProtectedPage) router.replace(ROUTES.LOGIN);
      return;
    }
    const decodedToken: { exp: number } = jwtDecode(token as string);
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // Check if token is valid
    if (decodedToken.exp && decodedToken.exp > currentTimestamp) {
      setLoading(false);
      if (isPreLoginPage) router.replace(ROUTES.DASHBOARD);
    } else {
      // The token is expired, redirect to login page
      resetToken();
      window.location.reload();
    }
  }, [pathname]);

  if (isLoading) Loading();

  return <>{!isLoading && children}</>;
};

export default AuthGuard;
