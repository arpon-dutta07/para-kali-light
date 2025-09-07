import React from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from './Sidebar';
import { MusicPlayer } from './MusicPlayer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background w-full">
      <Sidebar />
      <MusicPlayer />
      
      <motion.main 
        className="ml-0 lg:ml-80 min-h-screen"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  );
};