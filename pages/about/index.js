import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section>
      <Navbar />
      <div
        className="bg-gray-100 font-sans8
       min-h-screen py-12"
      >
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-blue-800"
            variants={fadeIn}
          >
            About Ambassador Technology
          </motion.h1>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={fadeIn}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Specialization
              </h2>
              <p className="text-gray-700">
                Ambassador Technology specializes as a security systems
                integrator in the design, installation, and support of
                technology-based solutions for households, businesses, and
                individuals. We also offer practical training to youth, helping
                them acquire hard skills in the field.
              </p>
            </div>
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="/image1.jpg"
                alt="Security system installation"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-800">
              Our Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Certificate Programs
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>CCTV Digital and IP Systems</li>
                  <li>CCTV Control Room Operation Skills</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Courses
                </h3>
                <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
                  <li>CCTV Installation</li>
                  <li>Access Control Systems</li>
                  <li>Video Intercom Systems</li>
                  <li>Intruder Alarms Systems</li>
                  <li>Electric Fencing Systems</li>
                  <li>Gate Automation</li>
                  <li>GPS Tracking System</li>
                  <li>Fire Alarm System</li>
                  <li>Drone Piloting</li>
                  <li>CCTV Control Room Operation</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-800">
              Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  level: "LEVEL 1",
                  title: "Basic Certificate in Security Surveillance Systems",
                },
                {
                  level: "LEVEL 2",
                  title:
                    "Intermediate Certificate in Security Surveillance Systems",
                },
                {
                  level: "LEVEL 3",
                  title: "Advanced Diploma in Security Surveillance Systems",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">
                    {cert.level}
                  </h3>
                  <p className="text-gray-700">{cert.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-12"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Locations
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Rm. 2, Pokuase - Opp. Police Station</li>
              <li>
                National Vocational Training Institute (NVTI), Kokomlemle, Accra
                Circle
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutPage;
