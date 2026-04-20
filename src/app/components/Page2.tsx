import { motion } from 'motion/react';

export default function Page2() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 relative">
      {/* Animated wavy lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <motion.path
          d="M 0 400 Q 200 300, 400 400 T 800 400"
          stroke="url(#lineGrad1)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0 200 Q 300 100, 600 200 T 1200 200"
          stroke="url(#lineGrad2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0 600 Q 250 500, 500 600 T 1000 600"
          stroke="url(#lineGrad3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-purple-300/30 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-purple-300/30 to-white/20 blur-xl"
      />

      {/* Main content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
        className="relative z-10 text-center space-y-8"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl text-white"
            style={{
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textShadow: '0 0 15px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.5)'
            }}
          >
            just one
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl text-white"
            style={{
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textShadow: '0 0 20px rgba(196, 181, 253, 1), 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.5)'
            }}
          >
            more fight
          </h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1.2,
            type: "spring",
            stiffness: 200
          }}
          className="pt-8"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
        </motion.div>
      </motion.div>
    </div>
  );
}
