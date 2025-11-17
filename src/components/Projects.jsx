import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description: 'Cross-platform toolkit with CRDT-based sync, presence, and offline-first data.',
    tags: ['TypeScript', 'React', 'CRDT', 'WebRTC'],
  },
  {
    title: 'AI-Powered Design System',
    description: 'Token-driven UI engine with dynamic theming and accessible components.',
    tags: ['Node', 'Design Tokens', 'Accessibility', 'AI'],
  },
  {
    title: 'Edge Analytics Platform',
    description: 'Streaming ETL on the edge with WASM transforms and sub-second dashboards.',
    tags: ['Rust', 'WASM', 'Kafka', 'Next.js'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Projects</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">A snapshot of recent work focused on performance, thoughtful UX, and measurable impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur hover:border-cyan-400/30 hover:bg-slate-900/80 transition-all"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-400/20 transition-colors" />
              <div className="relative">
                <h3 className="text-white font-semibold text-xl">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-cyan-200/90 bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded-md">{t}</span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 text-slate-300">
                  <button className="inline-flex items-center gap-1 hover:text-white transition-colors">
                    <Github size={16} /> Code
                  </button>
                  <button className="inline-flex items-center gap-1 hover:text-white transition-colors">
                    <ExternalLink size={16} /> Live
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
