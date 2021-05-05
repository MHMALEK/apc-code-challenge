export enum SortTypes {
  created = 'created',
  updated = 'updated',
  comments = 'comments',
}

export enum StateTypes {
  open = 'open',
  closed = 'closed',
  all = 'all',
}
export interface FetchIssuesListPayloadType {
  organization: string;
  repo: string;
  perPage: number;
  page?: number;
  sort?: SortTypes;
  issueState?: StateTypes;
}

export type FetchIssuesListType = (payload: FetchIssuesListPayloadType) => void;

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
