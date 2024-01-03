export interface DiagnoseEntry {
  code: string,
  name: string,
  latin?: string
};

export interface Entry {
}

export interface PatientEntry {
  id: string,
  name: string,
  ssn: string,
  dateOfBirth: string,
  gender: string,
  occupation: string,
  entries: Entry[]
};

export type NewPatientEntry = Omit<PatientEntry, 'id' | 'entries'>;

export type NonSensitivePatient = Omit<PatientEntry, 'ssn' | 'entries'>;

export enum Gender {
  Other = 'other',
  Male = 'male',
  Female = 'female'
};