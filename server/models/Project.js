import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techs: [{ type: String }],
  liveUrl: { type: String },
  githubUrl: { type: String },
  imageUrl: { type: String },
  order: { type: Number, default: 0 }
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
