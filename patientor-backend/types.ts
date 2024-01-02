export interface DiagnoseEntry {
  code: string,
  name: string,
  latin?: string
};

export interface PatientEntry {
  id: string,
  name: string,
  dateOfBirth: string,
  gender: string,
  occupation: string
};

export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export enum Gender {
  Other = 'other',
  Male = 'male',
  Female = 'female'
};