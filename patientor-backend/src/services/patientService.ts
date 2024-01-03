import patientData from "../../data/patients";
import { NewPatientEntry, PatientEntry } from "../../types";
import { v1 as uuid } from "uuid";

const patients: PatientEntry[] = patientData;

const getPatients = (): PatientEntry[] => {
  return patients.map(({ id, name, ssn, dateOfBirth, gender, occupation, description, date, specialist, entries }) => ({
    id,
    name,
    ssn,
    dateOfBirth,
    gender,
    occupation,
    description,
    date,
    specialist,
    entries
  }))
};

const getOnePatient = (id: string): PatientEntry => {
  const patient = patients.find(p => p.id === id);
  if (patient) {
    return patient;
  } else {
    throw new Error('no patient with specified id found');
  }
}

const addPatients = (entry: NewPatientEntry): PatientEntry => {
  const newEntry = {
    id: uuid(),
    entries: [],
    ...entry
  }

  patients.push(newEntry);
  return newEntry;
};

export default { getPatients, addPatients, getOnePatient };