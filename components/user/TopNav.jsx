'use client';
import React, { useState, useRef, useEffect } from 'react';
import { HiBell, HiMail, HiPhone, HiLogout, HiIdentification } from 'react-icons/hi';

export default function TopNav({ 
  userName = "Amani Juma", 
  userEmail = "joshuahezron57@gmail.com", 
  userPhone = "0696408701",
  userId = "TRU-8902"
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  // Mock notifications coming centrally from Admin
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Loan Approved', desc: 'Admin approved your recent loan application.', time: '10m ago', unread: true },
    { id: 2, title: 'Repayment Reminder', desc: 'Your upcoming installment is due in 3 days.', time: '1h ago', unread: true },
    { id: 3, title: 'System Update', desc: 'TruLink central security protocols updated.', time: '1d ago', unread: false },
  ]);

  const profileRef = useRef(null);
  const notifRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const handleLogout = () => {
    alert('Logging out from central system...');
  };

  return (
    <header className="w-full bg-[#121212] border-b border-zinc-800 px-6 py-4 flex items-center justify-between text-white relative z-50">
      
      {/* Upande wa Kushoto: Jina la mfumo na salamu */}
      <div>
        <h1 className="text-xl font-bold tracking-wide">
          Omar <span className="text-emerald-400">microfinance</span>
        </h1>
      </div>

      {/* Upande wa Kulia: Notification Bell, User Profile na Sehemu za Log Out */}
      <div className="flex items-center space-x-4">
        
        {/* ================= NOTIFICATION DROPDOWN ================= */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
            className="relative p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-full transition cursor-pointer"
          >
            {notifications.some(n => n.unread) && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            )}
            <HiBell className="w-5 h-5" />
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-3 w-80 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl py-3 text-xs text-zinc-300 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between px-4 pb-3 border-b border-zinc-800">
                <span className="font-bold text-white uppercase tracking-wider">Admin Notifications</span>
                <button onClick={markAllAsRead} className="text-[10px] text-amber-400 hover:underline">Mark all read</button>
              </div>

              <div className="divide-y divide-zinc-800/60 max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className={`p-3.5 hover:bg-zinc-800/40 transition ${n.unread ? 'bg-zinc-800/20' : ''}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white">{n.title}</span>
                      <span className="text-[10px] text-zinc-500">{n.time}</span>
                    </div>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ================= USER PROFILE DROPDOWN (LOGOUT SEHEMU YA 1) ================= */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
            className="flex items-center space-x-3 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full hover:border-zinc-700 transition cursor-pointer"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-white leading-tight">{userName}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-zinc-950 font-bold shadow-md">
              {userName.charAt(0)}
            </div>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-4 text-xs text-zinc-300 space-y-4 animate-in fade-in slide-in-from-top-2">
              
              {/* Profile Header Info */}
              <div className="border-b border-zinc-800 pb-3">
                <p className="text-sm font-bold text-white">{userName}</p>
                <p className="text-[11px] text-zinc-500">Account Profile</p>
              </div>

              {/* Central Details (Email, Phone & Customer ID) */}
              <div className="space-y-2 text-zinc-400">
                <div className="flex items-center space-x-2.5 truncate">
                  <HiMail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="truncate">{userEmail}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <HiPhone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{userPhone}</span>
                </div>
                {/* Vitu 2 vilivyoongezwa hapa */}
                <div className="flex items-center space-x-2.5">
                  <HiIdentification className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>ID: {userId}</span>
                </div>
              </div>

              {/* LOGOUT SEHEMU YA 1 (Ndani ya Dropdown) */}
              <div className="pt-2 border-t border-zinc-800">
                <button 
                  onClick={handleLogout}
                  className="w-full bg-zinc-800/80 hover:bg-red-500/10 hover:text-red-400 text-zinc-300 font-medium py-2 px-3 rounded-xl transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <HiLogout className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>

            </div>
          )}
        </div>

        {/* ================= LOGOUT SEHEMU YA 2 (Kitufe cha Nje Moja kwa Moja) ================= */}


      </div>
    </header>
  );
}