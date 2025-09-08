import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Users, Star, Quote } from 'lucide-react';
import galleryImage from '@/assets/kali-gallery-1.jpg';

const timelineEvents = [
  { year: '2015', event: 'First Kali Puja celebration organized by our community' },
  { year: '2017', event: 'Introduced cultural programs and community feast' },
  { year: '2019', event: 'Expanded to include charity initiatives for underprivileged' },
  { year: '2021', event: 'Digital innovation with live streaming during pandemic' },
  { year: '2023', event: 'Achieved recognition as one of the most beautiful pandals' },
  { year: '2025', event: 'Celebrating our 10th year with grand festivities' },
];

const features = [
  {
    icon: Heart,
    title: 'Deep Devotion',
    description: 'Our celebration is rooted in genuine devotion to Maa Kali, fostering spiritual connection and inner peace.'
  },
  {
    icon: Users,
    title: 'Community Unity',
    description: 'Bringing together people from all walks of life to celebrate our shared cultural heritage and values.'
  },
  {
    icon: Star,
    title: 'Artistic Excellence',
    description: 'Showcasing the finest craftsmanship in pandal decoration and idol creation by master artisans.'
  },
];

export const About: React.FC = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - Shantinagar Kali Puja Pandal</title>
        <meta name="description" content="Learn about our journey, mission, and the significance of Kali Puja in our community. Discover the story behind Shantinagar's most celebrated festival." />
        <meta name="keywords" content="About Kali Puja, Bengal tradition, community story, Maa Kali, festival history" />
      </Helmet>

      <motion.div 
        className="min-h-screen py-20 px-4 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">
              About <span className="text-kali-red">Our Journey</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over a decade, we have been celebrating the divine presence of Maa Kali, 
              bringing our community together in a spirit of devotion, art, and unity.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Section */}
            <motion.div variants={itemVariants}>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  What began as a small neighborhood gathering has blossomed into one of the most 
                  celebrated Kali Puja festivals in our area. Our journey started with a simple 
                  vision: to create a sacred space where devotion meets artistry.
                </p>
                <p>
                  Every year, we pour our hearts into creating not just a pandal, but a spiritual 
                  experience that touches the souls of thousands of devotees who visit us. Our 
                  commitment extends beyond the festival to year-round community service and cultural preservation.
                </p>
                <p>
                  Today, we stand proud as a beacon of Bengali culture, where traditional values 
                  blend seamlessly with contemporary celebrations, creating memories that last a lifetime.
                </p>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/lovable-uploads/4ff721ca-b313-4132-a001-b65c84d1b0f1.png" 
                alt="Kali Puja celebration at our pandal"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-xl font-bold">A Decade of Devotion</h3>
                <p className="font-body text-sm opacity-90">Celebrating tradition with modern touch</p>
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-center text-primary mb-12">
              What Makes Us Special
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(200, 29, 37, 0.15)' }}
                    className="text-center p-8 bg-gradient-to-br from-card to-card/80 rounded-3xl border border-border shadow-xl backdrop-blur-sm"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-kali-gradient rounded-full flex items-center justify-center shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-4">{feature.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{feature.description}</p>
                    <div className="mt-6 w-12 h-1 bg-antique-gold rounded-full mx-auto"></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-center text-primary mb-12">
              Our Journey Through Time
            </h2>
            <div className="max-w-4xl mx-auto">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-20 text-right mr-6">
                    <span className="font-heading text-lg font-bold text-kali-red">{event.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-antique-gold rounded-full mt-2 mr-6 shadow-lg"></div>
                  <div className="flex-grow">
                    <p className="font-body text-muted-foreground leading-relaxed">{event.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-kali-gradient text-white p-12 rounded-2xl text-center relative overflow-hidden shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #c81d25, #8c1515)' }}
          >
            <div className="absolute top-6 left-6 opacity-20">
              <Quote size={64} />
            </div>
            <div className="relative z-10">
              <p className="font-body text-xl md:text-2xl leading-relaxed mb-6 italic text-white font-medium">
                "Kali Puja is not just a festival for us—it's a celebration of the divine feminine power 
                that protects and nurtures our community. Every year, we strive to create an experience 
                that honors our traditions while bringing people together in love and devotion."
              </p>
              <div className="font-heading text-lg text-antique-gold">
                <strong>Rajesh Kumar Sharma</strong><br />
                <span className="opacity-90">Committee President</span>
              </div>
            </div>
          </motion.div>

          {/* Significance Section */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              The Significance of <span className="text-kali-red">Kali Puja</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Kali Puja, celebrated on the new moon day of Kartik, honors Maa Kali—the fierce yet 
                compassionate goddess who destroys evil and protects her devotees. This sacred festival 
                represents the triumph of good over evil and the divine mother's eternal love for her children.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                In Bengal, Kali Puja is more than worship—it's a cultural celebration that brings 
                communities together, preserves our rich heritage, and passes down timeless values 
                to future generations through art, music, and shared devotion.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};