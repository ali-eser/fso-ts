export interface DiagnoseEntry {
  code: string,
  name: string,
  latin?: string
}

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<DiagnoseEntry['code']>;
}

export interface PatientEntry {
  id: string,
  name: string,
  ssn: string,
  dateOfBirth: string,
  gender: string,
  occupation: string,
  entries: Entry[]
}

export type NewPatientEntry = Omit<PatientEntry, 'id' | 'entries'>;

export type NonSensitivePatient = Omit<PatientEntry, 'ssn' | 'entries'>;

export enum Gender {
  Other = 'other',
  Male = 'male',
  Female = 'female'
};

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare",
  diagnosisCodes?: string[]
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital",
  diagnosisCodes?: string[]
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;