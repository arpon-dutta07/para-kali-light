import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <FaExclamationTriangle className="text-6xl text-kali-red mx-auto mb-4" />
          <h1 className="font-heading text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">Page Not Found</h2>
          <p className="font-body text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-kali-red text-white font-heading font-semibold rounded-full flex items-center space-x-2 mx-auto hover:bg-kali-red-dark smooth-transition shadow-lg"
          >
            <FaHome />
            <span>Return to Home</span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
