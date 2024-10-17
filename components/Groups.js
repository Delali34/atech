import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

const SocialGroups = () => {
  const groups = [
    {
      name: "WhatsApp Group",
      icon: <FaWhatsapp className="text-4xl" />,
      color: "bg-green-500",
      hoverColor: "bg-green-600",
      link: "https://chat.whatsapp.com/JHVtEQwsYv2BmIoXBm14xb",
    },
    {
      name: "Facebook Group",
      icon: <FaFacebook className="text-4xl" />,
      color: "bg-blue-600",
      hoverColor: "bg-blue-700",
      link: "https://www.facebook.com/AmbTechaccra?mibextid=ZbWKwL",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-extrabold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join Our Community
        </motion.h2>
        <motion.p
          className="text-xl text-purple-200 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Stay connected and get the latest updates by joining our social media
          groups!
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            >
              <motion.a
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${group.color} hover:${group.hoverColor} text-white rounded-lg p-6 flex flex-col items-center justify-center h-full transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {group.icon}
                <span className="mt-4 text-xl font-semibold">{group.name}</span>
                <span className="mt-2 text-sm">Click to Join</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialGroups;
