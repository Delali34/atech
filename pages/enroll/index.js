"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PaystackButton } from "react-paystack";
import React, { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    courseType: "",
    specificCourse: "",
    studentType: "local",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Course pricing (in GHS)
  const coursePricing = {
    "Professional Basic Certificate": {
      local: 1500,
      international: 2500,
    },
    "Professional Advanced Certificate": {
      local: 2000,
      international: 3000,
    },
    "Diploma Certificate": {
      local: 3500,
      international: 5000,
    },
    "Higher Diploma Certificate": {
      local: 5000,
      international: 7500,
    },
    "Special Diploma": {
      local: 4500,
      international: 7000,
    },
    "Diploma Certificate": {
      local: 4000,
      international: 6000,
    },
    "Certificate Program": {
      local: 2500,
      international: 4000,
    },
  };

  const courses = {
    "Professional Basic Certificate": [
      "Security and Peace Management",
      "Security and Crimes Prevention Intelligence",
    ],
    "Professional Advanced Certificate": [
      "VIP Security and Defense Intelligence",
    ],
    "Diploma Certificate": [
      "Human Security and Faculties Protection Intelligence",
    ],
    "Higher Diploma Certificate": [
      "Crimes Investigations and Detections Intelligence",
      "Unarmed Counter Terrorism Intelligence",
      "Criminology",
    ],
    "Special Diploma": ["National Security and Intelligence"],
    "Diploma Certificate": [
      "Place of Worship Security and Defence Intelligence",
      "Institutes and Schools Security and Defence Intelligence",
      "Criminology and Penology",
    ],
    "Certificate Program": [
      "CCTV Digital and IP Systems",
      "CCTV Control Room Operation Skills",
      "Closed-Circuit Television Installation",
      "Access Control Systems",
      "Video Intercom Systems",
      "Intruder Alarms Systems",
      "Electric Fencing Systems",
      "Gate Automation",
      "GPS Tracking System",
      "Fire Alarm System",
      "Drone Piloting",
    ],
  };

  const countries = [
    "Ghana",
    "Nigeria",
    "Kenya",
    "South Africa",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Other",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.country) {
      newErrors.country = "Please select your country";
    }

    if (!formData.courseType) {
      newErrors.courseType = "Please select a course type";
    }
    if (!formData.specificCourse) {
      newErrors.specificCourse = "Please select a specific course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const getCurrentPrice = () => {
    if (!formData.courseType) return 0;
    return coursePricing[formData.courseType][formData.studentType];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
    }
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: getCurrentPrice() * 100,
    currency: "GHS",
    publicKey: "pk_test_0edda270529c6a7b50ef15242ef7c4d46bb17909",
    metadata: {
      custom_fields: [
        {
          display_name: "Course Type",
          variable_name: "course_type",
          value: formData.courseType,
        },
      ],
    },
  };

  const handlePaystackSuccessAction = (reference) => {
    console.log("Payment successful!", reference);
    setIsLoading(false);
    setShowConfirmation(false);
    // Handle successful payment - you can add your success logic here
  };

  const handlePaystackCloseAction = () => {
    console.log("Payment closed");
    setIsLoading(false);
    setShowConfirmation(false);
  };

  return (
    <section>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
              <h3 className="text-xl font-bold mb-4">
                Confirm Your Application
              </h3>
              <div className="space-y-3">
                <p>
                  <span className="font-medium">Name:</span> {formData.fullName}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Course:</span>{" "}
                  {formData.specificCourse}
                </p>
                <p>
                  <span className="font-medium">Student Type:</span>{" "}
                  {formData.studentType === "local" ? "Local" : "International"}
                </p>
                <p className="text-lg font-bold">
                  Total Amount: GHS {getCurrentPrice().toLocaleString()}
                </p>
              </div>
              <div className="mt-6 flex space-x-4">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Back
                </button>
                <PaystackButton
                  {...config}
                  text="Proceed to Payment"
                  onSuccess={handlePaystackSuccessAction}
                  onClose={handlePaystackCloseAction}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Course Enrollment Form
            </h2>
          </div>

          <div className="px-6 py-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      } px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm`}
                      required
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm`}
                      required
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border ${
                        errors.country ? "border-red-500" : "border-gray-300"
                      } px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm`}
                      required
                    >
                      <option value="">Select your country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Course Selection
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="courseType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Course Type
                    </label>
                    <select
                      id="courseType"
                      value={formData.courseType}
                      onChange={(e) =>
                        handleInputChange("courseType", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border ${
                        errors.courseType ? "border-red-500" : "border-gray-300"
                      } px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm`}
                      required
                    >
                      <option value="">Select course type</option>
                      {Object.keys(courses).map((courseType) => (
                        <option key={courseType} value={courseType}>
                          {courseType}
                        </option>
                      ))}
                    </select>
                    {errors.courseType && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.courseType}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="specificCourse"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Specific Course
                    </label>
                    <select
                      id="specificCourse"
                      value={formData.specificCourse}
                      onChange={(e) =>
                        handleInputChange("specificCourse", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border ${
                        errors.specificCourse
                          ? "border-red-500"
                          : "border-gray-300"
                      } px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm`}
                      disabled={!formData.courseType}
                      required
                    >
                      <option value="">Select specific course</option>
                      {formData.courseType &&
                        courses[formData.courseType].map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                    </select>
                    {errors.specificCourse && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.specificCourse}
                      </p>
                    )}
                  </div>
                </div>

                {/* Price Display */}
                {formData.courseType && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-md">
                    <h4 className="text-md font-medium text-blue-900 mb-2">
                      Course Fee
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-blue-800">
                          Local Student Fee:
                        </p>
                        <p className="text-lg font-bold text-blue-900">
                          GHS{" "}
                          {coursePricing[
                            formData.courseType
                          ].local.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-blue-800">
                          International Student Fee:
                        </p>
                        <p className="text-lg font-bold text-blue-900">
                          GHS{" "}
                          {coursePricing[
                            formData.courseType
                          ].international.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Student Type */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Student Type
                </h3>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="studentType"
                      value="local"
                      checked={formData.studentType === "local"}
                      onChange={(e) =>
                        handleInputChange("studentType", e.target.value)
                      }
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Local Student</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="studentType"
                      value="international"
                      checked={formData.studentType === "international"}
                      onChange={(e) =>
                        handleInputChange("studentType", e.target.value)
                      }
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      International Student
                    </span>
                  </label>
                </div>
              </div>

              {/* Selected Course Summary */}
              {formData.specificCourse && (
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-md font-medium text-gray-900 mb-2">
                    Your Selection
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Course Type:</span>{" "}
                      {formData.courseType}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Selected Course:</span>{" "}
                      {formData.specificCourse}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Student Type:</span>{" "}
                      {formData.studentType === "local"
                        ? "Local"
                        : "International"}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      Total Fee: GHS {getCurrentPrice().toLocaleString()}
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default EnrollmentForm;
