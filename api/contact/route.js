import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, company, message } = await req.json();

    // ✅ transporter setup (Gmail OR any SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS  // app password
      }
    });

    // ✅ Email receiver
    const EMAIL_TO = "sales@oss-me.com"; // change this

    // ✅ mail options
    const mailOptions = {
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
      `
    };

    // ✅ send mail
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Error:", error);

    return new Response(
      JSON.stringify({ success: false, message: "Email failed" }),
      { status: 500 }
    );
  }
}