import { call, put, select, takeLatest } from 'redux-saga/effects';
import { fetchIssuesList } from 'src/services/api/issues';
import transformIssuesList from 'src/services/data-transformers';
import parseLinkHeader from 'src/services/parsers/link-head-parser';
import {
  fetchIssuesListActionFailed,
  fetchIssuesListActionFullfilled,
  updateIssuesPagination,
} from './action';
import { selectRepoNameAndInfo } from './selector';
import { ActionType, PaginationDataType } from './types';
import { ResponseGenerator } from '../../../services/api/issues/types';
import parseUrlQueryParameters from '../../../services/parsers/query-params-url-parser';

function* fetchIssuesListSaga(action: any) {
  try {
    const { organization, repo, perPage, page, sort, issueState } = action.payload;
    const response: ResponseGenerator = yield call(fetchIssuesList, {
      organization,
      repo,
      perPage,
      page,
      sort,
      issueState,
    });
    const transformAndNormalizeData = transformIssuesList(response.data);
    yield put(fetchIssuesListActionFullfilled(transformAndNormalizeData));
    yield handlePaginationData(response.headers.link);
  } catch (e) {
    yield put(fetchIssuesListActionFailed());
  }
}

function* handlePaginationData(data: any) {
  const paginationData: PaginationDataType = yield call(parseLinkHeader, data);
  const total = parseUrlQueryParameters(paginationData.last, 'page');
  yield put(updateIssuesPagination(total));
}

function* updateIssuesListSaga(action: any) {
  try {
    const page = action.payload;
    const { organization, repo, perPage, sort, issueState } = yield select(
      selectRepoNameAndInfo,
    );
    const response: ResponseGenerator = yield call(fetchIssuesList, {
      organization,
      repo,
      perPage,
      page,
      sort,
      issueState
    });
    const transformAndNormalizeData = transformIssuesList(response.data);
    yield put(fetchIssuesListActionFullfilled(transformAndNormalizeData));
    yield handlePaginationData(response.headers.link);
  } catch (e) {
    yield put(fetchIssuesListActionFailed());
  }
}

const Sagas = [
  takeLatest(ActionType.FETCH_ISSUES_ACTION, fetchIssuesListSaga),
  takeLatest(ActionType.CHANGE_PAGE_ISSUES_LIST, updateIssuesListSaga),
];

export default Sagas;
