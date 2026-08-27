import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String },
  order: { type: Number, default: 0 }
});

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
