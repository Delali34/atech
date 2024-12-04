import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { reference } = req.body;

  if (!reference) {
    return res.status(400).json({
      success: false,
      message: "Payment reference is required",
    });
  }

  try {
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        paymentRef: reference,
      },
    });

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: "Enrollment not found",
      });
    }

    return res.status(200).json({ success: true, enrollment });
  } catch (error) {
    console.error("Error fetching enrollment:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch enrollment",
    });
  }
}
