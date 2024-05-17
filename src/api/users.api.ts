import axios from "axios";
import { BASE_URL } from "./config.api";

export type User = {
  id: number;
  name: string;
  mobile: string | number;
  email: string;
  ratio: string;
};

export async function postUsers(user: User) {
  const res = await axios.post<User>(`${BASE_URL}/users`, user);
  return res.data;
}

export async function getUsers() {
  const res = await axios.get<User[]>(`${BASE_URL}/users`);
  return res.data;
}
