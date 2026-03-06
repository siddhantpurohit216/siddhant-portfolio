import { motion } from 'motion/react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-10"
    >
      <Hero />
      <TechStack />
      <ExperienceTimeline />
      {/* <Certifications /> */}
      <Projects />
    </motion.div>
  );
}
