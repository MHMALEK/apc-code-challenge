export type IssuesLiestDataTypes = {
  body: string;
  id: string;
  created_at: string;
  updated_at: string;
  url: string;
};
const transformIssuesList = (data: any): IssuesLiestDataTypes =>
  data.reduce((res: any, current: any) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { body, id, created_at, updated_at, url } = current;
    // user name from user object
    const { login } = current.user;
    res.push({
      body,
      id,
      created_at,
      updated_at,
      url,
      user: login,
    });
    return res;
  }, []);

export default transformIssuesList;
