import { useState, useEffect } from "react";
import { Patient } from "../../types";
import patientService from "../../services/patients";

interface Props {
  id: string
}

const PatientPage = ({ id }: Props) => {
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    const fetchPatient = async () => {
      const patientToGet = await patientService.getOne(id);
      setPatient(patientToGet);
    };
    fetchPatient();
  }, [id]);

  return (
    <div>
      <h3>name: {patient?.name}</h3>
      <br />
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
    </div>
  );

};

export default PatientPage;