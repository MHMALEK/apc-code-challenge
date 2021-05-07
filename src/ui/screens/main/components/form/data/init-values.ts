import { StateTypes } from 'src/services/api/issues/types';
import perPageOptions from './perPageOptions';

const initialValues = {
  repoName: 'vscode',
  organizationName: 'microsoft',
  perPage: perPageOptions[0].value,
  issueState: StateTypes.open
};

export default initialValues;
