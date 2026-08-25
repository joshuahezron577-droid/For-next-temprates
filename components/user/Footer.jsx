'use client';
import React from 'react';
import { HiMail, HiPhone, HiGlobeAlt } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-zinc-800 text-zinc-400 text-xs py-12 px-6 md:px-12 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Column 1: Brand / About */}
        <div className="space-y-3 md:col-span-1">
          <h3 className="text-sm font-bold text-white tracking-wider">
            Omar <span className="text-emerald-400">microfinance</span>
          </h3>
          <p className="text-zinc-500 leading-relaxed text-[11px]">
            Your trusted financial partner providing seamless loan management, transparent repayment tracking, and instant support.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-2 text-[11px]">
            <li className="flex items-center space-x-2">
              <HiMail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a href="mailto:joshuahezron57@gmail.com" className="hover:text-amber-400 truncate">joshuahezron57@gmail.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <HiPhone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a href="tel:0696408701" className="hover:text-amber-400">0696408701</a>
            </li>
            <li className="flex items-center space-x-2">
              <HiGlobeAlt className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a href="https://trulink.io/" target="_blank" rel="noreferrer" className="hover:text-amber-400">trulink.io</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Security & Trust */}
        <div className="space-y-3 md:col-span-2">
          <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Security & Trust</h4>
          <p className="text-[11px] text-zinc-500 leading-relaxed max-w-md">
            All data transmissions are heavily encrypted. We prioritize your financial privacy and secure transactions.
          </p>
        </div>

      </div>

      {/* Bottom Row: Copyright & Horizontal Navigation Links (Staili ya Picha ya Pili) */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-zinc-800/60 flex flex-col md:flex-row items-center justify-center text-[11px] text-zinc-500 gap-4 text-center w-full">
        
        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} Omar microfinance. All rights reserved.</p>

     

      </div>
    </footer>
  );
}