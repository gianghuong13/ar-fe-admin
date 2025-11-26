import type { Metadata } from 'next';
import ReactQueryProvider from '@/utils/ReactQueryProvider';
import ToastProvider from '@/utils/toast';
import { Suspense } from 'react';
import Loading from '@/components/common/Loading';
import AuthGuard from '@/components/layout/AuthGuard';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'AR_FE_ADMIN',
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-robotoNoto bg-grey-50">
        <ReactQueryProvider>
          <AuthGuard>
            <Suspense fallback={<Loading />}>
              <main>{children}</main>
            </Suspense>
          </AuthGuard>
        </ReactQueryProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
