import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Fake delay to simulate request
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! I\'ll reply shortly.')
    } catch (e) {
      setStatus('Something went wrong.')
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s build something great</h2>
          <p className="mt-2 text-slate-300">Tell me about your project, timeline, and goals.</p>
        </div>

        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 md:p-8 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="jane@company.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea rows="4" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Share a few details..." />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-slate-300">
              <Mail size={18} />
              <span className="text-sm">you@domain.com</span>
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_8px_40px_rgba(56,189,248,0.55)] transition-all">
              <Send size={18} /> Send
            </button>
          </div>

          {status && <p className="mt-4 text-sm text-slate-300">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}
