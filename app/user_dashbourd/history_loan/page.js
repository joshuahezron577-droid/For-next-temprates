'use client';
import React from 'react';
import { HiArchiveBox, HiBanknotes, HiCheckBadge, HiCalendar, HiShieldCheck } from 'react-icons/hi2';

export default function LoanHistoryPage() {
  // Mock data ya historia kamili ya mikopo iliyopita ya mteja
  const loanHistoryRecords = [
    {
      loanId: "LN-1890",
      appliedDate: "Jan 05, 2026",
      approvedDate: "Jan 10, 2026",
      disbursedDate: "Jan 10, 2026",
      principalAmount: "TZS 500,000",
      totalPaid: "TZS 650,000",
      repaymentPeriod: "3 Months",
      guarantor: "Juma Ally (Brother)",
      status: "Completed",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      closingDate: "Apr 10, 2026",
      closureReason: "Fully Repaid on Time"
    },
    {
      loanId: "LN-1422",
      appliedDate: "Aug 01, 2025",
      approvedDate: "Aug 04, 2025",
      disbursedDate: "Aug 05, 2025",
      principalAmount: "TZS 300,000",
      totalPaid: "TZS 390,000",
      repaymentPeriod: "3 Months",
      guarantor: "Aisha Mohamed (Colleague)",
      status: "Completed",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      closingDate: "Nov 05, 2025",
      closureReason: "Fully Repaid on Time"
    },
    {
      loanId: "LN-0985",
      appliedDate: "Mar 12, 2025",
      approvedDate: "Mar 15, 2025",
      disbursedDate: "Mar 16, 2025",
      principalAmount: "TZS 200,000",
      totalPaid: "TZS 120,000",
      repaymentPeriod: "2 Months",
      guarantor: "Rashid Swedi (Friend)",
      status: "Defaulted / Closed",
      statusColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      closingDate: "Jun 20, 2025",
      closureReason: "Closed with Penalty / Guarantor Intervention"
    }
  ];

  return (
    <div className="bg-[#121212] border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl max-w-5xl mx-auto text-white space-y-6">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-4 gap-2">
        <div>
          <h2 className="text-xl font-bold tracking-wide flex items-center text-amber-400">
            <HiArchiveBox className="w-6 h-6 mr-2" /> Client Loan History & Archive
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Complete audit trail of previous loan applications, approval timelines, and final closure statuses.
          </p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-xs text-zinc-300">
          Total Archived: <span className="font-bold text-white">{loanHistoryRecords.length} Loans</span>
        </div>
      </div>

      {/* HISTORICAL RECORDS LIST / CARDS */}
      <div className="space-y-4">
        {loanHistoryRecords.map((record, index) => (
          <div 
            key={index} 
            className="bg-zinc-900/40 border border-zinc-800 p-5 md:p-6 rounded-2xl space-y-5 hover:border-zinc-700 transition"
          >
            {/* Top Row: Loan ID, Status & Principal */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-bold text-zinc-200">{record.loanId}</span>
                <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${record.statusColor}`}>
                  {record.status}
                </span>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-zinc-500 uppercase">Principal Disbursed</p>
                <p className="text-base font-extrabold text-white">{record.principalAmount}</p>
              </div>
            </div>

            {/* Middle Grid: Detailed Timeline (Applied, Approved, Disbursed, Closed) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-zinc-950/40 p-4 rounded-xl border border-zinc-800/50">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase flex items-center mb-1">
                  <HiCalendar className="w-3 h-3 mr-1 text-zinc-400" /> Date Applied
                </p>
                <p className="font-semibold text-zinc-300">{record.appliedDate}</p>
              </div>

              <div>
                <p className="text-[10px] text-zinc-500 uppercase flex items-center mb-1">
                  <HiCheckBadge className="w-3 h-3 mr-1 text-emerald-400" /> Date Approved
                </p>
                <p className="font-semibold text-zinc-300">{record.approvedDate}</p>
              </div>

              <div>
                <p className="text-[10px] text-zinc-500 uppercase flex items-center mb-1">
                  <HiBanknotes className="w-3 h-3 mr-1 text-amber-400" /> Disbursed Date
                </p>
                <p className="font-semibold text-zinc-300">{record.disbursedDate}</p>
              </div>

              <div>
                <p className="text-[10px] text-zinc-500 uppercase flex items-center mb-1">
                  <HiShieldCheck className="w-3 h-3 mr-1 text-blue-400" /> Closure Date
                </p>
                <p className="font-semibold text-zinc-300">{record.closingDate}</p>
              </div>
            </div>

            {/* Bottom Row: Additional Meta (Guarantor, Total Paid, Closure Reason) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-1">
              <div>
                <span className="text-zinc-500 text-[10px] uppercase block">Total Paid (Incl. 30%):</span>
                <span className="font-semibold text-emerald-400">{record.totalPaid}</span>
              </div>

              <div>
                <span className="text-zinc-500 text-[10px] uppercase block">Assigned Guarantor:</span>
                <span className="font-medium text-zinc-300">{record.guarantor}</span>
              </div>

              <div>
                <span className="text-zinc-500 text-[10px] uppercase block">Closure Remark:</span>
                <span className="font-medium text-zinc-400 italic">{record.closureReason}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}