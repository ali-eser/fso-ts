import axios from "axios";
import { DiagnoseEntry } from "../types";

import { apiBaseUrl } from "../constants";

const getDiagnosis = async () => {
  const { data } = await axios.get<DiagnoseEntry[]>(`${apiBaseUrl}/diagnoses`);
  return data;
};

export default { getDiagnosis };