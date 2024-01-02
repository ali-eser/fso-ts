import patientData from "../../data/patients";
import { NewPatientEntry, PatientEntry } from "../../types";
import { v1 as uuid } from "uuid";

const patients: PatientEntry[] = patientData;

const getPatients = (): PatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }))
};

const addPatients = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry
  }

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default { getPatients, addPatients };