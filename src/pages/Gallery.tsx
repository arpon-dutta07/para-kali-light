import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaFilter, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import galleryImage1 from '@/assets/kali-gallery-1.jpg';

// Mock gallery data - in real app, this would come from a backend
const galleryImages = [
  {
    id: 1,
    src: galleryImage1,
    alt: 'Beautiful Kali idol with traditional decorations',
    category: 'Idol',
    title: 'Maa Kali in Divine Glory'
  },
  {
    id: 2,
    src: galleryImage1,
    alt: 'Pandal entrance with stunning lighting',
    category: 'Pandal',
    title: 'Pandal Entrance'
  },
  {
    id: 3,
    src: galleryImage1,
    alt: 'Cultural dance performance during celebration',
    category: 'Cultural Events',
    title: 'Traditional Dance'
  },
  {
    id: 4,
    src: galleryImage1,
    alt: 'Volunteers serving food to devotees',
    category: 'Volunteers',
    title: 'Community Service'
  },
  {
    id: 5,
    src: galleryImage1,
    alt: 'Night lighting creating magical atmosphere',
    category: 'Lighting',
    title: 'Evening Illumination'
  },
  {
    id: 6,
    src: galleryImage1,
    alt: 'Devotees offering prayers',
    category: 'Idol',
    title: 'Prayer Ceremony'
  }
];

const categories = ['All', 'Idol', 'Pandal', 'Cultural Events', 'Volunteers', 'Lighting'];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredImages = galleryImages;

  const lightboxSlides = filteredImages.map(image => ({
    src: image.src,
    alt: image.alt,
    title: image.title
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1
    }
  };

  return (
    <>
      <Helmet>
        <title>Kali Puja Gallery - Shantinagar Pandal</title>
        <meta name="description" content="Browse our beautiful collection of Kali Puja celebration photos featuring the stunning idol, pandal decorations, cultural events, and community participation." />
        <meta name="keywords" content="Kali Puja photos, pandal gallery, Bengali festival images, Maa Kali idol, cultural celebration" />
      </Helmet>

      <div className="min-h-screen py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">
              <span className="text-kali-red">Kali Puja</span> Gallery
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Capture the divine moments and joyous celebrations of our Kali Puja festival
            </p>
          </motion.div>


          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  layout
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl smooth-transition cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-white font-bold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="font-body text-white/80 text-sm">
                          {image.category}
                        </p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-kali-red text-white text-xs font-body font-medium rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-body text-xl text-muted-foreground">
                No images found for the selected category.
              </p>
            </motion.div>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 p-8 bg-card rounded-2xl border border-border"
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Capturing Sacred Moments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-kali-red font-heading">500+</div>
                <div className="text-muted-foreground font-body">Photos Captured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-antique-gold font-heading">10</div>
                <div className="text-muted-foreground font-body">Years of Memories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-kali-red font-heading">50K+</div>
                <div className="text-muted-foreground font-body">Devotees Welcomed</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={lightboxSlides}
          plugins={[]}
          render={{
            buttonPrev: () => (
              <button className="text-white hover:text-antique-gold text-2xl p-2">
                <FaChevronLeft />
              </button>
            ),
            buttonNext: () => (
              <button className="text-white hover:text-antique-gold text-2xl p-2">
                <FaChevronRight />
              </button>
            ),
            buttonClose: () => (
              <button className="text-white hover:text-kali-red text-2xl p-2">
                <FaTimes />
              </button>
            ),
          }}
        />
      </div>
    </>
  );
};