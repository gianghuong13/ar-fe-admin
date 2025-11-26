'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Loading from '@/components/common/Loading';
import Button from '@/components/common/Button';
import { getToken } from '@/utils';
import ROUTES from '@/config/route';

const DashboardPage = () => {
  const router = useRouter();
  // Check token on each render - this is fast and avoids useEffect issues
  const token = getToken();
  // If no token, redirect and show loading
  if (!token) {
    router.replace(ROUTES.LOGIN);
    return <Loading />;
  }

  const statsCards = [
    {
      title: 'Total Orders',
      value: '2,345',
      change: '+12%',
      changeType: 'positive' as const,
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: 'Total Products',
      value: '156',
      change: '+3%',
      changeType: 'positive' as const,
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+8%',
      changeType: 'positive' as const,
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-1a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+15%',
      changeType: 'positive' as const,
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-grey-800 mb-2">Welcome to AR Admin Dashboard</h1>
          <p className="text-grey-600">Manage your AR application from this central hub</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-grey-600">{card.title}</p>
                  <p className="text-2xl font-bold text-grey-900">{card.value}</p>
                  <p className={`text-sm ${
                    card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {card.change} from last month
                  </p>
                </div>
                <div className="shrink-0">
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-grey-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="contained"
              size="normal"
              onClick={() => router.push(ROUTES.ORDERS)}
              classes="w-full"
            >
              View All Orders
            </Button>
            <Button
              variant="outlined"
              size="normal"
              onClick={() => router.push(ROUTES.PRODUCTS)}
              classes="w-full"
            >
              Manage Products
            </Button>
            <Button
              variant="outlined"
              size="normal"
              onClick={() => router.push(ROUTES.USERS)}
              classes="w-full"
            >
              Manage Users
            </Button>
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-grey-800 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: 'New order #12345 received', time: '5 minutes ago', type: 'order' },
              { action: 'Product "AR Glasses Model X" updated', time: '1 hour ago', type: 'product' },
              { action: 'User "john@example.com" registered', time: '2 hours ago', type: 'user' },
              { action: 'Order #12344 shipped', time: '3 hours ago', type: 'order' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 py-2 border-b border-grey-100 last:border-0">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'order' ? 'bg-blue-500' :
                  activity.type === 'product' ? 'bg-green-500' : 'bg-purple-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-grey-800">{activity.action}</p>
                  <p className="text-xs text-grey-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;