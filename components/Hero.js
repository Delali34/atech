import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-16 md:flex items-center justify-between gap-5">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Secure Solutions for{" "}
            <motion.span
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Modern Threats
            </motion.span>
          </motion.h1>
          <motion.p
            className="md:text-lg text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Expert consultancy and training in Electronic Security Systems. We
            empower businesses to protect their assets and people with
            cutting-edge technology and comprehensive knowledge.
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              className="bg-[#012E6B] text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div className="md:w-1/2">
          <motion.div className="relative w-full h-96">
            <Image
              src="/image-3.jpeg"
              alt="Advanced electronic security system"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
