import Project from '../models/Project.js';
import Experience from '../models/Experience.js';
import Skill from '../models/Skill.js';
import Certification from '../models/Certification.js';
import Education from '../models/Education.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ order: 1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExperience = async (req, res) => {
  try {
    const experience = await Experience.find({}).sort({ order: 1 });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({}).sort({ order: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find({}).sort({ order: 1 });
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEducation = async (req, res) => {
  try {
    const education = await Education.find({}).sort({ order: 1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
