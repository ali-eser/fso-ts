export interface DiagnoseEntry {
  code: string,
  name: string,
  latin?: string
}

export interface PatientEntry {
  id: string;
  name?: string;
  ssn?: string;
  dateOfBirth?: string;
  gender?: Gender;
  description?: string;
  date?: string;
  specialist?: string;
  occupation?: string;
  diagnosisCodes?: Array<DiagnoseEntry['code']>;
  entries?: Entry[]
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

interface HealthCheckEntry extends PatientEntry {
  type: "HealthCheck";
  healthCheckRating?: HealthCheckRating;
}

interface OccupationalHealthcareEntry extends PatientEntry {
  type: "OccupationalHealthcare",
  employerName?: string,
  sickLeave?: object,
  discharge?: object,
  diagnosisCodes?: string[]
}

interface HospitalEntry extends PatientEntry {
  type: "Hospital",
  discharge?: object,
  diagnosisCodes?: string[]
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry