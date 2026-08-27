import nodemailer from 'nodemailer';

export const sendContactEmail = async (messageData) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Request from ${messageData.name}`,
      text: `
        Name: ${messageData.name}
        Email: ${messageData.email}
        Message: ${messageData.message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    // Rethrow or just log based on requirement. The plan says "wrapped in try/catch to ensure DB save succeeds even if email fails"
    // So we can just log here.
  }
};
