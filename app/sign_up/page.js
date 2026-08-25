 'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { User, AtSign, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Manenosiri hayafanani!");
      return;
    }
    console.log("Signup Data:", formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0c0f0e] p-4 sm:p-6 font-sans relative overflow-hidden">
      
      {/* Background glow ndogo ya kijani kibichi */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Kadi Kuu ya Usajili */}
      <div className="w-full max-w-md bg-[#121614]/90 border border-neutral-800/80 rounded-3xl p-8 shadow-2xl relative z-10 backdrop-blur-xl">
        
        {/* Kichwa cha Habari */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            Lumina Finance
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400">
            Create your account to start managing your micro-loans.
          </p>
        </div>

        {/* Fomu */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                <User size={16} />
              </span>
              <input 
                type="text" 
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#181d1a] border border-neutral-800 focus:border-emerald-500 text-white text-xs sm:text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-neutral-600"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                <AtSign size={16} />
              </span>
              <input 
                type="text" 
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                placeholder="johndoe88"
                className="w-full bg-[#181d1a] border border-neutral-800 focus:border-emerald-500 text-white text-xs sm:text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-neutral-600"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                <Mail size={16} />
              </span>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-[#181d1a] border border-neutral-800 focus:border-emerald-500 text-white text-xs sm:text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-neutral-600"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                <Lock size={16} />
              </span>
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-[#181d1a] border border-neutral-800 focus:border-emerald-500 text-white text-xs sm:text-sm rounded-xl pl-10 pr-10 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-neutral-600"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-500 hover:text-neutral-300 cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                <Lock size={16} />
              </span>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-[#181d1a] border border-neutral-800 focus:border-emerald-500 text-white text-xs sm:text-sm rounded-xl pl-10 pr-10 py-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-neutral-600"
              />
              <button 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-500 hover:text-neutral-300 cursor-pointer"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Kitufe cha Join Now */}
          <button 
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl py-3.5 text-sm transition-all shadow-lg shadow-emerald-500/10 cursor-pointer mt-2"
          >
            Join Now
          </button>
        </form>

        {/* Maandishi ya Kuhamia Login */}
        <p className="text-center text-xs text-neutral-400 mt-6">
          Already have an account?{' '}
          <Link href="/log_in" className="text-emerald-400 font-medium hover:underline">
            Log In
          </Link>
        </p>

      </div>
    </div>
  );
}