"use client";
import { useState } from "react";
import Link from "next/link";

export default function JoinPage() {
  const [plan, setPlan] = useState("pro"); // State ya Radio button

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 py-20">
      <div className="w-full max-w-xl bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
        <Link href="/" className="inline-block text-zinc-400 hover:text-white transition mb-6 text-sm">← Back to Home</Link>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">Join Our Community</h1>
          <p className="text-zinc-400 text-sm mt-2">Start your fitness journey with Yakwetu Gym</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Row 1: Name & Username */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase mb-3 tracking-widest">Full Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-700" />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase mb-3 tracking-widest">Username</label>
              <input type="text" placeholder="Unique username" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-700" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase mb-3 tracking-widest">Email Address</label>
            <input type="email" placeholder="Your email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-700" />
          </div>

          {/* Radio Buttons: Membership Plan */}
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase mb-4 tracking-widest">Select Membership Plan</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Starter', 'Pro', 'Elite'].map((item) => (
                <label key={item} className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all ${plan === item.toLowerCase() ? 'bg-red-600/10 border-red-600 text-white' : 'bg-zinc-950 border-zinc-800 text-zinc-500'}`}>
                  <input 
                    type="radio" 
                    name="plan" 
                    className="hidden" 
                    checked={plan === item.toLowerCase()} 
                    onChange={() => setPlan(item.toLowerCase())} 
                  />
                  <span className="font-bold">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Checkbox: Terms */}
          <div className="flex items-start gap-3 py-2">
            <input 
              type="checkbox" 
              className="mt-1 w-5 h-5 rounded border-zinc-800 bg-zinc-950 text-red-600 focus:ring-red-600 focus:ring-offset-zinc-900" 
            />
            <label className="text-zinc-500 text-sm leading-snug">
              I agree to the <span className="text-white hover:underline cursor-pointer">Terms of Service</span> and <span className="text-white hover:underline cursor-pointer">Privacy Policy</span>.
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-red-900/20 uppercase tracking-widest">
            Create Account
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-zinc-500 text-sm">
            Already a member? <Link href="/sign-in" className="text-white hover:text-red-500 transition-colors font-bold">Sign In</Link>
          </p>
        </div>

      </div>
    </div>
  );
}