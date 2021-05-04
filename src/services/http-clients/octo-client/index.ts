import { Octokit } from '@octokit/core';

const generateNewClient: (payload?: any) => Octokit = ({ githubToken }) => {
  const octokit = new Octokit({
    auth: githubToken,
  });
  return octokit;
};

const GithubClient = generateNewClient({
  githubToken: process.env.REACT_APP_SAMPLE_PERSONAL_TOKEN,
});

export default GithubClient;
