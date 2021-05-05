import { HttpMethod } from '../../../utils/http-client';
import GithubClient from '../../http-clients/octo-client';
import { FetchIssuesListType } from './types';

/**
 * Returns the list of issues in a repo of organizations
 *
 * @param {string} organization name of organizaion
 * @param {string} repo name of repo on that organization
 * @param {number} perPage number of issues per page
 * @param {number} page the page to see issues
 * @param {string} sort sort by this payload
 * @param {string} state show issues with that state

 * @return {object} return the list of issues
 */
export const fetchIssuesList: FetchIssuesListType = ({
  organization,
  repo,
  perPage,
  page,
  sort,
  issueState,
}) =>
  GithubClient.request(
    `${HttpMethod.GET} /repos/${organization}/${repo}/issues`,
    {
      per_page: perPage,
      page,
      sort,
      state: issueState,
    },
  );

// <https://api.github.com/repositories/11730342/issues?per_page=20&page=1&sort=created&state=all>; rel="prev",
// <https://api.github.com/repositories/11730342/issues?per_page=20&page=3&sort=created&state=all>; rel="next",
//  <https://api.github.com/repositories/11730342/issues?per_page=20&page=572&sort=created&state=all>; rel="last",
//  <https://api.github.com/repositories/11730342/issues?per_page=20&page=1&sort=created&state=all>; rel="first"
