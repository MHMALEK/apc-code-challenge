import HttpClient from '../../../utils/http-client';

/**
 * http client that interacts with
 */
const defaultHttpClient = new HttpClient(process.env.BASE_API_URL);

export default defaultHttpClient;
