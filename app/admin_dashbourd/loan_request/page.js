"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, CreditCard, ChevronDown, Eye } from 'lucide-react';

export default function LoanRequestsPage() {
  const [requests, setRequests] = useState([
    {
      id: 'UN-2103',
      name: 'Amani Juma',
      initials: 'AJ',
      purpose: 'Business Expansion',
      amount: '1,500,000',
      duration: '6 Months',
      dateApplied: 'Oct 24, 2026',
      bankInfo: {
        provider: 'Tigo Pesa',
        accountName: 'Amani Juma',
        accountNumber: '0696408701',
      },
    },
    {
      id: 'UN-2104',
      name: 'Fatuma Said',
      initials: 'FS',
      purpose: 'Agricultural Supplies',
      amount: '600,000',
      duration: '3 Months',
      dateApplied: 'Oct 25, 2026',
      bankInfo: {
        provider: 'M-Pesa',
        accountName: 'Fatuma Said',
        accountNumber: '0754123456',
      },
    },
    {
      id: 'UN-2105',
      name: 'John Mushi',
      initials: 'JM',
      purpose: 'Emergency Medical',
      amount: '2,500,000',
      duration: '12 Months',
      dateApplied: 'Oct 25, 2026',
      bankInfo: {
        provider: 'NMB Bank',
        accountName: 'John Mushi',
        accountNumber: '21010045890',
      },
    },
  ]);

  const handleApprove = (id, name) => {
    alert(`Loan request for ${name} (${id}) has been Approved! Funds will be disbursed.`);
  };

  const handleReject = (id, name) => {
    alert(`Loan request for ${name} (${id}) has been Rejected.`);
  };

  const handleViewDetails = (id, name) => {
    alert(`Opening full application details and documents for ${name} (${id})`);
  };

  return (
    <div className="w-full bg-[#121614] min-h-screen text-white p-8">
      {/* Kichwa cha Ukurasa */}
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-wide">Loan Requests</h2>
        <p className="text-xs text-neutral-400 mt-1">Review pending loan applications and verify applicant disbursement accounts before approval.</p>
      </div>

      {/* Orodha ya Kadi Zinazoshuka Chini (Vertical Feed) */}
      <div className="max-w-4xl space-y-4">
        {requests.map((req) => (
          <div 
            key={req.id} 
            className="bg-[#161b18] border border-neutral-800/80 rounded-2xl p-5 shadow-xl transition-all hover:border-neutral-700"
          >
            {/* Sehemu ya Juu: Jina, ID, Lengo, na Kiasi */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/60">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                  {req.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white text-sm">{req.name}</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                      {req.id}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5">Purpose: <span className="text-neutral-200">{req.purpose}</span></p>
                  <p className="text-[11px] text-neutral-500 mt-1">Applied on {req.dateApplied} • Duration: <span className="text-neutral-300">{req.duration}</span></p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Requested Amount</p>
                <p className="text-sm font-bold text-emerald-400">TZS {req.amount}</p>
              </div>
            </div>

            {/* Sehemu ya Kati: Taarifa za Benki au Mtandao wa Simu (Disbursement Account) */}
            <div className="py-3.5 my-3 bg-neutral-900/50 border border-neutral-800/60 rounded-xl px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800/80 text-amber-400">
                  <CreditCard size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider">Disbursement Account</p>
                  <p className="font-medium text-white flex items-center gap-2 mt-0.5">
                    <span className="text-emerald-400 font-semibold">{req.bankInfo.provider}</span> — {req.bankInfo.accountNumber} <span className="text-neutral-500">({req.bankInfo.accountName})</span>
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-neutral-400 italic">Ready for transfer</span>
            </div>

            {/* Sehemu ya Chini: Vitufe vya Actions (View Details, Reject, Approve) */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                onClick={() => handleViewDetails(req.id, req.name)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all text-xs font-semibold cursor-pointer"
              >
                <Eye size={15} /> View Details
              </button>

              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => handleReject(req.id, req.name)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 transition-all font-medium text-xs cursor-pointer"
                >
                  <XCircle size={15} /> Reject
                </button>
                <button
                  onClick={() => handleApprove(req.id, req.name)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all font-medium text-xs cursor-pointer shadow-lg"
                >
                  <CheckCircle2 size={15} /> Approve & Disburse
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Load More Button */}
        <div className="pt-4 text-center">
          <button 
            onClick={() => alert("Loading more requests...")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-all text-xs font-semibold cursor-pointer shadow-lg"
          >
            Load More Requests <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}