import React from "react";

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
      title:
        "INTERNATIONAL MEN-OF-HONOR JOURNAL ASSOCIATIONS OF SAFETY AND PROTECTION OFFICERS",
      items: [
        "PROFESSIONAL BASIC CERTIFICATE (PBC) - 2 WEEKS",
        "- Security and Peace Management",
        "- Security and Crimes Prevention Intelligence",
        "PROFESSIONAL ADVANCE CERTIFICATE (PAC) - 3 WEEKS",
        "- VIP Security and Defense Intelligence",
        "DIPLOMA CERTIFICATE (DIP) - 8 WEEKS",
        "- Human Security and Faculties Protections Intelligence",
        "HIGHER DIPLOMA CERTIFICATE (HDP) - 26 WEEKS",
        "- Crimes Investigations and Detections Intelligence",
        "SPECIAL DIPLOMA (SDIP) - 24 WEEKS",
        "- National Security and Intelligence",
        "DIPLOMA CERTIFICATES (DIP) - 12 WEEKS",
        "- Place of Worship Security and Defence Intelligence",
        "- Institutes and Schools Security and Defence Intelligence",
        "- Criminology and Penology",
        "HIGHER DIPLOMA CERTIFICATE (HDP) - 26 WEEKS",
        "- Unarmed Counter Terrorism Intelligence",
        "- Criminology",
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#012E6B] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#283a53] transition duration-300 transform hover:scale-105">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseOfferings;
