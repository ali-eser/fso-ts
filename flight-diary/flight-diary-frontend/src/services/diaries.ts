import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Diary, NewDiary } from "../types";

const getAll = async () => {
  const { data } = await axios.get<Diary[]>(`${apiBaseUrl}/diaries`);
  return data;
};

const postDiary = async (object: NewDiary) => {
  const newEntry = await axios.post<Diary>(`${apiBaseUrl}/diaries`, object);
  return newEntry;
};

export default { getAll, postDiary };