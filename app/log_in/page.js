'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Weka mantiki yako ya kuingia kwenye mfumo (Authentication logic) hapa
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0c0f0e] text-white font-sans">
      {/* Upande wa Kushoto: Branding / Info */}
      <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between border-r border-neutral-800/60 relative overflow-hidden">
        {/* Glow ya nyuma ya kijani hafifu */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div>
          {/* Logo ya Kampuni */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-black text-lg shadow-lg shadow-emerald-500/20">
              O
            </div>
            <span className="text-lg font-medium tracking-wide">
              Omar <span className="text-emerald-400">microfinance</span>
            </span>
          </div>
        </div>

        <div className="my-auto max-w-lg">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
            Finance that moves with you
          </p>
          <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Small steps. <br />
            <span className="text-emerald-400">Big possibilities.</span>
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed">
            Simple, fair financial tools built for people building something of their own.
          </p>
        </div>

      </div>

      {/* Upande wa Kulia: Fomu ya Kuingia (Sign In Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <div className="w-full max-w-md space-y-8">
          
          {/* Mobile Logo (Inaonekana kwenye simu tu) */}
          <div className="flex lg:hidden items-center gap-3 mb-6">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-black text-base">
              O
            </div>
            <span className="text-base font-medium">
              Omar <span className="text-emerald-400">microfinance</span>
            </span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1">
              Welcome back
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Manage your loans, repayments, and growth.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div>
              <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                Email address
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="amina@omarfinance.co"
                className="w-full bg-[#121614] border border-neutral-800 focus:border-emerald-500 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-neutral-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                Password
              </label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#121614] border border-neutral-800 focus:border-emerald-500 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-neutral-600"
              />
            </div>

            <div className="flex items-center justify-between text-sm py-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#121614] border-neutral-700 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer accent-emerald-500"
                />
                <span className="text-neutral-300 text-xs">Remember me</span>
              </label>

              <a href="#forgot" className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
                Forgot password?
              </a>
            </div>

            <button 
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl py-3 text-sm transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
            >
              Sign in &rarr;
            </button>
          </form>

          <p className="text-center text-xs text-neutral-400 mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/sign_up" className="text-emerald-400 font-medium hover:underline">
              Join Now
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}