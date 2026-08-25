import React from 'react';

export default function LineChartSection() {
  return (
    <div className="bg-[#121614] border border-neutral-800/80 rounded-2xl p-6 shadow-xl relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Disbursement Trend</h3>
          <p className="text-xs text-neutral-400 mt-0.5">Cumulative loan disbursements over 7 months</p>
        </div>
        
      </div>

      {/* Sehemu ya muonekano wa grafu (SVG Line simulated) */}
      <div className="h-48 w-full relative flex flex-col justify-end pt-6">
        {/* Laini za nyuma za kuongozea vipimo */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 pb-8">
          <div className="border-b border-neutral-700 w-full text-[10px] text-neutral-400">920k</div>
          <div className="border-b border-neutral-700 w-full text-[10px] text-neutral-400">690k</div>
          <div className="border-b border-neutral-700 w-full text-[10px] text-neutral-400">460k</div>
          <div className="border-b border-neutral-700 w-full text-[10px] text-neutral-400">230k</div>
          <div className="border-b border-neutral-700 w-full text-[10px] text-neutral-400">0</div>
        </div>

        {/* Mstari wa Dhahabu wa Grafu */}
        <svg className="w-full h-36 overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 150">
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 20 120 L 130 90 L 240 100 L 350 110 L 460 70 L 570 85 L 680 50"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 20 120 L 130 90 L 240 100 L 350 110 L 460 70 L 570 85 L 680 50 L 680 150 L 20 150 Z"
            fill="url(#glow)"
          />
          {/* Vituo vya Vidoti kwenye Mstari */}
          <circle cx="20" cy="120" r="4" fill="#f59e0b" />
          <circle cx="130" cy="90" r="4" fill="#f59e0b" />
          <circle cx="240" cy="100" r="4" fill="#f59e0b" />
          <circle cx="350" cy="110" r="4" fill="#f59e0b" />
          <circle cx="460" cy="70" r="4" fill="#f59e0b" />
          <circle cx="570" cy="85" r="4" fill="#f59e0b" />
          <circle cx="680" cy="50" r="4" fill="#f59e0b" />
        </svg>

        {/* MIEZI CHINI YA GRAFU */}
        <div className="flex justify-between text-[11px] font-medium text-neutral-400 mt-3 px-2">
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
        </div>
      </div>
    </div>
  );
}