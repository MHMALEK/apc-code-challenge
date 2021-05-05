import React from 'react';
import convertIsoStringToDDMMYYYY from 'src/utils/date';
import { CommonIssueItemPropsType } from './types';

const CommonIssueItem: React.FunctionComponent<CommonIssueItemPropsType> = ({
  body,
  created_at,
  updated_at,
  url,
  user,
}) => (
  <div>
    <a href={url}>
      <p>{user}</p>
      <p>{convertIsoStringToDDMMYYYY(created_at)}</p>
      <p>{convertIsoStringToDDMMYYYY(updated_at)}</p>
    </a>
    <br />
    <br />
    <br />
  </div>
);

export default CommonIssueItem;
