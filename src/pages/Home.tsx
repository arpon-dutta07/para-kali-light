import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaImages, FaDonate, FaCalendarAlt } from 'react-icons/fa';
import heroImage from '@/assets/hero-kali-puja.jpg';

export const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date for Kali Puja 2025 (November 1, 2025)
    const targetDate = new Date('2025-11-01T18:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <Helmet>
        <title>Shantinagar Kali Puja Pandal - A Celebration of Devotion, Unity, and Art</title>
        <meta name="description" content="Join us for the grand Kali Puja celebration at Shantinagar Pandal. Experience devotion, cultural programs, and community unity in this sacred festival." />
        <meta name="keywords" content="Kali Puja, Bengal festival, Durga Puja, Hindu festival, community celebration, Kolkata, pandal, devotion" />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Floating Diya Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-antique-gold rounded-full diya-flicker"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10 flex items-center justify-center min-h-screen px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Welcome to{' '}
              <span className="text-antique-gold">Shantinagar</span>
              <br />
              <span className="text-kali-red">Kali Puja</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              A Celebration of Devotion, Unity, and Art
            </motion.p>

            {/* Countdown Timer */}
            <motion.div 
              variants={itemVariants}
              className="mb-10"
            >
              <div className="flex items-center justify-center mb-4">
                <FaCalendarAlt className="text-antique-gold text-xl mr-2" />
                <h2 className="font-heading text-2xl text-antique-gold">Kali Puja 2025</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <motion.div
                    key={unit}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-antique-gold font-heading">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/80 font-body capitalize">
                      {unit}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/gallery">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-antique-gold text-devotional-black font-heading font-semibold text-lg rounded-full flex items-center justify-center space-x-2 hover:bg-antique-gold-light smooth-transition shadow-lg"
                >
                  <FaImages />
                  <span>View Gallery</span>
                </motion.button>
              </Link>

              <Link to="/donation">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(200, 29, 37, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-kali-red text-white font-heading font-semibold text-lg rounded-full flex items-center justify-center space-x-2 hover:bg-kali-red-light smooth-transition shadow-lg"
                >
                  <FaDonate />
                  <span>Donate Now</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};