import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },

    { name: "Courses", href: "/#courses" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="py-3 font-sans sticky top-0 z-50 bg-white ">
      <section className=" max-w-[1320px] mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              className="h-[50px] w-[150px]"
              width={1000}
              height={1000}
            />
          </div>
        </Link>

        <div className="hidden md:block">
          <ul className="flex gap-5">
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                className="flex items-center"
              >
                <Link href={item.href}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <Link href="/enroll">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#012E6B] mr-2 text-white px-5 py-2 rounded-full"
            >
              Enroll now
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-black text-black px-5 py-2 rounded-full"
            >
              Contact
            </motion.button>
          </Link>
        </div>
        <motion.div
          className="md:hidden z-50"
          variants={iconVariants}
          animate={isOpen ? "open" : "closed"}
        >
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 left-0 w-4/5 h-full bg-white shadow-lg z-40 flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl"
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-12 gap-4">
              <Link href="/enroll">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#012E6B] text-white px-8 py-3 rounded-full text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Enroll now
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-black text-black px-8 py-3 rounded-full text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
