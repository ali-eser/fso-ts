import { useState, useEffect } from "react";
import { Entry } from "../../types";
import patientService from "../../services/patients";

interface Props {
  id: string
}

const PatientPage = ({ id }: Props) => {
  const [patient, setPatient] = useState<Entry>();

  useEffect(() => {
    const fetchPatient = async () => {
      const patientToGet = await patientService.getOne(id);
      setPatient(patientToGet);
    };
    fetchPatient();
  }, [id]);

  console.log(patient);

  return (
    <div>
      <h2>name: {patient?.name}</h2>
      <br />
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
      <br />
      <h3>entries</h3>
      <p><b>{patient?.entries[0].date}</b> {patient?.entries[0].description}</p>
      <ul>
        {patient?.entries[0].diagnosisCodes?.map(code => (
          <li key={code}>{code}</li>
        ))}
      </ul>
    </div>
  );

};

export default PatientPage;