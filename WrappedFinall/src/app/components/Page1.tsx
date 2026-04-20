import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Page1() {
  const startDate = new Date('2023-07-06');
  const endDate = new Date('2026-04-20');

  const [timeUnits, setTimeUnits] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = endDate;
      const diff = now.getTime() - startDate.getTime();

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      // Calculate years, months, days more accurately
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let remainingDays = now.getDate() - startDate.getDate();

      if (remainingDays < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        remainingDays += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setTimeUnits({
        years,
        months,
        days: remainingDays,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 relative font-sans">
      {/* Decorative wavy circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-white/20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full border-2 border-white/15"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center space-y-16"
      >
        <motion.h1
          variants={itemVariants}
          className="font-sans text-6xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight"
                style={{
                  letterSpacing: '-0.03em',
                  textShadow: '0 0 20px rgba(168, 85, 247, 0.85), 0 0 40px rgba(168, 85, 247, 0.6)'
                }}
        >
          You have been fighting for this long
        </motion.h1>

        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <TimeUnit value={timeUnits.years} label="years" />
          <TimeUnit value={timeUnits.months} label="months" />
          <TimeUnit value={timeUnits.days} label="days" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white"
          style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.6)' }}
        >
          since July 6, 2023
        </motion.p>
      </motion.div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30"
    >
      <div
        className="text-5xl md:text-6xl text-white tabular-nums"
        style={{ textShadow: '0 0 10px rgba(168, 85, 247, 0.8)' }}
      >
        {value.toString().padStart(2, '0')}
      </div>
      <div
        className="text-sm md:text-base text-white uppercase tracking-wider"
        style={{ textShadow: '0 0 8px rgba(168, 85, 247, 0.6)' }}
      >
        {label}
      </div>
    </motion.div>
  );
}
