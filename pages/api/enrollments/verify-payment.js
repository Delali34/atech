// Update the verify-payment.js API endpoint
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { reference } = req.body;

    if (!reference) {
      return res.status(400).json({
        success: false,
        message: "Payment reference is required",
      });
    }

    const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
    if (!PAYSTACK_SECRET_KEY) {
      console.error("PAYSTACK_SECRET_KEY is not configured");
      return res.status(500).json({
        success: false,
        message: "Payment verification configuration error",
      });
    }

    // Log the verification attempt
    console.log(`Attempting to verify payment reference: ${reference}`);

    // Verify payment with Paystack
    const verifyUrl = `https://api.paystack.co/transaction/verify/${encodeURIComponent(
      reference
    )}`;

    const response = await fetch(verifyUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!data.status) {
      console.error("Payment verification failed:", data);
      return res.status(400).json({
        success: false,
        message: data.message || "Payment verification failed",
      });
    }

    // Check if payment was successful
    if (data.data.status === "success") {
      // Update enrollment status
      const enrollment = await prisma.enrollment.updateMany({
        where: {
          paymentRef: reference,
          paymentStatus: "pending",
        },
        data: {
          paymentStatus: "completed",
        },
      });

      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Payment was not successful",
      status: data.data.status,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return res.status(500).json({
      success: false,
      message: "Error verifying payment",
      error: error.message,
    });
  }
}
