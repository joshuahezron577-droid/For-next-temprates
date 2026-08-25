"use client";

import React, { useState } from 'react';
import { Eye, UserX, UserCheck, Shield, Mail, Phone, MoreVertical } from 'lucide-react';

export default function UsersManagementPage() {
  // Orodha ya watumiaji/wateja kwenye mfumo
  const [users, setUsers] = useState([
    {
      id: 'USR-301',
      name: 'Grace Mallya',
      email: 'grace.mallya@gmail.com',
      phone: '0655123456',
      activeLoans: 1,
      totalBorrowed: 'TZS 2,000,000',
      status: 'Active',
      initials: 'GM',
    },
    {
      id: 'USR-302',
      name: 'David Kimaro',
      email: 'david.kimaro@yahoo.com',
      phone: '0714988776',
      activeLoans: 1,
      totalBorrowed: 'TZS 4,500,000',
      status: 'Active',
      initials: 'DK',
    },
    {
      id: 'USR-303',
      name: 'Amani Juma',
      email: 'amani.juma@outlook.com',
      phone: '0696408701',
      activeLoans: 0,
      totalBorrowed: 'TZS 1,500,000',
      status: 'Pending Verification',
      initials: 'AJ',
    },
    {
      id: 'USR-304',
      name: 'Neema Mwakyusa',
      email: 'neema.m@gmail.com',
      phone: '0754332211',
      activeLoans: 0,
      totalBorrowed: 'TZS 1,200,000',
      status: 'Suspended',
      initials: 'NM',
    },
  ]);

  // Kitendo cha kuangalia profile ya mteja
  const handleViewUser = (name) => {
    alert(`Opening profile details and history for ${name}`);
  };

  // Kitendo cha kubadili status ya mteja (Active <-> Suspended)
  const handleToggleStatus = (id, name, currentStatus) => {
    const newStatus = currentStatus === 'Suspended' ? 'Active' : 'Suspended';
    setUsers(prevUsers =>
      prevUsers.map(user => user.id === id ? { ...user, status: newStatus } : user)
    );
    alert(`User ${name} status has been updated to ${newStatus}.`);
  };

  return (
    <div className="w-full bg-[#121614] min-h-screen text-white p-8">
      {/* Kichwa cha Ukurasa */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl font-bold tracking-wide">Users Management</h2>
          <p className="text-xs text-neutral-400 mt-1">Manage all registered borrowers, view their profiles, and control account statuses.</p>
        </div>

      </div>

      {/* Jedwali au Orodha ya Watumiaji (Users Table/List Cards) */}
      <div className="bg-[#161b18] border border-neutral-800/80 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/50 text-neutral-400 uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4 font-semibold">User Details</th>
                <th className="py-3 px-4 font-semibold">Contact Info</th>
                <th className="py-3 px-4 font-semibold">Active Loans</th>
                <th className="py-3 px-4 font-semibold">Total Borrowed</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-neutral-900/30 transition-all">
                    {/* Jina na ID */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                          {user.initials}
                        </div>
                        <div>
                          <p className="font-bold text-white">{user.name}</p>
                          <span className="text-[10px] text-neutral-400">{user.id}</span>
                        </div>
                      </div>
                    </td>

                    {/* Mawasiliano */}
                    <td className="py-4 px-4 text-neutral-300">
                      <div className="space-y-0.5">
                        <p className="flex items-center gap-1.5"><Phone size={12} className="text-neutral-500" /> {user.phone}</p>
                        <p className="flex items-center gap-1.5 text-neutral-400"><Mail size={12} className="text-neutral-500" /> {user.email}</p>
                      </div>
                    </td>

                    {/* Mikopo inayendelea */}
                    <td className="py-4 px-4">
                      <span className="font-medium text-neutral-200">{user.activeLoans} Active</span>
                    </td>

                    {/* Jumla ya aliyokopa */}
                    <td className="py-4 px-4">
                      <span className="font-semibold text-emerald-400">{user.totalBorrowed}</span>
                    </td>

                    {/* Hali ya Akaunti (Status) */}
                    <td className="py-4 px-4">
                      {user.status === 'Active' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium">
                          Active
                        </span>
                      ) : user.status === 'Pending Verification' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-medium">
                          Pending
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-medium">
                          Suspended
                        </span>
                      )}
                    </td>

                    {/* Vitendo vya Admin (Actions) */}
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleViewUser(user.name)}
                          title="View Profile"
                          className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all cursor-pointer"
                        >
                          <Eye size={14} />
                        </button>

                        <button
                          onClick={() => handleToggleStatus(user.id, user.name, user.status)}
                          title={user.status === 'Suspended' ? 'Activate User' : 'Suspend User'}
                          className={`p-2 rounded-xl border transition-all cursor-pointer ${
                            user.status === 'Suspended' 
                              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20' 
                              : 'bg-rose-500/10 border-rose-500/20 text-rose-400 hover:bg-rose-500/20'
                          }`}
                        >
                          {user.status === 'Suspended' ? <UserCheck size={14} /> : <UserX size={14} />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-neutral-500">
                    No users found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}