import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  issuer: { type: String, required: true },
  duration: { type: String, required: true },
  url: { type: String },
  order: { type: Number, default: 0 }
});

const Certification = mongoose.model('Certification', certificationSchema);
export default Certification;
