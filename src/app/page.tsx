'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/common/Loading';
import ROUTES from '@/config/route';
const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(ROUTES.LOGIN);
  }, [router]);

  return <Loading />;
};

export default HomePage;
