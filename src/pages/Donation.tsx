import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCopy, FaQrcode, FaHeart, FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';
import upiQRImage from '@/assets/upi-qr-donation.jpg';

const fundCategories = [
  {
    icon: FaLightbulb,
    title: 'Lighting & Decoration',
    description: 'Beautiful lights, flowers, and decorative elements',
    percentage: 40,
    amount: '₹2,00,000'
  },
  {
    icon: FaUsers,
    title: 'Pandal Construction',
    description: 'Structure, safety, and artistic installations',
    percentage: 35,
    amount: '₹1,75,000'
  },
  {
    icon: FaHandsHelping,
    title: 'Community Service',
    description: 'Free food distribution and charity work',
    percentage: 25,
    amount: '₹1,25,000'
  }
];

const sponsors = [
  'Sponsor Name 1', 'Sponsor Name 2', 'Sponsor Name 3', 
  'Sponsor Name 4', 'Sponsor Name 5', 'Sponsor Name 6'
];

export const Donation: React.FC = () => {
  const [copiedUPI, setCopiedUPI] = useState(false);
  const { toast } = useToast();
  const upiId = 'kali-puja@paytm';

  const copyUPIId = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopiedUPI(true);
      toast({
        title: 'UPI ID Copied!',
        description: 'UPI ID has been copied to your clipboard',
      });
      setTimeout(() => setCopiedUPI(false), 2000);
    } catch (error) {
      toast({
        title: 'Copy Failed',
        description: 'Please copy the UPI ID manually',
        variant: 'destructive',
      });
    }
  };

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
        <title>Donate - Support Kali Puja Celebration</title>
        <meta name="description" content="Support our Kali Puja celebration with your generous donations. Help us create beautiful memories and serve the community with lighting, pandal, and charity work." />
        <meta name="keywords" content="Kali Puja donation, support festival, UPI payment, community service, Bengali festival funding" />
      </Helmet>

      <motion.div
        className="min-h-screen py-20 px-4 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">
              Support Our <span className="text-kali-red">Sacred</span> Celebration
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your generous contribution helps us create a beautiful and meaningful Kali Puja experience 
              for thousands of devotees while supporting community welfare.
            </p>
          </motion.div>

          {/* Main Donation Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* QR Code Section */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-card p-8 rounded-3xl shadow-2xl border border-border">
                <div className="mb-6">
                  <FaQrcode className="text-4xl text-kali-red mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-primary mb-2">
                    Scan & Donate
                  </h2>
                  <p className="font-body text-muted-foreground">
                    Quick and secure UPI payment
                  </p>
                </div>

                {/* QR Code */}
                <div className="relative mb-6 inline-block">
                  <div className="p-4 bg-white rounded-2xl shadow-lg">
                    <img
                      src={upiQRImage}
                      alt="UPI QR Code for Donation"
                      className="w-64 h-64 mx-auto rounded-lg"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-kali-red to-antique-gold rounded-2xl opacity-20 blur-lg"></div>
                </div>

                {/* UPI ID */}
                <div className="bg-muted/20 rounded-xl p-4 mb-4">
                  <p className="font-body text-sm text-muted-foreground mb-2">UPI ID:</p>
                  <div className="flex items-center justify-between bg-background rounded-lg p-3 border">
                    <span className="font-mono text-primary font-medium">{upiId}</span>
                    <motion.button
                      onClick={copyUPIId}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`ml-3 p-2 rounded-lg smooth-transition ${
                        copiedUPI 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-antique-gold text-white hover:bg-antique-gold-light'
                      }`}
                    >
                      <FaCopy className="text-sm" />
                    </motion.button>
                  </div>
                  {copiedUPI && (
                    <p className="text-green-600 text-sm mt-2 font-medium">✓ Copied to clipboard!</p>
                  )}
                </div>

                <p className="font-body text-sm text-muted-foreground">
                  Scan the QR code or use the UPI ID with any UPI app like GPay, PhonePe, or Paytm
                </p>
              </div>
            </motion.div>

            {/* Fund Allocation Section */}
            <motion.div variants={itemVariants}>
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                  How Your Donation Helps
                </h2>
                <p className="font-body text-muted-foreground mb-6">
                  Every rupee is carefully allocated to create the best experience for our devotees and community.
                </p>
              </div>

              <div className="space-y-6">
                {fundCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg smooth-transition"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-kali-gradient rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="text-white text-xl" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-heading text-lg font-bold text-primary">
                              {category.title}
                            </h3>
                            <span className="font-heading font-bold text-antique-gold">
                              {category.percentage}%
                            </span>
                          </div>
                          <p className="font-body text-muted-foreground mb-3">
                            {category.description}
                          </p>
                          <div className="bg-muted/30 rounded-full h-2 mb-2">
                            <div
                              className="bg-kali-gradient h-2 rounded-full smooth-transition"
                              style={{ width: `${category.percentage}%` }}
                            ></div>
                          </div>
                          <p className="font-body text-sm text-muted-foreground">
                            Target: <span className="font-bold text-kali-red">{category.amount}</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Total Goal */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-kali-gradient text-white rounded-2xl text-center"
              >
                <FaHeart className="text-3xl mx-auto mb-3" />
                <h3 className="font-heading text-2xl font-bold mb-2">Total Goal</h3>
                <p className="font-heading text-4xl font-bold">₹5,00,000</p>
                <p className="font-body text-white/80 mt-2">
                  Together, we can make this celebration unforgettable
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Sponsors Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-center text-primary mb-8">
              Our Generous Sponsors
            </h2>
            <div className="bg-card rounded-2xl p-8 border border-border overflow-hidden">
              <motion.div
                animate={{ x: [-1000, 1000] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="flex space-x-12 whitespace-nowrap"
              >
                {[...sponsors, ...sponsors].map((sponsor, index) => (
                  <div
                    key={index}
                    className="px-8 py-4 bg-muted/20 rounded-lg border border-border flex-shrink-0"
                  >
                    <span className="font-body font-medium text-muted-foreground">{sponsor}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Become a Sponsor CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center p-12 bg-devotional-gradient text-white rounded-3xl"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              Become a Sponsor
            </h2>
            <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our family of sponsors and get recognition in all our promotional materials, 
              banners, and social media posts during the festival.
            </p>
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-antique-gold text-devotional-black font-heading font-bold text-lg rounded-full hover:bg-antique-gold-light smooth-transition shadow-lg"
            >
              Contact Us: +91 98765 43210
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};