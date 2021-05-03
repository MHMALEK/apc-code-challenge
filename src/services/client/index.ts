import { HttpClient } from 'utils/http-client';

/**
 * Snapp client that interacts with base Snapp APIs
 */
const SnappClient = new HttpClient(process.env.BASE_API_URL);
const SmappClient = new HttpClient(process.env.SMAPP_API_URL);

export { SnappClient, SmappClient };
