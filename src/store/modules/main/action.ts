import {
  ActionType,
  FetchIssuesListActionType,
  FetchIssuesListActionPayloadType,
  FetchIssuesListFailedActionType,
  FetchIssuesListFullfilledActionType,
  UpdateIssuesPagination,
  ChangePageIssuesList,
} from './types';

export const bootsrapApp = () => ({
  type: ActionType.BOOTSTRAP_APP,
});

export const fetchIssuesListAction = (
  payload: FetchIssuesListActionPayloadType,
): FetchIssuesListActionType => ({
  type: ActionType.FETCH_ISSUES_ACTION,
  payload,
});

export const fetchIssuesListActionFullfilled = (
  payload: any,
): FetchIssuesListFullfilledActionType => ({
  type: ActionType.FETCH_ISSUES_ACTION_FULLFILLED,
  payload,
});

export const fetchIssuesListActionFailed = (): FetchIssuesListFailedActionType => ({
  type: ActionType.FETCH_ISSUES_ACTION_FAILED,
});

export const updateIssuesPagination = (
  payload: any,
): UpdateIssuesPagination => ({
  type: ActionType.UPDATE_ISSUES_PAGINATION,
  payload,
});

export const changePaginationIssuesList = (
  payload: number,
): ChangePageIssuesList => ({
  type: ActionType.CHANGE_PAGE_ISSUES_LIST,
  payload,
});

export type MainModuleActionType =
  | FetchIssuesListFailedActionType
  | FetchIssuesListFullfilledActionType
  | FetchIssuesListActionType
  | UpdateIssuesPagination
  | ChangePageIssuesList;
