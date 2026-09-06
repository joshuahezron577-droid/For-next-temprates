'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Settings, Shield, Bell, Save, Globe,
  Sliders, ToggleLeft, ToggleRight, AlertTriangle,
  RefreshCw, CheckCircle2, Loader2
} from 'lucide-react';
import { supabase } from '@/lib/superbase';

// ─── Default values (fallback kama DB haina data bado) ───────────────────────
const DEFAULTS = {
  system_name:          'Omar Microfinance',
  support_email:        'support@omarfinance.co.tz',
  support_phone:        '+255 000 000 000',
  currency:             'TZS',
  default_interest:     '30',
  max_loan_limit:       '10000000',
  email_notifications:  'true',
  sms_alerts:           'true',
  maintenance_mode:     'false',
  allow_registration:   'true',
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function SettingsPage() {
  const [settings, setSettings]   = useState(DEFAULTS);
  const [loading, setLoading]     = useState(true);
  const [saving, setSaving]       = useState(false);
  const [toast, setToast]         = useState(null);
  const [tableExists, setTableExists] = useState(true);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  // ── Fetch settings kutoka Supabase ────────────────────────────────────────
  const fetchSettings = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('system_settings')
      .select('key, value');

    if (error) {
      // Table haipo bado — tumia defaults, onyesha notice
      if (error.code === '42P01') setTableExists(false);
      setLoading(false);
      return;
    }

    if (data && data.length > 0) {
      const mapped = { ...DEFAULTS };
      data.forEach(row => {
        if (row.key in DEFAULTS) mapped[row.key] = row.value;
      });
      setSettings(mapped);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  // ── Save settings kwenye Supabase ─────────────────────────────────────────
  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);

    // Upsert kila key-value pair
    const rows = Object.entries(settings).map(([key, value]) => ({ key, value: String(value) }));

    const { error } = await supabase
      .from('system_settings')
      .upsert(rows, { onConflict: 'key' });

    if (error) {
      showToast('error', `Failed to save: ${error.message}`);
    } else {
      showToast('success', 'System settings saved successfully.');
    }

    setSaving(false);
  };

  const set = (key, value) => setSettings(prev => ({ ...prev, [key]: String(value) }));
  const toggle = (key) => setSettings(prev => ({ ...prev, [key]: prev[key] === 'true' ? 'false' : 'true' }));
  const bool = (key) => settings[key] === 'true';

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="w-full bg-[#0c0f0e] min-h-screen text-white p-6 md:p-8">

      {/* TOAST */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-xl border shadow-2xl text-sm font-medium transition-all ${
          toast.type === 'success'
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
        }`}>
          {toast.type === 'success' ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}
          {toast.message}
        </div>
      )}

      {/* HEADER */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-wide flex items-center gap-2">
            <Settings size={20} className="text-emerald-400" />
            System Settings &amp; Controls
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Configure global parameters, manage loan limits, and control overall system operations.
          </p>
        </div>
        <button
          onClick={fetchSettings}
          disabled={loading}
          className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 rounded-xl text-xs font-semibold transition disabled:opacity-50 cursor-pointer shrink-0"
        >
          <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {/* No table notice */}
      {!tableExists && (
        <div className="mb-5 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-xs text-amber-400 flex items-start gap-2">
          <AlertTriangle size={14} className="shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">system_settings table not found in Supabase.</p>
            <p className="mt-0.5 text-amber-400/70">
              Run this SQL to create it:{' '}
              <code className="bg-amber-500/10 px-1 rounded">
                CREATE TABLE public.system_settings (key TEXT PRIMARY KEY, value TEXT);
              </code>
            </p>
            <p className="mt-1 text-amber-400/70">Changes will be saved locally until the table is created.</p>
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex items-center gap-2 text-zinc-500 text-sm py-8">
          <Loader2 size={16} className="animate-spin" /> Loading settings...
        </div>
      )}

      {!loading && (
        <form onSubmit={handleSave} className="max-w-4xl space-y-6">

          {/* ── 1. MASTER CONTROLS ──────────────────────────────────── */}
          <div className="bg-[#121614] border border-neutral-800/80 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-800 text-emerald-400 font-semibold text-sm">
              <Sliders size={16} /> Master System Controls
            </div>
            <div className="space-y-3 text-xs">

              {/* Maintenance Mode */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/60">
                <div>
                  <p className="font-bold text-white flex items-center gap-2">
                    <AlertTriangle size={13} className="text-amber-400" /> Maintenance Mode
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Temporarily block user access to the platform for system upgrades.
                  </p>
                </div>
                <button type="button" onClick={() => toggle('maintenance_mode')} className="cursor-pointer focus:outline-none">
                  {bool('maintenance_mode')
                    ? <ToggleRight size={34} className="text-amber-400" />
                    : <ToggleLeft  size={34} className="text-neutral-600" />}
                </button>
              </div>

              {/* Allow Registration */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/60">
                <div>
                  <p className="font-bold text-white">New User Registrations</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Allow new borrowers to sign up and create accounts on the platform.
                  </p>
                </div>
                <button type="button" onClick={() => toggle('allow_registration')} className="cursor-pointer focus:outline-none">
                  {bool('allow_registration')
                    ? <ToggleRight size={34} className="text-emerald-400" />
                    : <ToggleLeft  size={34} className="text-neutral-600" />}
                </button>
              </div>
            </div>
          </div>

          {/* ── 2. GENERAL INFO ─────────────────────────────────────── */}
          <div className="bg-[#121614] border border-neutral-800/80 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-800 text-emerald-400 font-semibold text-sm">
              <Globe size={16} /> General System Information
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {[
                { label: 'System / Company Name', key: 'system_name',   type: 'text'  },
                { label: 'Currency Symbol',        key: 'currency',      type: 'text'  },
                { label: 'Support Email',          key: 'support_email', type: 'email' },
                { label: 'Support Phone Number',   key: 'support_phone', type: 'text'  },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-neutral-400 mb-1.5 font-medium">{f.label}</label>
                  <input
                    type={f.type}
                    value={settings[f.key]}
                    onChange={e => set(f.key, e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-emerald-500/50 transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── 3. LOAN PARAMETERS ──────────────────────────────────── */}
          <div className="bg-[#121614] border border-neutral-800/80 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-800 text-emerald-400 font-semibold text-sm">
              <Settings size={16} /> Loan Parameters &amp; Limits
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1.5 font-medium">Default Interest Rate (%)</label>
                <input
                  type="number"
                  min="0" max="100"
                  value={settings.default_interest}
                  onChange={e => set('default_interest', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-emerald-500/50 transition"
                />
              </div>
              <div>
                <label className="block text-neutral-400 mb-1.5 font-medium">Max Loan Limit (TZS)</label>
                <input
                  type="number"
                  min="0"
                  value={settings.max_loan_limit}
                  onChange={e => set('max_loan_limit', e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-emerald-500/50 transition"
                />
                <p className="text-neutral-600 mt-1">
                  = TZS {Number(settings.max_loan_limit || 0).toLocaleString('en-TZ')}
                </p>
              </div>
            </div>
          </div>

          {/* ── 4. NOTIFICATIONS ────────────────────────────────────── */}
          <div className="bg-[#121614] border border-neutral-800/80 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-neutral-800 text-emerald-400 font-semibold text-sm">
              <Bell size={16} /> Notifications &amp; Alerts
            </div>
            <div className="space-y-3 text-xs">
              {[
                { key: 'email_notifications', label: 'Receive email alerts when a user submits a new loan request' },
                { key: 'sms_alerts',          label: 'Enable SMS notification triggers for repayment due dates' },
              ].map(item => (
                <label key={item.key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bool(item.key)}
                    onChange={() => toggle(item.key)}
                    className="w-4 h-4 rounded bg-neutral-900 border-neutral-700 text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500"
                  />
                  <span className="text-neutral-300">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ── SAVE BUTTON ─────────────────────────────────────────── */}
          <div className="flex justify-end pb-4">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all cursor-pointer disabled:opacity-60 shadow-lg"
            >
              {saving
                ? <><Loader2 size={14} className="animate-spin" /> Saving...</>
                : <><Save size={14} /> Save System Changes</>
              }
            </button>
          </div>

        </form>
      )}
    </div>
  );
}
