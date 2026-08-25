"use client";

import React, { useState } from 'react';
import { Settings, Shield, Bell, Database, Save, Globe, Sliders, ToggleLeft, ToggleRight, AlertTriangle } from 'lucide-react';

export default function SettingsPage() {
  const [settingsData, setSettingsData] = useState({
    systemName: 'Kijeda Microfinance & Loans',
    supportEmail: 'support@kijedaloans.co.tz',
    supportPhone: '+255 655 000 111',
    defaultInterest: '10',
    maxLimit: '5,000,000',
    currency: 'TZS',
    emailNotifications: true,
    smsAlerts: true,
    maintenanceMode: false,      // Kuzima/Kuamsha mfumo mzima
    allowRegistration: true,     // Kuruhusu/Kuzuia wateja wapya kujisajili
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettingsData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleToggle = (field) => {
    setSettingsData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('System settings and controls updated successfully!');
  };

  return (
    <div className="w-full bg-[#121614] min-h-screen text-white p-8">
      {/* Kichwa cha Ukurasa */}
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-wide">System Settings & Controls</h2>
        <p className="text-xs text-neutral-400 mt-1">Configure global parameters, manage loan limits, and control overall system operations.</p>
      </div>

      <form onSubmit={handleSave} className="max-w-4xl space-y-6">
        
        {/* 1. SYSTEM CONTROLS (Vidhibiti Vikuu vya Mfumo) */}
        <div className="bg-[#161b18] border border-neutral-800/80 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-800 text-emerald-400 font-semibold text-sm">
            <Sliders size={18} /> Master System Controls
          </div>
          <div className="space-y-4 text-xs">
            {/* Maintenance Mode Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/60">
              <div>
                <p className="font-bold text-white flex items-center gap-2">
                  <AlertTriangle size={14} className="text-amber-400" /> Maintenance Mode
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Temporarily block user access to the platform for system upgrades.</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('maintenanceMode')}
                className="text-emerald-400 focus:outline-none cursor-pointer"
              >
                {settingsData.maintenanceMode ? (
                  <ToggleRight size={32} className="text-amber-400" />
                ) : (
                  <ToggleLeft size={32} className="text-neutral-600" />
                )}
              </button>
            </div>

            {/* Allow New Registrations Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/60">
              <div>
                <p className="font-bold text-white">New User Registrations</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Allow new borrowers to sign up and create accounts on the platform.</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('allowRegistration')}
                className="focus:outline-none cursor-pointer"
              >
                {settingsData.allowRegistration ? (
                  <ToggleRight size={32} className="text-emerald-400" />
                ) : (
                  <ToggleLeft size={32} className="text-neutral-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 2. General Information */}
        <div className="bg-[#161b18] border border-neutral-800/80 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-800 text-emerald-400 font-semibold text-sm">
            <Globe size={18} /> General System Information
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-neutral-400 mb-1.5 font-medium">System / Company Name</label>
              <input
                type="text"
                name="systemName"
                value={settingsData.systemName}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500/50"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1.5 font-medium">Currency Symbol</label>
              <input
                type="text"
                name="currency"
                value={settingsData.currency}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500/50"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1.5 font-medium">Support Email</label>
              <input
                type="email"
                name="supportEmail"
                value={settingsData.supportEmail}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500/50"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1.5 font-medium">Support Phone Number</label>
              <input
                type="text"
                name="supportPhone"
                value={settingsData.supportPhone}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>
        </div>

        {/* 3. Loan Rules & Parameters */}
        <div className="bg-[#161b18] border border-neutral-800/80 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-800 text-emerald-400 font-semibold text-sm">
            <Settings size={18} /> Loan Parameters & Limits
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-neutral-400 mb-1.5 font-medium">Default Interest Rate (%)</label>
              <input
                type="number"
                name="defaultInterest"
                value={settingsData.defaultInterest}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500/50"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1.5 font-medium">Max Loan Limit (TZS)</label>
              <input
                type="text"
                name="maxLimit"
                value={settingsData.maxLimit}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>
        </div>

        {/* 4. Notifications */}
        <div className="bg-[#161b18] border border-neutral-800/80 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-800 text-emerald-400 font-semibold text-sm">
            <Bell size={18} /> Notifications & Alerts
          </div>
          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settingsData.emailNotifications}
                onChange={handleChange}
                className="w-4 h-4 rounded bg-neutral-900 border-neutral-800 text-emerald-500 focus:ring-0 cursor-pointer"
              />
              <span className="text-neutral-300">Receive email alerts when a user submits a new loan request</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="smsAlerts"
                checked={settingsData.smsAlerts}
                onChange={handleChange}
                className="w-4 h-4 rounded bg-neutral-900 border-neutral-800 text-emerald-500 focus:ring-0 cursor-pointer"
              />
              <span className="text-neutral-300">Enable SMS notification triggers for repayment due dates</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold text-xs transition-all cursor-pointer shadow-lg"
          >
            <Save size5={16} /> Save System Changes
          </button>
        </div>
      </form>
    </div>
  );
}