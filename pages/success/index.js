import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const SuccessPage = () => {
  const router = useRouter();
  const [enrollment, setEnrollment] = useState(null);
  const { reference } = router.query;

  useEffect(() => {
    const fetchEnrollmentDetails = async () => {
      if (reference) {
        try {
          const response = await fetch("/api/enrollments/get-enrollment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ reference }),
          });

          if (response.ok) {
            const data = await response.json();
            setEnrollment(data.enrollment);
          }
        } catch (error) {
          console.error("Error fetching enrollment details:", error);
        }
      }
    };

    fetchEnrollmentDetails();
  }, [reference]);

  return (
    <section>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Payment Successful!
              </h2>
              <p className="mt-2 text-gray-600">
                Thank you for enrolling. Your payment has been processed
                successfully.
              </p>
            </div>

            {enrollment && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  Enrollment Details
                </h3>
                <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Full Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {enrollment.fullName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {enrollment.email}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Course Type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {enrollment.courseType}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Selected Course
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {enrollment.specificCourse}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Student Type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {enrollment.studentType === "local"
                        ? "Local Student"
                        : "International Student"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Amount Paid
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      GHS {enrollment.amount.toLocaleString()}
                    </dd>
                  </div>
                </dl>
              </div>
            )}
            <Link href="/">
              <div className="mt-8 text-center">
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Go to Home
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SuccessPage;
