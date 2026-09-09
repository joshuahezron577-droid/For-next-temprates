import React from 'react';
import Sidebar from '../../components/admin/SideBar';
import TopNav from '../../components/admin/TopNav';
import StatsCards from '../../components/admin/StatsCards';
import LineChartSection from '../../components/admin/LineChartSecton';
import PendingRequestsTable from '../../components/admin/PendingReguestTable';
import Footer from '../../components/admin/Footer';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0c0f0e] text-white flex font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        
        <main className="flex-1 min-w-0 p-4 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Admin Dashboard</h2>
            <p className="text-xs text-neutral-400 mt-1">Platform overview — users, loan requests, and active loans.</p>
          </div>

          <StatsCards />
          <LineChartSection />
          <PendingRequestsTable />
        </main>
        <Footer />
      </div>
    </div>
  );
}