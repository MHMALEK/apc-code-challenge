import SampleClient from '../../client';
import { HttpMethod } from '../../../utils/http-client';

export const sampleApi = (sample: string) => SampleClient.request(HttpMethod.GET, '/sample', sample);
