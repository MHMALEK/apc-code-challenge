import * as Axios from 'axios';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

class HttpClient {
  private _baseUrl: string | undefined;

  /**
   * Create a new Http Client
   */
  constructor(baseUrl: string | undefined) {
    this._baseUrl = baseUrl;
  }

  /**
   * Return base URL of the current Http Client
   */
  public getBaseUrl() {
    return this._baseUrl;
  }

  /**
   * Send request to the desired end point.
   * @param method use HttpMethod enum
   * @param url url string that should be appended to the base url
   * @param data data that should be sent, if any.
   */
  public request<D, P>(
    method: HttpMethod,
    url: string,
    token?: string,
    data?: D,
    params?: P,
  ): Promise<Axios.AxiosResponse> {
    return Axios.default.request({
      baseURL: this._baseUrl,
      // cancelToken: this.axiosSource.token,
      method,
      url,
      headers: {
        Authorization: token,
      },
      data,
      params,
    });
  }
}

export default HttpClient;
