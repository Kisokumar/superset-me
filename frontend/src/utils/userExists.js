import fetchData from "./fetchData";

export default async function userExists(username) {
  if (username) {
    const response = await fetchData(`/users/exists/${username}`, "GET");
    return response;
  }
}
