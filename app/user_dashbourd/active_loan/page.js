'use client';
import React from 'react';
import { HiCash, HiClock, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

export default function ActiveLoansPage() {
  // Takwimu za jumla kwa juu
  const summary = {
    totalOutstanding: "TZS 800,000",
    nextPaymentDue: "Oct 15, 2026",
    amountDue: "TZS 290,000",
    totalPaidPercentage: 35, // Mfano wa asilimia iliyolipwa
  };

  // Orodha ya mikopo hai (Active Loans pekee)
  const currentLoans = [
    {
      id: "LN-2041",
      status: "Active",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      amount: "TZS 800,000",
      progressWidth: "35%",
      interestRate: "30.0% APR", // Imerekebishwa iendane na riba uliyoweka awali
      disbursed: "Aug 15, 2026",
      nextPayment: "Oct 15, 2026",
      monthlyInstallment: "TZS 290,000",
    }
  ];

  // Taarifa za Ratiba na Historia ya Malipo (Read-Only Table)
  const repaymentSchedule = [
    {
      installNo: "1",
      dueDate: "Sep 15, 2026",
      amount: "TZS 290,000",
      status: "Paid",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      paidDate: "Sep 12, 2026"
    },
    {
      installNo: "2",
      dueDate: "Oct 15, 2026",
      amount: "TZS 290,000",
      status: "Pending",
      statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      paidDate: "-"
    },
    {
      installNo: "3",
      dueDate: "Nov 15, 2026",
      amount: "TZS 290,000",
      status: "Upcoming",
      statusColor: "bg-zinc-800 text-zinc-400 border-zinc-700",
      paidDate: "-"
    }
  ];

  return (
    <div className="bg-[#121212] border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl max-w-5xl mx-auto text-white space-y-8">
      
      {/* 1. TOP SUMMARY SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Total Outstanding Balance */}
        <div className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Total Active Loan Amount</p>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">{summary.totalOutstanding}</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-zinc-800/80">
            <div>
              <p className="text-[11px] text-zinc-500 uppercase">Next Payment Due</p>
              <p className="text-sm font-bold text-zinc-200 mt-0.5">{summary.nextPaymentDue}</p>
            </div>
            <div>
              <p className="text-[11px] text-zinc-500 uppercase">Installment / Target</p>
              <p className="text-sm font-bold text-amber-400 mt-0.5">{summary.amountDue}</p>
            </div>
          </div>
        </div>

        {/* Status Card (Updated to reflect repayment progress) */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center mb-3">
            <span className="text-base font-bold text-emerald-400">{summary.totalPaidPercentage}%</span>
          </div>
          <p className="text-xs font-bold text-zinc-200 uppercase tracking-wider">Repayment Progress</p>
          <p className="text-[11px] text-zinc-500 mt-1">Active loan servicing</p>
        </div>

      </div>

      {/* 2. ACTIVE LOANS SECTION */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-wider">My Active Loan Details</h3>

        {currentLoans.map((loan, idx) => (
          <div key={idx} className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl space-y-4">
            
            {/* Top row of card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-semibold text-zinc-400">{loan.id}</span>
                <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${loan.statusColor}`}>
                  {loan.status}
                </span>
              </div>
              <div className="text-xl font-bold text-white">{loan.amount}</div>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs">
              <div>
                <p className="text-zinc-500 text-[10px] uppercase">Interest Rate</p>
                <p className="font-semibold text-zinc-200 mt-0.5">{loan.interestRate}</p>
              </div>
              
              <div>
                <p className="text-zinc-500 text-[10px] uppercase">Disbursed Date</p>
                <p className="font-semibold text-zinc-200 mt-0.5">{loan.disbursed}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-[10px] uppercase">Schedule / Timeline</p>
                <p className="font-semibold text-zinc-200 mt-0.5">{loan.nextPayment}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-[10px] uppercase">Monthly Installment</p>
                <p className="font-semibold text-amber-400 mt-0.5">{loan.monthlyInstallment}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 3. REPAYMENT SCHEDULE & HISTORY TABLE (READ-ONLY) */}
      <div className="space-y-4 pt-4 border-t border-zinc-800">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-wider">Repayment Schedule & History</h3>
          <span className="text-[11px] text-zinc-500">Read-Only View</span>
        </div>

        <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/30">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-zinc-900/80 text-zinc-400 uppercase text-[10px] border-b border-zinc-800">
                <tr>
                  <th className="px-6 py-3 font-semibold">#</th>
                  <th className="px-6 py-3 font-semibold">Due Date</th>
                  <th className="px-6 py-3 font-semibold">Installment Amount</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                  <th className="px-6 py-3 font-semibold">Date Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {repaymentSchedule.map((row, index) => (
                  <tr key={index} className="hover:bg-zinc-900/50 transition">
                    <td className="px-6 py-4 font-medium text-zinc-400">{row.installNo}</td>
                    <td className="px-6 py-4 font-semibold text-zinc-200">{row.dueDate}</td>
                    <td className="px-6 py-4 font-semibold text-amber-400">{row.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{row.paidDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}