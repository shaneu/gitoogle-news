const axios = require('axios');

function formatResponse(response) {
  const formattedResponse = response.map(repo => ({
    created_at: repo.created_at,
    avatar_url: repo.owner.avatar_url,
    html_url: repo.html_url,
    name: repo.name,
    updated_at: repo.updated_at,
    stargazers_count: repo.stargazers_count,
    description: repo.description,
    clone_url: repo.clone_url,
    id: repo.id,
  }));
  return formattedResponse;
}

function searchRepositories(repository) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=${repository}`);

  return axios.get(encodedURI).then(response => response.data.items).then(response => formatResponse(response));
}

function fetchRepos(language) {
  const encodedURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}` +
      `&sort=stars&order=desc&type=Repositories`,
  );

  return axios.get(encodedURI).then(response => response.data.items).then(response => formatResponse(response));
}

module.exports = {
  fetchRepos,
  searchRepositories,
};
