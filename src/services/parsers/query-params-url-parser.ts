const parseUrlQueryParameters = (urlWithQueryParams: string, param: string) => {
  // TODO: not very good browser support. just for this code challenge test
  const urlParams = new URLSearchParams(urlWithQueryParams);
  return urlParams.get(param);
};
export default parseUrlQueryParameters;
