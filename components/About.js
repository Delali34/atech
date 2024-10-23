import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#012E6B] to-[#1E4D8C] text-white py-12 px-4 md:px-8">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative md:w-[50%] w-full h-[300px] md:h-[400px]">
            <Image
              src="/image1.jpg"
              alt="Team meeting"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-red-500 font-bold text-2xl">About us</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              We help you <span className="text-red-500">grow</span> and
              <span className="text-red-500"> achieve</span> your business goals
            </h2>
            <p className="text-white">
              Our team of experienced professionals is dedicated to
              understanding your unique business challenges. We work closely
              with you to develop tailored strategies that align with your
              objectives, ensuring you reach new heights of success.
            </p>
            <Link href="/about">
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
