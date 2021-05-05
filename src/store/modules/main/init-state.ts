import { SortTypes, StateTypes } from 'src/services/api/issues/types';
import { MainInitStateType } from './types';

const initialState: MainInitStateType = {
  issues: null,
  isPending: true,
  paginationData: {
    total: '0',
  },
  searchData: {
    organization: null,
    repo: null,
    perPage: null,
    page: 1,
    sort: SortTypes.updated,
    issueState: StateTypes.all,
  },
};

export default initialState;
