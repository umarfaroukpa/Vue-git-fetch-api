import axios from 'axios';

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchRepositories = (username, page = 1, perPage = 5) => {
  return axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
    params: {
      page,
      per_page: perPage,
    },
  });
};
