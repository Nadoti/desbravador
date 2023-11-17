import axios from "axios";
const BASE_URL = "https://api.github.com";


export const getUser = (username: string) => {
  const url = `${BASE_URL}/users/${username}`;
  return axios.get(
    url
  );
};

export const getUserRepository = (username: string) => {
  const url = `${BASE_URL}/users/${username}/repos`;
  return axios.get(
    url
  );
};

export const getUserRepositoryDatails = (fullName: string) => {
  const url = `${BASE_URL}/repos/${fullName}`;
  return axios.get(
    url
  );
};