'use client';

import { ToastContainer, toast } from 'react-toastify';
import Toast from '@/shares/components/DataDisplay/Toast';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const toastError = (message: string, autoClose?: number) => {
  toast.error(<Toast message={message} type="error" />, {
    icon: false,
    autoClose: autoClose ?? 5000,
  });
};

export const toastSuccess = (message: string, autoClose?: number) => {
  toast.success(<Toast message={message} type="success" />, {
    icon: false,
    autoClose: autoClose ?? 5000,
  });
};

const ToastProvider = () => {
  const path = usePathname();
  useEffect(() => toast.dismiss(), [path]);
  return (
    <ToastContainer
      position="top-center"
      hideProgressBar
      closeButton={false}
      autoClose={5000}
      stacked
      icon={false}
    />
  );
};

export default ToastProvider;
