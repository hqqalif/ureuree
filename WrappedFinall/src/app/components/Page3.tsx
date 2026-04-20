import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X } from 'lucide-react';

export default function Page3() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isStickyNote1Open, setIsStickyNote1Open] = useState(false);
  const [isStickyNote2Open, setIsStickyNote2Open] = useState(false);
  const [currentLetterPage, setCurrentLetterPage] = useState(0);

  const letterPages = [
    "Dear my cutest babyyy,\n\nIni adalah momen terakhir kamu disini, UTBK, your last dance, perjuangan sebelum masa SMA ini selesaii. Aku tau kok, ini bukan perjalanan yang mudah, tapi coba lihat seberapa jauh kamu sudah tumbuh sejak 2 tahun 9 bulan lalu. Kamu sudah makin dewasaa dan pintarr yeayy, pasti aurel kecil engga nyangka kamu bisa sampe sinii. I am so proud of this little girll :DD",
    "Mungkin kata orang engga baik ya melihat ke masa lalu, tapi mungkin terkadang kita harus step back dan lihat dari mana kita berasal supaya bisa menghargai seberapa jauh kita sudah melangkah. Kamu sudah melewati banyak hal, banyak tantangan juga, tapi ingat teruss kalo ada 1000 masalah pasti ada 1001 solusii, everything will be okayy hihii. Semua tantangan yang kamu lewati adalah bukti kuatnya kamuu sayangg.",
    "Besok adalah hari yang sangat berhargaa, ingatt untuk selalu tenangg, keep your positive mind, dan fokuss pas ngerjainnya yaa, intinya kamu ga boleh down dulu sebelum UTBK selesaii, ingaatt. Banyakin berdoaa sebelum ujian dan persiapkan tubuh kamu supaya fit yaaa, semoga semuanya dimudahkan untuk kamuu dan berhasill untuk keterima FK, aamiinn. You can do it baby! I will be waiting for you after you finishh \n\nWith love and hope,\nBig babyy❤️"
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-72 h-72 rounded-full border-2 border-white/20"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-64 h-64 rounded-full border-2 border-white/15"
      />

      {/* Wavy background decorations */}
      <svg className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z"
          fill="url(#page3Grad)"
        />
        <defs>
          <linearGradient id="page3Grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main content - only show when modals are closed */}
      <AnimatePresence mode="wait">
        {!isLetterOpen && !isStickyNote1Open && !isStickyNote2Open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center justify-center gap-8"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center"
            >
              <h1
                className="font-sans text-6xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight"
                style={{
                  letterSpacing: '-0.03em',
                  textShadow: '0 0 20px rgba(168, 85, 247, 0.85), 0 0 40px rgba(168, 85, 247, 0.6)'
                }}
              >
                finally... a little love note
              </h1>
            </motion.div>
            {/* Envelope with Sticky Notes */}
            <div className="flex items-center justify-center gap-16">
              {/* Sticky Note 1 */}
              <motion.div
                initial={{ rotate: -3, opacity: 0, y: 20 }}
                animate={{ rotate: -3, opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                onClick={() => setIsStickyNote1Open(true)}
                className="w-52 h-52 bg-pink-300 p-5 shadow-xl cursor-pointer flex items-center justify-center text-center"
              >
                <p className="text-sm text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Open Me!
                </p>
              </motion.div>

              {/* Envelope */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsLetterOpen(true)}
                className="relative cursor-pointer group"
              >
                <div className="w-96 h-52 relative">
                  {/* Envelope flap */}
                  <motion.div
                    whileHover={{ rotateX: 20 }}
                    className="absolute top-0 left-0 w-full origin-top"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="w-0 h-0 border-l-[192px] border-r-[192px] border-t-[120px] border-l-transparent border-r-transparent border-t-purple-300" />
                  </motion.div>
                  {/* Envelope body */}
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[192px] border-r-[192px] border-b-[120px] border-l-purple-200 border-r-purple-200 border-b-white" />
                  {/* Heart seal */}
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
                    <Heart className="w-10 h-10 fill-white text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))' }} />
                  </div>
                </div>
              </motion.div>

              {/* Sticky Note 2 */}
              <motion.div
                initial={{ rotate: 3, opacity: 0, y: 20 }}
                animate={{ rotate: 3, opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                onClick={() => setIsStickyNote2Open(true)}
                className="w-52 h-52 bg-red-300 p-5 shadow-xl cursor-pointer flex items-center justify-center text-center"
              >
                <p className="text-sm text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Me too!
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Letter Modal */}
      <AnimatePresence>
        {isLetterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="w-full max-w-2xl h-[80vh] bg-white rounded-lg shadow-2xl p-12 relative"
              style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 29px, #e5e7eb 30px)',
                backgroundPosition: '0 40px'
              }}
            >
              {/* Red margin line */}
              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-red-300/50" />

              {/* Letter content */}
              <div className="relative h-full flex flex-col">
                <div className="flex-1 overflow-auto mb-4">
                  <p className="text-gray-800 text-lg leading-[30px] whitespace-pre-wrap">
                    {letterPages[currentLetterPage]}
                  </p>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                  <button
                    onClick={() => setCurrentLetterPage(Math.max(0, currentLetterPage - 1))}
                    disabled={currentLetterPage === 0}
                    className="px-4 py-2 bg-purple-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700"
                  >
                    Previous
                  </button>
                  <span className="text-gray-600">
                    {currentLetterPage + 1} / {letterPages.length}
                  </span>
                  <button
                    onClick={() => setCurrentLetterPage(Math.min(letterPages.length - 1, currentLetterPage + 1))}
                    disabled={currentLetterPage === letterPages.length - 1}
                    className="px-4 py-2 bg-purple-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700"
                  >
                    Next
                  </button>
                </div>

                <button
                  onClick={() => setIsLetterOpen(false)}
                  className="w-full mt-4 px-4 py-2 bg-purple-900 text-white rounded hover:bg-purple-800"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Note 1 Modal */}
      <AnimatePresence>
        {isStickyNote1Open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: -2, opacity: 1 }}
              exit={{ scale: 0.5, rotate: -10, opacity: 0 }}
              className="w-full max-w-lg bg-pink-300 p-8 shadow-2xl relative"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              <button
                onClick={() => setIsStickyNote1Open(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-pink-400 rounded-full hover:bg-pink-500 transition-colors"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>
              <p className="text-gray-800 text-lg leading-relaxed">
                Remember to always believe in yourself, love yourself, and go easy on yourself. You are doing the best you can, and that is enough, control your mind to not harm yourself yeahh. Keep fighting until success, keep loving yourself and other people, and keep being the amazing person you are. You got this babyyy!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Note 2 Modal */}
      <AnimatePresence>
        {isStickyNote2Open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: 10, opacity: 0 }}
              animate={{ scale: 1, rotate: 2, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
              className="w-full max-w-lg bg-red-300 p-8 shadow-2xl relative"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              <button
                onClick={() => setIsStickyNote2Open(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-red-400 rounded-full hover:bg-red-500 transition-colors"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>
              <p className="text-gray-800 text-lg leading-relaxed">
                My favorite equation: You + Me = Forever, it's my version hehe. I love you so much, and I'm so proud of you for everything you've been through, especially during the 3 years here in Praditaaaaa and everything you're going to accomplish. We are going to achieve all of our dreams in the future and we go around the world yaaa letsgoooo! 
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
