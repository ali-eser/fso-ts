import { useState, useEffect } from "react";
import { Entry, DiagnoseEntry } from "../../types";
import patientService from "../../services/patients";
import diagnoseService from "../../services/diagnoses";

interface Props {
  id: string
}

const PatientPage = ({ id }: Props) => {
  const [patient, setPatient] = useState<Entry>();
  const [diagnoses, setDiagnoses] = useState<DiagnoseEntry[]>();

  useEffect(() => {
    const fetchPatient = async () => {
      const patientToGet = await patientService.getOne(id);
      console.log(patientToGet);

      if (patientToGet.entries.length > 0) {
        const diagnoseList = await diagnoseService.getDiagnosis();
        setDiagnoses(diagnoseList);
      } else {
        setDiagnoses([]);
      }

      setPatient(patientToGet);
    };
    fetchPatient();
  }, [id]);

  console.log(patient);
  if (patient?.entries.length > 0) {
    return (
      <div>
        <h2>{patient?.name}</h2>
        <hr />
        <p><b>ssn:</b> {patient?.ssn}</p>
        <p><b>occupation:</b> {patient?.occupation}</p>
        <hr />
        <h3>entries</h3>
        <p><b>{patient?.entries[0].date}</b> {patient?.entries[0].description}</p>
        <ul>
          {patient?.entries[0].diagnosisCodes?.map(code => (
            <li key={code}><b>{code}</b>: {diagnoses?.map(d => {
              if (d.code === code) {
                return d.name;
              }
            })}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{patient?.name}</h2>
        <hr />
        <p><b>ssn:</b> {patient?.ssn}</p>
        <p><b>occupation:</b> {patient?.occupation}</p>
        <hr />
        <h4>no entries found for {patient?.name} </h4>
      </div>
    );
  }

  

};

export default PatientPage;