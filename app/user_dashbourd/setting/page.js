'use client';
import React, { useState } from 'react';
import { HiUser, HiLockClosed, HiBell, HiCheckCircle } from 'react-icons/hi';

export default function SettingsPage() {
  // State kwa ajili ya Profile
  const [profileData, setProfileData] = useState({
    fullName: 'Joshua Hezron',
    email: 'joshuahezron57@gmail.com',
    phone: '0696408701',
  });

  // State kwa ajili ya Password
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // State kwa ajili ya Notifications
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: true,
    loanReminders: true,
  });

  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // Simulating API save action
    setTimeout(() => {
      setLoading(false);
      setMessage({ type: 'success', text: 'Settings updated successfully!' });
      
      setTimeout(() => setMessage({ type: '', text: '' }), 4000);
    }, 1000);
  };

  return (
    <div className="bg-[#121212] border border-zinc-800 p-6 md:p-10 rounded-2xl shadow-xl max-w-5xl mx-auto text-white space-y-8">
      
      {/* HEADER */}
      <div className="border-b border-zinc-800 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-1">Account Settings</h2>
        <p className="text-xs text-zinc-400">Manage your profile details, security preferences, and notification channels.</p>
      </div>

      {message.text && (
        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-xl flex items-center space-x-3 text-xs">
          <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>{message.text}</span>
        </div>
      )}

      <form onSubmit={handleSaveSettings} className="space-y-8">
        
        {/* SECTION 1: PROFILE INFORMATION */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl space-y-6">
          <div className="flex items-center space-x-3 border-b border-zinc-800/80 pb-3">
            <HiUser className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">Personal Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={profileData.fullName}
                onChange={handleProfileChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 text-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 text-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Phone Number</label>
              <input 
                type="text" 
                name="phone"
                value={profileData.phone}
                onChange={handleProfileChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 text-white transition"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: SECURITY / PASSWORD */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl space-y-6">
          <div className="flex items-center space-x-3 border-b border-zinc-800/80 pb-3">
            <HiLockClosed className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">Change Password</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Current Password</label>
              <input 
                type="password" 
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 text-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">New Password</label>
              <input 
                type="password" 
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 text-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Confirm New Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 text-white transition"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: NOTIFICATION PREFERENCES */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl space-y-6">
          <div className="flex items-center space-x-3 border-b border-zinc-800/80 pb-3">
            <HiBell className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">Notifications & Alerts</h3>
          </div>

          <div className="space-y-4 text-xs">
            
            <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
              <div>
                <p className="font-semibold text-white">Email Notifications</p>
                <p className="text-zinc-400 text-[11px]">Receive updates and statements via joshuahezron57@gmail.com</p>
              </div>
              <input 
                type="checkbox" 
                checked={notifications.emailAlerts}
                onChange={() => handleNotificationToggle('emailAlerts')}
                className="w-4 h-4 accent-amber-400 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
              <div>
                <p className="font-semibold text-white">SMS Alerts</p>
                <p className="text-zinc-400 text-[11px]">Receive transaction updates via 0696408701</p>
              </div>
              <input 
                type="checkbox" 
                checked={notifications.smsAlerts}
                onChange={() => handleNotificationToggle('smsAlerts')}
                className="w-4 h-4 accent-amber-400 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-semibold text-white">Loan Due Reminders</p>
                <p className="text-zinc-400 text-[11px]">Get notified a few days before your installment target date</p>
              </div>
              <input 
                type="checkbox" 
                checked={notifications.loanReminders}
                onChange={() => handleNotificationToggle('loanReminders')}
                className="w-4 h-4 accent-amber-400 cursor-pointer"
              />
            </div>

          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end pt-2">
          <button 
            type="submit" 
            disabled={loading}
            className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
          >
            {loading ? 'Saving Changes...' : 'Save Changes'}
          </button>
        </div>

      </form>
    </div>
  );
}