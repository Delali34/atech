// pages/gallery.js
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery data - Replace with your actual image data
  const galleryItems = [
    {
      id: 3,
      src: "/gallery (1).jpeg",
      title: "Ambassador Technology",
      category: "",
      description: "",
    },
    {
      id: 4,
      src: "/gallery (2).jpeg",
      title: "Ambassador Technology",
      category: "",
      description: "",
    },
    {
      id: 5,
      src: "/gallery (3).jpeg",
      title: "Ambassador Technology",
      category: "",
      description: "",
    },
    {
      id: 6,
      src: "/gallery (7).jpeg",
      title: "Ambassador Technology",
      category: "",
      description: "",
    },
    {
      id: 7,
      src: "/gallery (8).jpeg",
      title: "Ambassador Technology",
      category: "",
      description: "",
    },
    {
      id: 8,
      src: "/gallery (9).jpeg",
      title: "Ambassador Technology",
      category: "",
      description: "",
    },
  ];

  // Image Modal Component
  const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div
        className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="absolute right-0 top-0 m-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          className="h-full w-full flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                objectFit="cover"
                className="select-none"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {image.title}
                  </h2>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {image.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Image Card Component
  const ImageCard = ({ item }) => (
    <div
      onClick={() => setSelectedImage(item)}
      className="group cursor-pointer relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5]"
    >
      <Image
        src={item.src}
        alt={item.title}
        layout="fill"
        objectFit="cover"
        className="transform transition-transform duration-500 group-hover:scale-110"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-bold text-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {item.title}
        </h3>
        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 w-fit">
          {item.category}
        </span>
      </div>
    </div>
  );

  return (
    <section>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of stunning photographs capturing moments
              of beauty and inspiration.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryItems.map((item) => (
              <ImageCard key={item.id} item={item} />
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <ImageModal
              image={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GalleryPage;
