import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.5)]" />
            <span className="text-white font-semibold tracking-tight">Software Engineer</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_8px_40px_rgba(56,189,248,0.55)] transition-all">
              <Mail size={18} /> Hire Me
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-6 space-y-4">
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#contact" onClick={close} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white">
                <Mail size={18} /> Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
