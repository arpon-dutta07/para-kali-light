import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaImages, FaDonate, FaPhone, FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import kaliLogo from '@/assets/kali-logo.png';

const navItems = [
  { path: '/', icon: FaHome, label: 'Home' },
  { path: '/about', icon: FaInfoCircle, label: 'About Us' },
  { path: '/gallery', icon: FaImages, label: 'Kali Puja Gallery' },
  { path: '/donation', icon: FaDonate, label: 'Donation' },
  { path: '/contact', icon: FaPhone, label: 'Contact' },
];

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
];

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: -320 },
  };

  const SidebarContent = () => (
    <motion.div 
      className="h-full flex flex-col devotional-gradient text-devotional-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {/* Logo Section */}
      <div className="text-center mb-8">
        <img 
          src={kaliLogo} 
          alt="Kali Puja Logo" 
          className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-antique-gold shadow-lg"
        />
        <h1 className="font-heading text-xl font-bold text-antique-gold mb-1">
          Shantinagar
        </h1>
        <p className="text-sm text-devotional-white/80">Kali Puja Pandal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg smooth-transition group ${
                    isActive 
                      ? 'bg-antique-gold text-devotional-black font-medium' 
                      : 'text-devotional-white hover:bg-white/10 hover:text-antique-gold'
                  }`}
                >
                  <Icon className={`text-lg ${isActive ? '' : 'group-hover:scale-110 smooth-transition'}`} />
                  <span className="font-body">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="mt-8 pt-6 border-t border-white/20">
        <p className="text-sm text-devotional-white/80 mb-4 text-center">Follow Us</p>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-devotional-white hover:bg-antique-gold hover:text-devotional-black smooth-transition hover:scale-110"
                aria-label={social.label}
              >
                <Icon className="text-sm" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-80 z-40">
        <SidebarContent />
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-12 h-12 bg-devotional-black rounded-full flex items-center justify-center text-antique-gold shadow-lg hover:bg-kali-red smooth-transition"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 h-full w-80 z-50"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};