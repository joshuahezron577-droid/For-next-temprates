import React from 'react';
import { HiCheckCircle, HiClock } from 'react-icons/hi';

export default function LoanSummary() {
  // Mock data ya mikopo ya mteja
  const loans = [
    {
      id: "LN-84920",
      title: "Business Growth Loan",
      amount: "TZS 1,500,000",
      status: "Active",
      progress: 65,
      dueDate: "14 Sep 2026",
    },
    {
      id: "LN-91234",
      title: "Emergency Cash Advance",
      amount: "TZS 400,000",
      status: "Pending",
      progress: 20,
      dueDate: "Awaiting Approval",
    },
  ];

  return (
    <div className="bg-[#121212] border border-zinc-800 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">My Loans Overview</h3>
          <p className="text-xs text-zinc-400">Track your active obligations and pending requests.</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 rounded-full">
          2 Loans Total
        </span>
      </div>

      <div className="space-y-4">
        {loans.map((loan, index) => (
          <div key={index} className="bg-zinc-900/80 border border-zinc-800/80 p-4 rounded-xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{loan.id}</span>
                <h4 className="text-sm font-semibold text-white">{loan.title}</h4>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex items-center space-x-1 ${
                loan.status === 'Active' 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              }`}>
                {loan.status === 'Active' ? <HiCheckCircle className="w-3 h-3 mr-1" /> : <HiClock className="w-3 h-3 mr-1" />}
                {loan.status}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
              <span>Amount: <strong className="text-white font-medium">{loan.amount}</strong></span>
              <span>Due: <strong className="text-zinc-300 font-medium">{loan.dueDate}</strong></span>
            </div>

            {/* Progress Bar */}
            <div className="mt-3 w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${loan.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                style={{ width: `${loan.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}