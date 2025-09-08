import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaFilter, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import galleryImage1 from '@/assets/kali-gallery-1.jpg';

// Gallery images from uploads
const galleryImages = [
  {
    id: 1,
    src: '/lovable-uploads/a6d1de9d-f618-40f4-8043-3ca129e9450a.png',
    alt: 'Beautiful Kali pandal with golden illumination and intricate decorations',
    title: 'Divine Golden Pandal'
  },
  {
    id: 2,
    src: '/lovable-uploads/4ff721ca-b313-4132-a001-b65c84d1b0f1.png',
    alt: 'Night view of the pandal with colorful lighting and devotees',
    title: 'Evening Celebration'
  },
  {
    id: 3,
    src: '/lovable-uploads/63fb5fa1-152d-41bb-b4bf-97a5fbd70f68.png',
    alt: 'Magnificent pandal with traditional architecture and lighting',
    title: 'Traditional Grandeur'
  },
  {
    id: 4,
    src: '/lovable-uploads/e34d37c4-05d6-48f5-9dab-615dd0136b7d.png',
    alt: 'Spectacular pandal with Kali idol in divine backdrop',
    title: 'Divine Presence'
  },
  {
    id: 5,
    src: '/lovable-uploads/a734c06c-6a3a-4590-8179-478e7ea3eaca.png',
    alt: 'Sacred Kali idol in beautiful red backdrop with traditional decorations',
    title: 'Sacred Idol'
  },
  {
    id: 6,
    src: '/lovable-uploads/b63d82b6-d75c-44e0-9670-4bc3e6ce5d84.png',
    alt: 'Artistic pandal design with red theme and golden lighting',
    title: 'Artistic Excellence'
  }
];

// Volunteers data
const volunteers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'General Secretary',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    experience: '10 years'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Cultural Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    experience: '7 years'
  },
  {
    id: 3,
    name: 'Amit Das',
    role: 'Decoration Head',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    experience: '8 years'
  },
  {
    id: 4,
    name: 'Sunita Roy',
    role: 'Food & Prasad Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    experience: '6 years'
  },
  {
    id: 5,
    name: 'Kamal Sen',
    role: 'Security & Management',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    experience: '9 years'
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
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
                  <div className="relative aspect-[4/3] overflow-hidden">
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
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Volunteers Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-8"
            >
              Our Dedicated <span className="text-kali-red">Volunteers</span>
            </motion.h2>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {volunteers.map((volunteer) => (
                <motion.div
                  key={volunteer.id}
                  variants={itemVariants}
                  className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl smooth-transition border border-border"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden ring-4 ring-antique-gold/20">
                    <img
                      src={volunteer.image}
                      alt={volunteer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-1">
                    {volunteer.name}
                  </h3>
                  <p className="font-body text-kali-red font-medium text-sm mb-2">
                    {volunteer.role}
                  </p>
                  <p className="font-body text-muted-foreground text-xs">
                    Experience: {volunteer.experience}
                  </p>
                </motion.div>
              ))}
            </motion.div>
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