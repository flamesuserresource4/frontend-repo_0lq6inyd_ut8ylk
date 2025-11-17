import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-1">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
              <h3 className="relative text-white font-semibold text-xl">About Me</h3>
              <p className="relative mt-3 text-slate-300 text-sm leading-relaxed">
                I’m a software engineer with a love for crisp interfaces, resilient APIs, and smooth developer experience. I enjoy shipping products that feel fast, reliable, and refined.
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-2 space-y-6">
            {[
              {
                title: 'Frontend Engineering',
                text: 'Design systems, performance optimization, accessibility-first UIs, and animations that serve the story.'
              },
              {
                title: 'Backend & Infra',
                text: 'REST/GraphQL APIs, microservices, observability, and cloud-native deployments.'
              },
              {
                title: 'Product Mindset',
                text: 'User-centered approach, rapid prototyping, tight feedback loops, and measurable outcomes.'
              }
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
                <h4 className="text-white font-medium text-lg">{item.title}</h4>
                <p className="mt-2 text-slate-300 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
