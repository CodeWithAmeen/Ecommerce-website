import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px',
        borderRadius: '10px',
        cursor: 'pointer'
      }}
    >
      Hover me
    </motion.div>
  );
};

export default AnimatedBox;
