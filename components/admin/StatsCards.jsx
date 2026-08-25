import React from 'react';
import { Users, Clock, Wallet, TrendingUp, TrendingDown } from 'lucide-react';

export default function StatsCards() {
  const stats = [
    { title: 'Total Users', value: '5', change: '▲ 2 vs last month', positive: true, icon: Users, color: 'text-amber-400' },
    { title: 'Pending Requests', value: '3', change: '▲ 2 vs last month', positive: true, icon: Clock, color: 'text-rose-400' },
    { title: 'Active Loans', value: '2', change: '▼ 1 vs last month', positive: false, icon: Wallet, color: 'text-emerald-400' },
    { title: 'Total Disbursed', value: 'TSh 2,000,000', change: '▲ 15% vs last month', positive: true, icon: TrendingUp, color: 'text-amber-400' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-[#121614] border border-neutral-800/80 rounded-2xl p-5 shadow-xl relative overflow-hidden">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-medium text-neutral-400">{item.title}</span>
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400">
                <Icon size={16} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-white mb-2">{item.value}</div>
            <div className={`text-[11px] font-medium ${item.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
              {item.change}
            </div>
          </div>
        );
      })}
    </div>
  );
}