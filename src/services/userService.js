import http from "./httpService";

export async function getUsers() {
  const { data } = await http.get("/users");
  return data.users;
}
