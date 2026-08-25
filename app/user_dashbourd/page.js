'use client';

import { useState } from 'react';
import UserSidebar from '@/components/user/UserSidebar';
import TopNav from '@/components/user/TopNav';
import StatsCard from '@/components/user/StatsCard';
import Footer from '@/components/user/Footer';
import BalanceChart from '@/components/user/BalanceChart';
import RequestLoan from '@/components/user/RequestLoan';
import LoanSummary from '@/components/user/LoanSummary';
import { HiCurrencyDollar, HiCheckCircle, HiClock, HiCreditCard } from 'react-icons/hi';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white">
      <UserSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex min-h-screen flex-1 flex-col overflow-y-auto">
        <TopNav userName="Amani Juma" userRole="STANDARD USER" />

        <main className="p-8 space-y-6">
          {activeTab === 'dashboard' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard title="Total Borrowed" value="TZS 2,700,000" change="+12.5%" isPositive={true} icon={HiCurrencyDollar} />
                <StatsCard title="Active Loan" value="TZS 800,000" change="+4.2%" isPositive={true} icon={HiCheckCircle} />
                <StatsCard title="Remaining Balance" value="TZS 270,000" change="-5.8%" isPositive={false} icon={HiClock} />
                <StatsCard title="Transactions" value="6" change="+3.1%" isPositive={true} icon={HiCreditCard} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <BalanceChart />
                <LoanSummary />
              </div>
            </>
          )}

          {activeTab === 'request-loan' && (
            <RequestLoan />
          )}

          {activeTab === 'active-loans' && (
            <div className="bg-[#121212] border border-zinc-800 p-8 rounded-2xl text-zinc-400">
              No active loans found.
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-[#121212] border border-zinc-800 p-8 rounded-2xl text-zinc-400">
              Account settings module.
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}