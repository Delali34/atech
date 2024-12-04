import { PrismaClient } from "@prisma/client";
import { sendEnrollmentConfirmationEmail } from "@/utils/emailService";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    fullName,
    email,
    phone,
    country,
    courseType,
    specificCourse,
    studentType,
    amount,
    paymentRef,
    paymentStatus,
  } = req.body;

  // Basic validation
  if (!fullName || !email || !paymentRef || !amount) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  try {
    const enrollment = await prisma.enrollment.create({
      data: {
        fullName,
        email,
        phone,
        country,
        courseType,
        specificCourse,
        studentType,
        amount,
        paymentRef,
        paymentStatus,
      },
    });

    await sendEnrollmentConfirmationEmail(enrollment, enrollment.email);

    return res.status(201).json({ success: true, enrollment });
  } catch (error) {
    console.error("Error creating enrollment:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create enrollment",
    });
  }
}
