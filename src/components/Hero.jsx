import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden pt-28">
      {/* Background gradient accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-[60vh] w-[60vh] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-[60vh] w-[60vh] rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
              Building bold, modern software experiences
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-6 text-lg text-slate-200 max-w-xl">
              I’m a software engineer focused on crafting performant interfaces, scalable systems, and delightful interactions.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex items-center gap-4">
              <a href="#projects" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_8px_40px_rgba(56,189,248,0.55)] transition-all">View Work</a>
              <a href="#contact" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 font-medium backdrop-blur hover:bg-white/10 transition-all">Get in touch</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
