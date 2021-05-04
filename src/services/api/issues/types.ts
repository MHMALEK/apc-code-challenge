export enum SortTypes {
  created = 'created',
  updated = 'updated',
  comments = 'comments',
}

export enum StateTypes {
  open = 'open',
  updated = 'closed',
  comments = 'all',
}
export interface FetchIssuesListPayloadType {
  organization: string;
  repo: string;
  perPage: number;
  page?: number;
  sort?: SortTypes;
  state?: StateTypes;
}
export type FetchIssuesListType = (payload: FetchIssuesListPayloadType) => void;
