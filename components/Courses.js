import React from "react";
import Link from "next/link";

const CourseOfferings = () => {
  const courses = [
    {
      title: "CERTIFICATE PROGRAMS",
      items: [
        "CCTV DIGITAL AND IP SYSTEMS",
        "CCTV CONTROL ROOM OPERATION SKILLS",
      ],
    },
    {
      title: "SKILLS COURSES",
      items: [
        "Closed-Circuit Television (CCTV) installation",
        "Access Control Systems",
        "Video Intercom Systems",
        "Intruder Alarms Systems",
        "Electric fencing Systems",
        "Gate Automation",
        "GPS Tracking System",
        "Fire Alarm System",
        "Drone Piloting",
        "CCTV Control Room Operation",
      ],
    },
    {
      title: "CERTIFICATIONS",
      items: [
        "LEVEL 1: BASIC CERTIFICATE IN SECURITY SURVEILLANCE SYSTEMS",
        "LEVEL 2: INTERMEDIATE CERTIFICATE IN SECURITY SURVEILLANCE SYSTEMS",
        "LEVEL 3: ADVANCE DIPLOMA IN SECURITY SURVEILLANCE SYSTEMS",
      ],
    },
    {
      title: "ASSOCIATIONS OF SAFETY AND PROTECTION OFFICERS - GHANA CHAPTER",
      items: [
        "SECURITY AND PEACE MANAGEMENTS",
        "SECURITY AND CRIMES PREVENTION",
        "VIP SECURITY AND DEFENSE INTELLIGENCE",
        "HUMAN SECURITY AND FACULTIES PROTECTIONS INTELLIGENCE",
        "(To qualify anyone as International FPO, PPA with international ID CARDS)",
        "HIGHER DIPLOMA CERTIFICATE (HDP)",
        "CRIMES INVESTIGATIONS AND DETECTIONS INTELLIGENCE",
        "SPECIAL DIPLOMA (SDIP)",
        "NATIONAL SECURITY AND INTELLIGENCE",
        "PLACE OF WORSHIP SECURITY AND DEFENCE INTELLIGENCE",
        "INSTITUTES AND SCHOOLS SECURITY AND DEFENCE INTELLIGENCE",
        "CRIMINOLOGY AND PENOLOGY",
        "UNARMED COUNTER TERRORISM INTELLIGENCE",
        "CRIMINOLOGY",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" id="courses">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Our Course Offerings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start group">
                    <span className="text-blue-500 mr-2 mt-1 transform group-hover:scale-110 transition-transform duration-200">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/enroll">
            <button
              className="bg-[#012E6B] text-white px-8 py-3 rounded-full text-lg font-semibold 
              hover:bg-[#283a53] transition duration-300 transform hover:scale-105 
              shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseOfferings;
