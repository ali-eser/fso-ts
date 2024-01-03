import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Diary } from "../types";

const getAll = async () => {
  const { data } = await axios.get<Diary[]>(`${apiBaseUrl}/diaries`);
  console.log(data);
  return data;
};

export default { getAll };