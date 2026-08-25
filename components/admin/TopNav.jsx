"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Bell, Mail, Phone, Hash, LogOut } from 'lucide-react';

export default function TopNav() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef(null);

  // Kufunga dropdown ukibonyeza nje ya eneo lake
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#121614] border-b border-neutral-800/60 px-8 py-4 flex items-center justify-between text-white relative">
      <div>
        <h1 className="text-lg font-bold tracking-wide">System Overview</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Notifications Button with Dot */}
        <button
          type="button"
          aria-label="Notifications"
          className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer relative rounded-xl hover:bg-neutral-800/50"
        >
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400"></span>
        </button>

        {/* Admin Profile & Dropdown Container */}
        <div className="relative ml-2" ref={menuRef}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 py-1.5 px-3 rounded-full transition-all cursor-pointer"
          >
            <div className="text-right hidden sm:block">
              <span className="block text-xs font-medium text-neutral-300">Admin User</span>
              <span className="block text-[9px] uppercase tracking-wider text-amber-400">Supervisor</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-neutral-800 border border-amber-500/60 text-amber-400 flex items-center justify-center text-xs font-bold">
              AU
            </div>
          </button>

          {/* Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-3 w-72 bg-[#121614] border border-neutral-800 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2">
              {/* Header Info */}
              <div className="pb-3 border-b border-neutral-800/80">
                <p className="text-sm font-bold text-white">Admin User</p>
                <p className="text-xs text-neutral-400 mt-0.5">Supervisor Account</p>
              </div>

              {/* Details List */}
              <div className="py-3 space-y-3 text-xs">
                <div className="flex items-center gap-3 text-neutral-300">
                  <Mail size={15} className="text-amber-400 shrink-0" />
                  <span className="truncate">admin@omarmicrofinance.com</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <Phone size={15} className="text-amber-400 shrink-0" />
                  <span>Admin access</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <Hash size={15} className="text-amber-400 shrink-0" />
                  <span>ID: ADM-0001</span>
                </div>
              </div>

              {/* Sign Out Button */}
              <div className="border-t border-neutral-800/80 pt-3 mt-1">
                <button 
                  onClick={() => {
                    setShowProfileMenu(false);
                    alert("Signed out successfully!");
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-all text-xs font-semibold cursor-pointer"
                >
                  <LogOut size={15} /> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}