import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-20 px-4" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-text-secondary">A selection of my recent work and personal projects</p>
        </motion.div>

        <div className="overflow-x-auto mb-12 glass rounded-3xl border border-white/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-bottom border-white/5">
                <th className="p-6 text-accent font-mono text-sm uppercase tracking-wider">Project</th>
                <th className="p-6 text-accent font-mono text-sm uppercase tracking-wider hidden md:table-cell">Description</th>
                <th className="p-6 text-accent font-mono text-sm uppercase tracking-wider hidden lg:table-cell">Tech Stack</th>
                <th className="p-6 text-accent font-mono text-sm uppercase tracking-wider text-right">Links</th>
              </tr>
            </thead>
            <tbody>
              {featuredProjects.map((project, index) => (
                <motion.tr 
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-bottom border-white/5 hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="p-6">
                    <span className="font-bold text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </span>
                  </td>
                  <td className="p-6 text-text-secondary text-sm hidden md:table-cell max-w-xs">
                    {project.description}
                  </td>
                  <td className="p-6 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-accent/70 px-2 py-0.5 border border-accent/20 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center justify-end gap-4">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-text-secondary hover:text-accent transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            to="/projects" 
            className="group flex items-center gap-2 px-8 py-3 glass rounded-full text-accent font-bold hover:bg-accent hover:text-background transition-all"
          >
            View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
