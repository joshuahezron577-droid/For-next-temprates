"use client";

import React, { useState } from 'react';
import { Eye, ChevronDown, CheckCircle2, AlertCircle, CreditCard, CheckCheck, Calendar } from 'lucide-react';

export default function ActiveLoansPage() {
  // Hii ndio Orodha ya mikopo iliyokubaliwa na kutolewa (Active Loans kutoka kwenye Requests)
  const [activeLoans, setActiveLoans] = useState([
    {
      id: 'LN-5012',
      name: 'Grace Mallya',
      initials: 'GM',
      purpose: 'Retail Shop Stock',
      amountNum: 2000000,
      paidNum: 0, // Inaanzia 0 kama ndio kwanza imetoka kwa Request
      amount: '2,000,000',
      paid: '0',
      remaining: '2,000,000',
      progress: 0,
      duration: '6 Months',
      dueDate: 'Nov 15, 2026',
      status: 'On Track',
      bankInfo: {
        provider: 'Tigo Pesa',
        accountName: 'Grace Mallya',
        accountNumber: '0655123456',
      }
    },
    {
      id: 'LN-5013',
      name: 'David Kimaro',
      initials: 'DK',
      purpose: 'Transport & Logistics',
      amountNum: 4500000,
      paidNum: 1500000, // Ameshawahi kutoa marejesho ya awamu fulani
      amount: '4,500,000',
      paid: '1,500,000',
      remaining: '3,000,000',
      progress: 33,
      duration: '12 Months',
      dueDate: 'Dec 01, 2026',
      status: 'Delayed',
      bankInfo: {
        provider: 'NMB Bank',
        accountName: 'David Kimaro',
        accountNumber: '2101009988',
      }
    },
  ]);

  const handleViewDetails = (id, name) => {
    alert(`Opening repayment schedule and transaction logs for ${name} (${id})`);
  };

  // Admin anapothibitisha malipo yaliyotumwa na mteja nje ya mfumo
  const handleConfirmPayment = (id, name) => {
    setActiveLoans(prevLoans =>
      prevLoans.map(loan => {
        if (loan.id === id) {
          const installment = 500000; // Mfano wa rejesho la awamu
          const newPaidNum = loan.paidNum + installment;
          const newRemainingNum = Math.max(0, loan.amountNum - newPaidNum);
          const newProgress = Math.min(100, Math.round((newPaidNum / loan.amountNum) * 100));
          const newStatus = newProgress === 100 ? 'Fully Paid' : 'On Track';
          const nextDueDate = newProgress === 100 ? 'Completed' : 'Dec 15, 2026';

          return {
            ...loan,
            paidNum: newPaidNum,
            paid: newPaidNum.toLocaleString(),
            remaining: newRemainingNum.toLocaleString(),
            progress: newProgress,
            status: newStatus,
            dueDate: nextDueDate,
          };
        }
        return loan;
      })
    );
    alert(`Repayment confirmed for ${name}. Balance and schedule updated successfully!`);
  };

  return (
    <div className="w-full bg-[#121614] min-h-screen text-white p-8">
      {/* Kichwa cha Ukurasa */}
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-wide">Active Loans & Repayments</h2>
        <p className="text-xs text-neutral-400 mt-1">Monitor disbursed loans, track repayment progress, and confirm received payments.</p>
      </div>

      {/* Orodha ya Kadi */}
      <div className="max-w-4xl space-y-4">
        {activeLoans.map((loan) => (
          <div 
            key={loan.id} 
            className="bg-[#161b18] border border-neutral-800/80 rounded-2xl p-5 shadow-xl transition-all hover:border-neutral-700"
          >
            {/* Sehemu ya Juu: Jina, Kitambulisho, na Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/60">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                  {loan.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white text-sm">{loan.name}</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                      {loan.id}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5">Purpose: <span className="text-neutral-200">{loan.purpose}</span> • Duration: <span className="text-neutral-300">{loan.duration}</span></p>
                </div>
              </div>

              <div>
                {loan.status === 'Fully Paid' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                    <CheckCircle2 size={13} /> Fully Paid
                  </span>
                ) : loan.status === 'Delayed' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-medium">
                    <AlertCircle size={13} /> Delayed
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-medium">
                    On Track
                  </span>
                )}
              </div>
            </div>

            {/* Account Info (Ilipokwenda Pesa) */}
            <div className="py-3 my-3 bg-neutral-900/50 border border-neutral-800/60 rounded-xl px-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400">
                  <CreditCard size={15} />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Client Disbursement Account</p>
                  <p className="font-medium text-white mt-0.5">
                    <span className="text-emerald-400 font-semibold">{loan.bankInfo.provider}</span> — {loan.bankInfo.accountNumber} <span className="text-neutral-500">({loan.bankInfo.accountName})</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Takwimu za Pesa (Total, Paid, Remaining, Next Due Date) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 text-xs">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Total Amount</p>
                <p className="font-bold text-white mt-1">TZS {loan.amount}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Amount Paid</p>
                <p className="font-bold text-emerald-400 mt-1">TZS {loan.paid}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Remaining Balance</p>
                <p className="font-bold text-rose-400 mt-1">TZS {loan.remaining}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium flex items-center gap-1">
                  <Calendar size={12} /> Next Due Date
                </p>
                <p className="font-semibold text-amber-400 mt-1">{loan.dueDate}</p>
              </div>
            </div>

            {/* Progress na Vitufe vya Action */}
            <div className="pt-3 border-t border-neutral-800/60 space-y-3">
              <div className="w-full">
                <div className="flex justify-between text-[11px] text-neutral-400 mb-1.5">
                  <span>Repayment Progress</span>
                  <span className="font-semibold text-white">{loan.progress}%</span>
                </div>
                <div className="w-full bg-neutral-900 rounded-full h-2 border border-neutral-800 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${loan.progress === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-emerald-600 to-emerald-400'}`}
                    style={{ width: `${loan.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <button
                  onClick={() => handleViewDetails(loan.id, loan.name)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all text-xs font-semibold cursor-pointer"
                >
                  <Eye size={15} /> View Details
                </button>

                {loan.progress < 100 ? (
                  <button
                    onClick={() => handleConfirmPayment(loan.id, loan.name)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all text-xs font-semibold cursor-pointer shadow-lg"
                  >
                    <CheckCheck size={15} /> Confirm Payment & Update Schedule
                  </button>
                ) : (
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 size={14} /> Loan Fully Settled
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}