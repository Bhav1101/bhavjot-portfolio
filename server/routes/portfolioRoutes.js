import express from 'express';
import {
  getProjects,
  getExperience,
  getSkills,
  getCertifications,
  getEducation
} from '../controllers/portfolioController.js';

const router = express.Router();

router.route('/projects').get(getProjects);
router.route('/experience').get(getExperience);
router.route('/skills').get(getSkills);
router.route('/certifications').get(getCertifications);
router.route('/education').get(getEducation);

export default router;
