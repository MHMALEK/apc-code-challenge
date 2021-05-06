import { SortTypes, StateTypes } from 'src/services/api/issues/types';

export enum ActionType {
  BOOTSTRAP_APP = 'BOOTSTRAP_APP',
  FETCH_ISSUES_ACTION = 'FETCH_ISSUES_ACTION',
  FETCH_ISSUES_ACTION_FULLFILLED = 'FETCH_ISSUES_ACTION_FULLFILLED',
  FETCH_ISSUES_ACTION_FAILED = 'FETCH_ISSUES_ACTION_FAILED',
  UPDATE_ISSUES_PAGINATION = 'UPDATE_ISSUES_PAGINATION',
  CHANGE_PAGE_ISSUES_LIST = 'CHANGE_PAGE_ISSUES_LIST',
}

// state type and init state
export interface IssuesType {
  payload: { organization: any; repo: any; perPage: any; page: any; sort: any };
}
export interface MainInitStateType {
  issues: IssuesType | null;
  isPending: boolean;
  paginationData: {
    total: string;
  };
  searchData: {
    organization: string | null;
    repo: string | null;
    perPage: number | null;
    page: number;
    sort?: SortTypes;
    issueState?: StateTypes;
  };
}

// action Types
export interface FetchIssuesListActionPayloadType {
  sort: SortTypes;
  perPage: number | null;
  issueState: StateTypes;
  organization: string;
  repo: string;
  page: number;
}

export interface FetchIssuesListActionType {
  type: ActionType.FETCH_ISSUES_ACTION;
  payload: FetchIssuesListActionPayloadType;
}

// full filled

export interface FetchIssuesListFullfilledActionType {
  type: ActionType.FETCH_ISSUES_ACTION_FULLFILLED;
  payload: any;
}

// failed

export interface FetchIssuesListFailedActionType {
  type: ActionType.FETCH_ISSUES_ACTION_FAILED;
}

// pagination

export interface PaginationDataType {
  last: string;
  first: string;
  [x: string]: string;
}

export interface UpdateIssuesPagination {
  type: ActionType.UPDATE_ISSUES_PAGINATION;
  payload: string;
}

export interface ChangePageIssuesList {
  type: ActionType.CHANGE_PAGE_ISSUES_LIST;
  payload: number;
}
