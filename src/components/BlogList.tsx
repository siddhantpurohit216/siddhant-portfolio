import { motion } from 'motion/react';
import { blogs } from '../data/blogs';
import { ExternalLink, Calendar } from 'lucide-react';

export default function BlogList() {
  return (
    <div className="space-y-6">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="glass p-8 rounded-2xl glow-border group hover:bg-white/5 transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-accent text-xs font-mono">
                <Calendar size={14} />
                {blog.date}
              </div>
              <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                {blog.title}
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-2xl">
                {blog.description}
              </p>
            </div>
            
            <a
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 glass rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-background transition-all shrink-0"
            >
              Read Article <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
