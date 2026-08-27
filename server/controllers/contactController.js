import ContactMessage from '../models/ContactMessage.js';
import { sendContactEmail } from '../services/emailService.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, budget, message } = req.body;

    const newMessage = new ContactMessage({
      name,
      email,
      budget,
      message,
    });

    await newMessage.save();

    // Send email asynchronously
    sendContactEmail({ name, email, budget, message });

    res.status(201).json({ success: true, message: 'Message received' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
