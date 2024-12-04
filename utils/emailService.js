import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const sendEnrollmentConfirmationEmail = async (
  enrollment,
  studentEmail
) => {
  // Student confirmation email template
  const studentHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Enrollment Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f7f7f7; font-family: 'Arial', sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0; padding: 0; background-color: #f7f7f7;">
        <tr>
          <td align="center" style="padding: 45px 0;">
            <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background-color: #000000; padding: 30px 40px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Ambassador Technology</h1>
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td style="padding: 40px;">
                  <!-- Thank You Message -->
                  <div style="text-align: center; margin-bottom: 30px;">
                    <h2 style="color: #333333; margin: 0 0 15px 0; font-size: 24px;">Welcome to Ambassador Technology!</h2>
                    <p style="color: #666666; margin: 0; font-size: 16px;">
                      Thank you for enrolling in our course. We're excited to have you join us!
                    </p>
                  </div>

                  <!-- Enrollment Info -->
                  <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
                    <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px;">Enrollment Details</h3>
                    <p style="color: #666666; margin: 0 0 5px 0; font-size: 14px;">
                     
                      <strong>Enrollment Date:</strong> ${formatDate(
                        enrollment.createdAt
                      )}<br>
                      <strong>Student Name:</strong> ${enrollment.fullName}<br>
                      <strong>Course Type:</strong> ${enrollment.courseType}<br>
                      <strong>Selected Course:</strong> ${
                        enrollment.specificCourse
                      }<br>
                      <strong>Student Type:</strong> ${
                        enrollment.studentType === "local"
                          ? "Local Student"
                          : "International Student"
                      }<br>
                      <strong>Amount Paid:</strong> GHS ${enrollment.amount.toLocaleString()}
                    </p>
                  </div>

                  <!-- Next Steps -->
                  <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
                    <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px;">Next Steps</h3>
                    <p style="color: #666666; margin: 0; font-size: 14px;">
                      1. You will receive a welcome email from us.<br>
                      2. Our team will contact you to confirm your class schedule.<br>
                      
                    </p>
                  </div>

                  <!-- Support Section -->
                  <div style="text-align: center; padding: 30px 0; border-top: 1px solid #eee;">
                    <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px;">Need Help?</h3>
                    <p style="color: #666666; margin: 0; font-size: 14px;">
                      If you have any questions about your enrollment, please contact our support team.<br>
                      Email:ambassadortechnologygh@gmail.com<br>
                      Phone: 024-836-3622
                    </p>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fa; padding: 30px 40px; text-align: center; border-top: 1px solid #eee;">
                  <p style="color: #666666; margin: 0 0 10px 0; font-size: 12px;">
                    This is an automated email from Ambassador Technology. Please do not reply to this email.
                  </p>
                  <p style="color: #666666; margin: 0; font-size: 12px;">
                    &copy; ${new Date().getFullYear()} Ambassador Technology. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // Admin notification email template
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Enrollment Notification</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f7f7f7; font-family: 'Arial', sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0; padding: 0; background-color: #f7f7f7;">
        <tr>
          <td align="center" style="padding: 45px 0;">
            <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background-color: #000000; padding: 30px 40px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">New Course Enrollment</h1>
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td style="padding: 40px;">
                  <!-- Enrollment Info -->
                  <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px;">
                    <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px;">Student Information</h3>
                    <p style="color: #666666; margin: 0 0 5px 0; font-size: 14px;">
                      
                      <strong>Enrollment Date:</strong> ${formatDate(
                        enrollment.createdAt
                      )}<br>
                      <strong>Student Name:</strong> ${enrollment.fullName}<br>
                      <strong>Email:</strong> ${enrollment.email}<br>
                      <strong>Course Type:</strong> ${enrollment.courseType}<br>
                      <strong>Selected Course:</strong> ${
                        enrollment.specificCourse
                      }<br>
                      <strong>Student Type:</strong> ${
                        enrollment.studentType === "local"
                          ? "Local Student"
                          : "International Student"
                      }<br>
                      <strong>Amount Paid:</strong> GHS ${enrollment.amount.toLocaleString()}
                    </p>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                  <p style="color: #666666; margin: 0; font-size: 12px;">
                    &copy; ${new Date().getFullYear()} Ambassador Technology. Internal enrollment notification.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    // Send both emails concurrently
    await Promise.all([
      // Student confirmation email
      transporter.sendMail({
        from: {
          name: "Ambassador Technology",
          address: process.env.EMAIL_USER,
        },
        to: studentEmail,
        subject: `Welcome to Ambassador Technology - Enrollment Confirmation`,
        html: studentHtml,
      }),
      // Admin notification email
      transporter.sendMail({
        from: {
          name: "Ambassador Technology Enrollments",
          address: process.env.EMAIL_USER,
        },
        to: process.env.ADMIN_EMAIL,
        subject: `New Course Enrollment - ${enrollment.fullName}`,
        html: adminHtml,
      }),
    ]);
    return true;
  } catch (error) {
    console.error("Error sending enrollment emails:", error);
    return false;
  }
};
