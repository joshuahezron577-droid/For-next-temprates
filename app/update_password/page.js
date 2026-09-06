'use client'

import { useState } from 'react'
import { supabase } from '@/lib/superbase'
import { useRouter } from 'next/navigation'

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  const router = useRouter()

  const handleUpdatePassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    setError(null)

    const { error: updateError } = await supabase.auth.updateUser({
      password: password,
    })

    if (updateError) {
      setError(updateError.message)
    } else {
      setMessage('Nenosiri lako limebadilishwa kwa mafanikio! Utahamishwa kwenda kwenye ukurasa wa kuingia...')
      setTimeout(() => {
        router.push('/log_in')
      }, 3000)
    }

    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0c0f0e] px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#121614] border border-neutral-800 p-8 shadow-xl">
        <h2 className="mb-2 text-2xl font-bold text-white">Weka Nenosiri Jipya</h2>
        <p className="mb-6 text-sm text-neutral-400">
          Andika nenosiri lako jipya la akaunti ya Omar Microfinance hapa chini.
        </p>

        {error && (
          <div className="mb-4 rounded-xl bg-rose-500/10 border border-rose-500/20 p-3 text-sm text-rose-400">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 text-sm text-emerald-400">
            {message}
          </div>
        )}

        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">Nenosiri Jipya</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-amber-500 hover:bg-amber-400 py-2.5 font-semibold text-black transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Inahifadhi...' : 'Badilisha Nenosiri'}
          </button>
        </form>
      </div>
    </div>
  )
}
