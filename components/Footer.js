import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Company</h3>
            <p className="text-gray-300">
              Providing top-notch security training and consultancy services to
              empower individuals and organizations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Locations</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-orange-400" />
                <span>Rm. 2, Pokuase - Opp. Police Station</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-orange-400" />
                <span>
                  National Vocational Training Institute (NVTI), Kokomlemle,
                  Accra Circle
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-orange-400" />
                <span>024836266 / 0502133692</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-orange-400" />
                <span>info@ourcompany.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-600 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Ambassador Technology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
