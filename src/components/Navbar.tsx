import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Portfolio', path: '/#portfolio' },
  { name: 'Photos', path: '/photos' },
  { name: 'Blogs', path: '/blogs' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl"
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent transition-colors">
            <img 
              src="/assets/profile.jpg" 
              alt="Siddhant" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === item.path ? "text-accent" : "text-text-secondary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-white/10 pl-6 ml-2">
            <a href="https://github.com/siddhantpurohit216" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/siddhantpurohit216/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 md:hidden flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-text-secondary hover:text-accent"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t border-white/10">
            <a href="https://github.com/siddhantpurohit216" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/siddhantpurohit216/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-text-secondary hover:text-accent">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
