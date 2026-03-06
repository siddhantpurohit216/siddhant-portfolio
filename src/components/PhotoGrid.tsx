import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { photos } from '../data/photos';

export default function PhotoGrid() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="relative group overflow-hidden rounded-2xl glow-border"
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          
          {/* Overlay Info */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-white font-bold text-lg mb-2">{photo.title}</h3>
            <div className="flex items-center gap-2 text-text-secondary text-xs">
              <MapPin size={12} /> {photo.location}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
