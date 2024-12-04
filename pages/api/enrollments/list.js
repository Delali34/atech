// pages/api/enrollments/list.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const enrollments = await prisma.enrollment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(enrollments);
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    res
      .status(500)
      .json({ message: "Error fetching enrollments", error: error.message });
  }
}
