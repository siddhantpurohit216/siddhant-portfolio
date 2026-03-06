import { motion } from 'motion/react';
import BlogList from '../components/BlogList';

export default function BlogsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 px-4 max-w-4xl mx-auto min-h-screen"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Blogs</h1>
        <p className="text-text-secondary">
          Writing about software engineering, system design, and my learning journey.
        </p>
      </div>
      
      <BlogList />
    </motion.div>
  );
}
