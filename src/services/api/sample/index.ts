import SampleClient from '../../default-client';
import { HttpMethod } from '../../../utils/http-client';
import GithubClient from '../../octo-client';

export const sampleApi = (sample: string) =>
  SampleClient.request(HttpMethod.GET, '/sample', sample);

export const sampleApiGit = () =>
  GithubClient.request('GET /repos/vuejs/vue/issues', {
    per_page: 20,
    page: 2,
    sort: 'created', // 'updated','comments',
    state: 'all', // 'closed', 'all'
  });


  // <https://api.github.com/repositories/11730342/issues?per_page=20&page=1&sort=created&state=all>; rel="prev", 
  // <https://api.github.com/repositories/11730342/issues?per_page=20&page=3&sort=created&state=all>; rel="next",
  //  <https://api.github.com/repositories/11730342/issues?per_page=20&page=572&sort=created&state=all>; rel="last", 
  //  <https://api.github.com/repositories/11730342/issues?per_page=20&page=1&sort=created&state=all>; rel="first"