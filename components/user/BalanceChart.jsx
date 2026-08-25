export default function BalanceChart() {
  return (
    <div className="bg-[#121212] border border-zinc-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">Balance Trend</h3>
          <p className="text-xs text-zinc-400">Cumulative loan balance over 7 months</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg">
          Last 6 Months
        </span>
      </div>

      <div className="w-full h-64 mt-2">
        <svg viewBox="0 0 700 260" className="h-full w-full" role="img" aria-label="Balance trend rising over seven months">
          <defs><linearGradient id="balanceFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#10b981" stopOpacity=".35" /><stop offset="1" stopColor="#10b981" stopOpacity="0" /></linearGradient></defs>
          {[45, 95, 145, 195].map((y) => <line key={y} x1="30" x2="680" y1={y} y2={y} stroke="#27272a" strokeDasharray="4 6" />)}
          <path d="M30 190 C90 185 105 210 155 165 S235 180 285 145 S365 160 420 120 S500 130 555 95 S625 85 680 55 L680 220 L30 220 Z" fill="url(#balanceFill)" />
          <path d="M30 190 C90 185 105 210 155 165 S235 180 285 145 S365 160 420 120 S500 130 555 95 S625 85 680 55" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
          <g fill="#71717a" fontSize="12"><text x="25" y="245">Feb</text><text x="130" y="245">Mar</text><text x="235" y="245">Apr</text><text x="340" y="245">May</text><text x="445" y="245">Jun</text><text x="550" y="245">Jul</text><text x="650" y="245">Aug</text></g>
        </svg>
      </div>
    </div>
  );
}