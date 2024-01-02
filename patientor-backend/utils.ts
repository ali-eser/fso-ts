import { NewPatientEntry, Gender } from "./types";

const toNewPatientEntry = (object: unknown): NewPatientEntry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing patient data');
    }

    if ('name' in object && 'dateOfBirth' in object && 'occupation' in object && 'gender' in object) {
        const newPatientEntry = {
            name: parseName(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation)
        };

        return newPatientEntry;
    }

    throw new Error('Incorrect data: some fields are missing');
};

const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error('Invalid or missing name');
    }

    return name;
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Invalid or missing date of birth');
    }

    return date;
};

const parseOccupation = (occupation: unknown): string => {
    if (!occupation || !isString(occupation)) {
        throw new Error('Invalid or missing occupation');
    }

    return occupation;
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('Invalid or missing gender');
    }

    return gender;
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
};

export default toNewPatientEntry;