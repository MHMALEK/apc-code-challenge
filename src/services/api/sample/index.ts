import SampleClient from 'services/client';
import { HttpMethod } from 'utils/http-client';

export const sampleApi = (sample: string) => {
  return SampleClient.request(HttpMethod.GET, '/sample', sample);
};
