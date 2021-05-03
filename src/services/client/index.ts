import HttpClient from '../../utils/http-client';

/**
 * http client that interacts with
 */
const SampleClient = new HttpClient(process.env.BASE_API_URL);

export default SampleClient;
