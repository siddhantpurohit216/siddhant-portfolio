import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex items-center gap-6">
          <a href="https://github.com/siddhantpurohit216" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/siddhantpurohit216/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:siddhantpurohit216@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
