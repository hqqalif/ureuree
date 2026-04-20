import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import songg from '../../songg.mp3';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const pages = [
    <Page1 key="page1" />,
    <Page2 key="page2" />,
    <Page3 key="page3" />
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="size-full flex items-center justify-center bg-purple-900 overflow-hidden relative">
      <audio src={songg} autoPlay loop playsInline className="hidden" />
      {/* Background wavy decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            d="M0,300 Q360,200 720,300 T1440,300 L1440,0 L0,0 Z"
            fill="url(#grad1)"
          />
          <path
            d="M0,600 Q360,500 720,600 T1440,600 L1440,800 L0,800 Z"
            fill="url(#grad2)"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6b21a8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6b21a8" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full h-full flex items-center justify-center"
            >
              {pages[currentPage]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between px-8 pb-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Page indicators */}
          <div className="flex gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentPage
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === pages.length - 1}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
