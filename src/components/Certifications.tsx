import { motion } from 'motion/react';
import { certifications } from '../data/certifications';
import { ExternalLink, Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-text-secondary">Professional credentials and achievements</p>
        </motion.div>

        <div className="overflow-x-auto glass rounded-3xl border border-white/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-bottom border-white/5">
                <th className="p-6 text-accent font-mono text-sm uppercase tracking-wider">Certification</th>
                <th className="p-6 text-accent font-mono text-sm uppercase tracking-wider hidden md:table-cell">Issuer</th>
                <th className="p-6 text-accent font-mono text-sm uppercase tracking-wider hidden lg:table-cell">Year</th>
                <th className="p-6 text-accent font-mono text-sm uppercase tracking-wider text-right">Link</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((cert, index) => (
                <motion.tr 
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-bottom border-white/5 hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <Award size={18} className="text-accent/50 group-hover:text-accent transition-colors" />
                      <span className="font-bold text-text-primary group-hover:text-accent transition-colors">
                        {cert.title}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 text-text-secondary text-sm hidden md:table-cell">
                    {cert.issuer}
                  </td>
                  <td className="p-6 hidden lg:table-cell">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent/70 px-2 py-0.5 border border-accent/20 rounded">
                      {cert.year}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center justify-end">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                        title="View Certificate"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
