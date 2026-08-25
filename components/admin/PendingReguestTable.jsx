import React from 'react';

export default function PendingRequestsTable() {
  const requests = [
    { name: 'Amani Juma', code: 'LN-2103', amount: 'TSh 1,500,000' },
    { name: 'Fatuma Said', code: 'LN-2104', amount: 'TSh 600,000' },
    { name: 'John Mushi', code: 'LN-2105', amount: 'TSh 2,500,000' },
  ];

  return (
    <div className="bg-[#121614] border border-neutral-800/80 rounded-2xl p-6 shadow-xl">
      <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Pending Requests</h3>
      
      <div className="space-y-3">
        {requests.map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/60 gap-4">
            <div>
              <p className="text-sm font-bold text-white">{item.name}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{item.code} · <span className="text-amber-400 font-medium">{item.amount}</span></p>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold transition-all cursor-pointer">
                View
              </button>
              <button className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 text-xs font-semibold transition-all cursor-pointer">
                Approve
              </button>
              <button className="px-4 py-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 text-xs font-semibold transition-all cursor-pointer">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}