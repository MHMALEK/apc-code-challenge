import React from 'react';
import convertIsoStringToDDMMYYYY from 'src/utils/date';
import { CommonIssueItemPropsType } from './types';

const CommonIssueItem: React.FunctionComponent<CommonIssueItemPropsType> = ({
  created_at,
  updated_at,
  url,
  user,
}) => (
  <div>
    <a className="issue-item" href={url}>
      <p className='user'>{user}</p>
      <p className='created_at'>{convertIsoStringToDDMMYYYY(created_at)}</p>
      <p className='updated_at'>{convertIsoStringToDDMMYYYY(updated_at)}</p>
    </a>
  </div>
);

export default CommonIssueItem;
