'use client';
import React, { useState } from 'react';
import {
  HiMail, HiPhone, HiCheckCircle, HiCurrencyDollar,
  HiUsers, HiDocumentText, HiChartBar, HiCog, HiShieldCheck
} from 'react-icons/hi';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';

// ─── System guide steps ──────────────────────────────────────────────────────
const WORKFLOW = [
  {
    step: '01',
    title: 'Loan Requests',
    icon: HiDocumentText,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
    desc: 'Wateja wanawasilisha maombi ya mikopo kupitia dashboard yao. Nenda "Loan Requests" → tab ya "Pending" → kagua ombi → bonyeza "Idhinisha" au "Kataa".',
    tips: [
      'Angalia ID Document ya mteja kabla ya kuidhinisha',
      'Kagua taarifa za Guarantor kwenye panel ya "Maelezo"',
      'Ukiidhinisha, mkopo unakuwa "Active" moja kwa moja',
    ],
  },
  {
    step: '02',
    title: 'Active Loans & Repayments',
    icon: HiCurrencyDollar,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
    desc: 'Fuatilia mikopo yote iliyo hai. Ukipokea malipo kutoka kwa mteja, weka kiasi kwenye input ya "TZS" kisha bonyeza "Thibitisha" — mfumo utasasisha salio na ratiba.',
    tips: [
      'Weka kiasi halisi kilicholipwa na mteja',
      'Mkopo unapofikia 100% unabadilika kuwa "Completed" kiotomatiki',
      'Bonyeza "Maelezo" kuona taarifa za Guarantor',
    ],
  },
  {
    step: '03',
    title: 'Users Management',
    icon: HiUsers,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
    desc: 'Simamia akaunti za wateja wote. Unaweza kusimamisha (Suspend) akaunti ya mteja — hataweza kuingia tena hadi uamsha upya.',
    tips: [
      'Bonyeza Eye icon kuona historia ya mikopo ya mteja',
      'Suspend inazuia mteja kuingia mara moja',
      'Activate inarejesha uwezo wa kuingia',
    ],
  },
  {
    step: '04',
    title: 'System Logs',
    icon: HiChartBar,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
    desc: 'Audit trail kamili ya kila tukio — maombi, idhini, malipo, na mikopo iliyokamilika. Tumia filter na search kupata rekodi unayoitaka.',
    tips: [
      'Filter: ALL / REQUEST / APPROVED / REPAYMENT / COMPLETED / REJECTED',
      'Tafuta kwa jina la mteja au Log ID',
      'Read-only — haiwezi kubadilishwa',
    ],
  },
  {
    step: '05',
    title: 'System Settings',
    icon: HiCog,
    color: 'text-zinc-400',
    bg: 'bg-zinc-400/10 border-zinc-400/20',
    desc: 'Badilisha mipangilio ya mfumo — riba ya default, kikomo cha mkopo, maintenance mode, na usajili wa wateja wapya.',
    tips: [
      'Maintenance Mode ON → login inazuiwa kwa wateja wote',
      'Allow Registration OFF → wateja wapya hawawezi kusajili',
      'Max Loan Limit → inazuia ombi kubwa kuliko kiasi hicho',
    ],
  },
];

export default function AdminHelpPage() {
  const [openStep, setOpenStep] = useState(null);

  return (
    <div className="bg-[#121212] border border-zinc-800 p-6 md:p-10 rounded-2xl shadow-xl max-w-6xl mx-auto text-white space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <HiShieldCheck className="w-7 h-7 text-amber-400" />
          Admin Help & System Guide
        </h2>
        <div className="w-10 h-1 bg-amber-400 rounded-full mt-2 mb-2" />
        <p className="text-sm text-zinc-400">
          Mwongozo wa jinsi ya kutumia Omar Microfinance Admin Console — hatua kwa hatua.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT: System Workflow Guide */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            System Workflow — Jinsi Mfumo Unavyofanya Kazi
          </h3>

          {WORKFLOW.map((item) => {
            const Icon = item.icon;
            const isOpen = openStep === item.step;

            return (
              <div
                key={item.step}
                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition"
              >
                {/* Header — clickable */}
                <button
                  onClick={() => setOpenStep(isOpen ? null : item.step)}
                  className="w-full flex items-center justify-between p-5 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.bg}`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${item.color}`}>
                        Step {item.step}
                      </span>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                    </div>
                  </div>
                  <span className={`text-zinc-500 text-lg transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-5 pb-5 space-y-3 border-t border-zinc-800">
                    <p className="text-sm text-zinc-300 mt-3 leading-relaxed">{item.desc}</p>
                    <div className="space-y-1.5 pt-1">
                      {item.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                          <HiCheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${item.color}`} />
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT: Contact */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Wasiliana Nasi</h3>
            <div className="w-10 h-1 bg-amber-400 rounded-full" />
          </div>

          <div className="space-y-4 pt-2">

            {/* Email */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4 hover:border-zinc-700 transition">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <HiMail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Email Us</p>
                <a href="mailto:joshuahezron577@gmail.com" className="text-sm font-bold text-white hover:text-amber-400 transition">
                  joshuahezron577@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4 hover:border-zinc-700 transition">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <HiPhone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Call Us</p>
                <a href="tel:+255696408701" className="text-sm font-bold text-white hover:text-amber-400 transition">
                  0696408701
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4 hover:border-zinc-700 transition">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <HiChatBubbleLeftRight className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">WhatsApp</p>
                <a href="https://wa.me/255773753292" target="_blank" rel="noreferrer" className="text-sm font-bold text-amber-400 hover:underline transition">
                  0773753292
                </a>
              </div>
            </div>

          </div>

          {/* What Next */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-xs text-zinc-500 space-y-2">
            <p className="text-white font-bold text-sm mb-1">What Next?</p>
            <div className="w-8 h-0.5 bg-amber-400 rounded-full mb-3" />
            <p><span className="text-zinc-300 font-semibold">1. Instant Review:</span></p>
            <p><span className="text-zinc-300 font-semibold">2. Fast Feedback:</span></p>
            <p><span className="text-zinc-300 font-semibold">3. Issue Resolution</span></p>
          </div>
        </div>

      </div>
    </div>
  );
}
