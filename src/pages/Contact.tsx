import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaClock, FaPaperPlane } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      action: 'tel:+919876543210'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['kali.puja@shantinagar.org', 'info@shantinagarkalipuja.com'],
      action: 'mailto:kali.puja@shantinagar.org'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['Shantinagar Main Road', 'Near Community Hall', 'Kolkata - 700001'],
      action: 'https://maps.google.com'
    },
    {
      icon: FaClock,
      title: 'Festival Days',
      details: ['October 30 - November 2', '6:00 AM - 12:00 AM', 'All are welcome'],
      action: null
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com', color: 'text-blue-600' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com', color: 'text-pink-600' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/919876543210', color: 'text-green-600' }
  ];

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
        <title>Contact Us - Shantinagar Kali Puja Pandal</title>
        <meta name="description" content="Get in touch with the Shantinagar Kali Puja organizing committee. Find our location, contact details, and send us your questions or feedback." />
        <meta name="keywords" content="contact Kali Puja committee, pandal location, festival organizers, Bengali community contact" />
      </Helmet>

      <motion.div
        className="min-h-screen py-20 px-4 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">
              Get in <span className="text-kali-red">Touch</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Reach out for any questions, suggestions, or to join our celebration.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 className="font-heading text-3xl font-bold text-primary mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-6 bg-card rounded-2xl border border-border hover:shadow-lg smooth-transition"
                    >
                      <div className="w-12 h-12 bg-kali-gradient rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white text-xl" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-heading text-lg font-bold text-primary mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="font-body text-muted-foreground">
                              {info.action && idx === 0 ? (
                                <a
                                  href={info.action}
                                  target={info.action.startsWith('http') ? '_blank' : '_self'}
                                  rel="noopener noreferrer"
                                  className="text-kali-red hover:text-kali-red-dark smooth-transition"
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center ${social.color} hover:bg-muted/20 smooth-transition shadow-lg`}
                        aria-label={social.label}
                      >
                        <Icon className="text-xl" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <motion.div
                variants={itemVariants}
                className="mt-12 bg-muted/20 rounded-2xl p-8 text-center border border-border"
              >
                <FaMapMarkerAlt className="text-4xl text-kali-red mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Find Our Pandal
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Located at the heart of Shantinagar, easily accessible by all modes of transport.
                </p>
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 bg-kali-red text-white font-body font-medium rounded-lg hover:bg-kali-red-dark smooth-transition"
                >
                  View on Google Maps
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-card p-8 rounded-3xl border border-border shadow-xl">
                <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body focus:ring-2 focus:ring-kali-red focus:border-transparent smooth-transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-body font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body focus:ring-2 focus:ring-kali-red focus:border-transparent smooth-transition"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-body font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body focus:ring-2 focus:ring-kali-red focus:border-transparent smooth-transition"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body font-medium text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body focus:ring-2 focus:ring-kali-red focus:border-transparent smooth-transition resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 px-6 rounded-lg font-heading font-bold text-lg flex items-center justify-center space-x-2 smooth-transition ${
                      isSubmitting
                        ? 'bg-muted text-muted-foreground cursor-not-allowed'
                        : 'bg-kali-red text-white hover:bg-kali-red-dark shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-antique-gold text-devotional-black rounded-2xl"
              >
                <h3 className="font-heading text-xl font-bold mb-3">
                  Quick Response Promise
                </h3>
                <p className="font-body leading-relaxed">
                  We typically respond to all inquiries within 24 hours during festival season 
                  and within 48 hours during other times. For urgent matters, please call us directly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};