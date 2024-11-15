import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with zoom animation */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/image-4.jpeg.webp')] bg-cover bg-center animate-ken-burns"
        style={{
          filter: "brightness(0.2)",
        }}
      />

      {/* Content overlay */}
      <div className="relative h-full">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex flex-col max-w-2xl animate-fade-in">
            {/* Animated line accent */}
            <div className="w-24 h-1 bg-red-500 mb-8 animate-width" />

            {/* Main heading with enhanced typography */}
            <h1 className="text-red-500 font-bold text-xl md:text-2xl tracking-wider uppercase mb-4 opacity-0 animate-slide-up">
              About us
            </h1>

            {/* Enhanced subheading with gradient text */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8 opacity-0 animate-slide-up-delay-1">
              We help you{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                grow
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                achieve
              </span>{" "}
              your business goals
            </h2>

            {/* Enhanced paragraph with better readability */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 opacity-0 animate-slide-up-delay-2">
              Our team of experienced professionals is dedicated to
              understanding your unique business challenges. We work closely
              with you to develop tailored strategies that align with your
              objectives, ensuring you reach new heights of success.
            </p>

            {/* Enhanced button with animation */}
            <Link href="/about">
              <button
                className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                transform hover:scale-105 hover:bg-red-600 transition-all duration-300 
                opacity-0 animate-slide-up-delay-3
                shadow-lg hover:shadow-xl"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Add required styles */}
      <style jsx global>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.6);
          }
        }

        @keyframes width {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        .animate-ken-burns {
          animation: kenBurns 10s infinite alternate linear;
        }

        .animate-width {
          animation: width 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slide-up-delay-1 {
          animation: slideUp 0.8s ease-out 0.2s forwards;
        }

        .animate-slide-up-delay-2 {
          animation: slideUp 0.8s ease-out 0.4s forwards;
        }

        .animate-slide-up-delay-3 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
