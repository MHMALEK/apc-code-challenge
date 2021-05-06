/* eslint-disable no-case-declarations */
import { MainModuleActionType } from './action';
import initialState from './init-state';
import { ActionType, MainInitStateType } from './types';

const reducer = (
  state: MainInitStateType = initialState,
  action: MainModuleActionType,
): any => {
  switch (action.type) {
    case ActionType.FETCH_ISSUES_ACTION:
      const { organization, repo, perPage, page, sort, issueState } = action.payload;
      return {
        ...state,
        isPending: true,
        searchData: {
          ...state.searchData,
          organization,
          repo,
          perPage,
          page,
          sort,
          issueState
        },
      };

    case ActionType.FETCH_ISSUES_ACTION_FULLFILLED:
      return {
        ...state,
        isPending: false,
        issues: action.payload,
      };

    case ActionType.FETCH_ISSUES_ACTION_FAILED:
      return {
        ...state,
        isPending: false,
      };

    case ActionType.UPDATE_ISSUES_PAGINATION:
      return {
        ...state,
        paginationData: {
          ...state.paginationData,
          total: action.payload,
        },
      };

    case ActionType.CHANGE_PAGE_ISSUES_LIST:
      return {
        ...state,
        isPending: false,
      };

    default:
      return state;
  }
};

export default reducer;
