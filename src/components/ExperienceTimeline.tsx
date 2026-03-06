import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { experiences } from '../data/experience';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-accent/30 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/50 bg-background text-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl glow-border transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-accent">{exp.company}</h3>
                  <span className="text-xs font-mono text-text-secondary bg-white/5 px-2 py-1 rounded-md">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm font-medium text-text-primary mb-3">{exp.role}</p>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <button 
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  className="flex items-center gap-1 text-xs font-bold text-accent hover:gap-2 transition-all mb-4"
                >
                  {expandedId === exp.id ? 'Show Less' : 'Read Detailed Experience'} <ChevronRight size={14} className={expandedId === exp.id ? 'rotate-90' : ''} />
                </button>

                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-6 border-t border-white/5 text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                        {exp.fullDetails}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-accent/70 px-2 py-0.5 border border-accent/20 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
