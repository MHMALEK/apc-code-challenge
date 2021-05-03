import SampleClient from 'Services/client';
import { HttpMethod } from 'Utils/http-client';

export const sampleApi = (sample: string) => {
  return SampleClient.request(HttpMethod.GET, '/sample', sample);
};
