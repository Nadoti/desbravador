import axios from "axios";
const BASE_URL = "https://api.github.com";

const token = "seu token aqui"

export const getUser = (username: string) => {
  const url = `${BASE_URL}/users/${username}`;
  return axios.get(
    url, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getUserRepository = (username: string) => {
  const url = `${BASE_URL}/users/${username}/repos`;
  return axios.get(
    url, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getUserRepositoryDatails = (fullName: string) => {
  const url = `${BASE_URL}/repos/${fullName}`;
  return axios.get(
    url, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};