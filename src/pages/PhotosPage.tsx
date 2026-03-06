import { motion } from 'motion/react';
import PhotoGrid from '../components/PhotoGrid';

export default function PhotosPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 px-4 max-w-6xl mx-auto min-h-screen"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Photography</h1>
        <p className="text-text-secondary max-w-xl mx-auto">
          Moments I’ve captured through my lens while exploring nature, wildlife, and everyday life.
        </p>
      </div>
      
      <PhotoGrid />
    </motion.div>
  );
}
