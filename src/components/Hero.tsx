import { motion } from 'motion/react';
import { Github, Linkedin, Download } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 pt-20 px-4">
      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent font-mono text-sm mb-2">Hi, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight">
            Siddhant Sekhar <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 via-blue-500 to-purple-600">
              Purohit
            </span>
          </h1>
          <p className="text-xl text-text-secondary mt-4 font-medium">
            Full Stack and AI Software Engineer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary max-w-2xl leading-relaxed"
        >
          I’m a Software Development Engineer who enjoys building systems that solve real business problems and make everyday tasks easier for users. I like designing practical and scalable solutions that create meaningful impact. I’m naturally curious about technology and business, and I enjoy exploring new tools, ideas, and trends while staying updated with the evolving tech landscape. I adapt quickly to new technologies and enjoy learning as I build. I often use AI tools to accelerate development and prototype ideas faster, while understanding their limitations and ensuring careful engineering review and solid system design. I also care about building software that respects and protects user privacy. Alongside this, I enjoy problem solving and have solved 500+ data structures and algorithms problems. Outside of engineering, I enjoy wildlife photography and love capturing animals and moments from nature in their natural habitats.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a 
            href="#portfolio" 
            className="px-8 py-3 bg-accent text-background font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="/assets/resume.pdf" 
            download
            className="px-8 py-3 glass border border-accent/20 text-accent font-bold rounded-full hover:bg-accent/10 transition-all hover:scale-105 flex items-center gap-2"
          >
            <Download size={18} /> Resume
          </a>
          <div className="flex gap-4">
            <a 
              href="https://github.com/siddhantpurohit216" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 glass rounded-full hover:text-accent transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/siddhantpurohit216/" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 glass rounded-full hover:text-accent transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>

             <a 
    href="https://leetcode.com/u/siddhantpurohit217/" 
    target="_blank" 
    rel="noreferrer"
    className="p-3 glass rounded-full hover:text-accent transition-all hover:scale-110"
  >
    <SiLeetcode size={24} />
    </a>

          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glow-border p-1">
          <div className="w-full h-full rounded-[20px] overflow-hidden bg-card">
            <img 
              src="/assets/profile.jpg" 
              alt="Siddhant Sekhar Purohit" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
      </motion.div>
    </section>
  );
}
