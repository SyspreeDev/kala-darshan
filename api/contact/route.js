import nodemailer from "nodemailer";

export async function POST(req) {
 try {
  const { name, email, phone, company, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form",
    html: `
      <h3>New Contact Form</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `
  });

  return Response.json({ success: true });

 } catch (error) {
  console.log("MAIL ERROR:", error);
  return Response.json({ success: false, error: error.message }, { status: 500 });
 }
}