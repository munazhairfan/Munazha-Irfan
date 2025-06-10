'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-gray-100 via-white to-gray-50 min-h-screen"
    >
      {inView && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Replace above div with your image if available */}
          <img src="/avatar.svg" alt="Munazha Irfan" className="rounded-full w-32 h-32 mx-auto shadow-lg" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            Munazha Irfan
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Full-Stack Developer | Next.js & Python Enthusiast
          </p>

          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about building creative, functional and interactive apps that blend beautiful design with solid code.
          </p>
          <div className='flex justify-center'>
          <a href="/projects">
            <button className="mt-4 px-6 py-3 bg-gray-800 text-white font-medium rounded-full flex items-center gap-2 hover:bg-gray-700 transition shadow">
              View My Work <FaArrowRight />
            </button>
          </a>
          </div>
        </motion.div>
      )}
    </section>
  );
}
