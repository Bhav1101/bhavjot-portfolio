import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  duration: { type: String, required: true },
  cgpa: { type: String },
  order: { type: Number, default: 0 }
});

const Education = mongoose.model('Education', educationSchema);
export default Education;
