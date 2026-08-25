"use client";

import React, { useState } from 'react';
import { History, ArrowDownLeft, ArrowUpRight, ShieldCheck, Calendar } from 'lucide-react';

export default function SystemLogsPage() {
  // Logs maalum kwa ajili ya Pay (Disbursements) na Repay (Repayments) pekee - Read Only
  const [financialLogs] = useState([
    {
      id: 'TXN-8841',
      type: 'DISBURSEMENT', // Kulipa / Kutoa mkopo kwa mteja
      client: 'Grace Mallya',
      amount: 'TZS 2,000,000',
      description: 'Loan disbursed to mobile wallet / bank account',
      timestamp: 'Aug 25, 2026 — 14:22 PM',
    },
    {
      id: 'TXN-8842',
      type: 'REPAYMENT', // Marejesho yaliyofanyika
      client: 'David Kimaro',
      amount: 'TZS 450,000',
      description: 'Monthly loan repayment received successfully',
      timestamp: 'Aug 25, 2026 — 11:10 AM',
    },
    {
      id: 'TXN-8843',
      type: 'DISBURSEMENT',
      client: 'Neema Mwakyusa',
      amount: 'TZS 1,200,000',
      description: 'Loan disbursed to mobile wallet / bank account',
      timestamp: 'Aug 24, 2026 — 16:05 PM',
    },
    {
      id: 'TXN-8844',
      type: 'REPAYMENT',
      client: 'Grace Mallya',
      amount: 'TZS 500,000',
      description: 'Partial loan repayment received',
      timestamp: 'Aug 23, 2026 — 09:45 AM',
    },
  ]);

  return (
    <div className="w-full bg-[#121614] min-h-screen text-white p-8">
      {/* Kichwa cha Ukurasa */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-wide flex items-center gap-2">
            <History className="text-emerald-400" size={22} /> Transaction & Financial Logs
          </h2>
          <p className="text-xs text-neutral-400 mt-1">Read-only audit trail tracking all loan disbursements and repayments.</p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs">
          <ShieldCheck size={14} className="text-emerald-400" /> Secure Read-Only Mode
        </div>
      </div>

      {/* Jedwali la Logs za Fedha */}
      <div className="bg-[#161b18] border border-neutral-800/80 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/50 text-neutral-400 uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4 font-semibold">Transaction ID</th>
                <th className="py-3 px-4 font-semibold">Type</th>
                <th className="py-3 px-4 font-semibold">Client Name</th>
                <th className="py-3 px-4 font-semibold">Amount</th>
                <th className="py-3 px-4 font-semibold">Description</th>
                <th className="py-3 px-4 font-semibold text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {financialLogs.map((log) => (
                <tr key={log.id} className="hover:bg-neutral-900/30 transition-all">
                  {/* ID */}
                  <td className="py-4 px-4 font-mono text-neutral-400">
                    {log.id}
                  </td>

                  {/* Type (Disbursement vs Repayment) */}
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                      log.type === 'DISBURSEMENT'
                        ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                        : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    }`}>
                      {log.type === 'DISBURSEMENT' ? <ArrowUpRight size={12} /> : <ArrowDownLeft size={12} />}
                      {log.type}
                    </span>
                  </td>

                  {/* Client Name */}
                  <td className="py-4 px-4 font-medium text-white">
                    {log.client}
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-4 font-bold text-neutral-200 font-mono">
                    {log.amount}
                  </td>

                  {/* Description */}
                  <td className="py-4 px-4 text-neutral-400">
                    {log.description}
                  </td>

                  {/* Timestamp */}
                  <td className="py-4 px-4 text-right text-neutral-400 font-mono text-[11px]">
                    {log.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}