"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      {/*<Image*/}
      {/*  src="/assets/hero-banner/2.png"*/}
      {/*  alt="Background"*/}
      {/*  fill*/}
      {/*  objectFit="cover"*/}
      {/*  className="z-0"*/}
      {/*  priority*/}
      {/*/>*/}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-sky-500 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          className="w-full lg:w-1/2 text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-xl md:text-2xl font-semibold text-white-200 mb-4"
            variants={itemVariants}
          >
            Transforming Ideas into Digital Reality
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-purple-950"
            variants={itemVariants}
          >
            Crafting Exceptional Web & Mobile Experiences
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-950 font-bold"
            variants={itemVariants}
          >
            We turn your vision into stunning, high-performance digital
            solutions that drive growth and engagement.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* PNG Overlay */}
      <motion.div
        className="absolute right-0 bottom-0 w-1/2 h-full z-10 hidden lg:flex items-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
      >
        <Image
          src="/assets/hero-banner/6.png"
          alt="Web Development"
          width={600}
          height={600}
          className="object-contain object-bottom"
        />
      </motion.div>
    </div>
  );
}
