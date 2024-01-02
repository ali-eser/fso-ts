import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, gender, occupation } = req.body;
  const newEntry = patientService.addPatients({
    name,
    dateOfBirth,
    gender,
    occupation
  });

  res.json(newEntry);
});

export default router;