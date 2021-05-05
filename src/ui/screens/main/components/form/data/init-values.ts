import { StateTypes } from 'src/services/api/issues/types';
import perPageOptions from './perPageOptions';

const initialValues = {
  repoName: '',
  organizationName: '',
  perPage: perPageOptions[0],
  issueState: StateTypes.open
};

export default initialValues;
