// src/services/githubService.js
import axios from 'axios';

const fetchUserData = async ({ username, location, minRepos }) => {
  let queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(' ');
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
    }
  });

  const users = response.data.items;

  const fullDetails = await Promise.all(
    users.map(user =>
      axios.get(`https://api.github.com/users/${user.login}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      }).then(res => res.data)
    )
  );

  return fullDetails;
};

export default fetchUserData;