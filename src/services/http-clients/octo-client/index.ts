import { Octokit } from '@octokit/core';

const generateNewClient: (payload?: any) => Octokit = () => {
  const octokit = new Octokit();
  return octokit;
};

const GithubClient = generateNewClient();
// {
// process.env.REACT_APP_SAMPLE_PERSONAL_TOKEN
// TODO: it's not a production app so I just added token like this
// githubToken: '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',
// }

export default GithubClient;
