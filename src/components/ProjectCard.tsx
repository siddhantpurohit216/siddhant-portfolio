import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { type Project } from '../data/projects';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden glow-border group flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-80" />
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 glass rounded-full hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 glass rounded-full hover:text-accent transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="text-[10px] font-mono text-accent/80 bg-accent/5 px-2 py-1 rounded border border-accent/10">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
