// dependencies
import React from 'react';
import ReactPaginate from 'react-paginate';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  changePaginationIssuesList,
  fetchIssuesListAction,
} from '../../../store/modules/main/action';

// styles
import { StyledHeaderSection, StyledMainSection,StyledPageTitle } from './styled';

// common components
import { CommonIssueItemPropsType } from '../../common/issue-item/types';
import CommonIssueItem from '../../common/issue-item';

// services
import { SortTypes } from '../../../services/api/issues/types';
import SearchIssuesForm from './components/form';

const IndexPage: React.FunctionComponent<Record<string, never>> = () => {
  const dispatch = useDispatch();
  const { isPending, issues, paginationData } = useSelector(
    (state: any) => state.main,
  );

  const handleFormSubmit = async (values: any) => {
    const { perPage, organizationName, repoName, issueState } = values;
    // TODO: add validation for repos and ...
    dispatch(
      fetchIssuesListAction({
        sort: SortTypes.comments,
        issueState,
        perPage,
        organization: organizationName,
        repo: repoName,
        page: 1,
      }),
    );
  };

  const renderLoadingOrData = () => {
    if (!issues) {
      return <p>please enter something to start</p>;
    }
    if (isPending) {
      return <p>loading</p>;
    }
    return issues.map((issueItem: CommonIssueItemPropsType) => (
      <CommonIssueItem
        key={issueItem.id}
        created_at={issueItem.created_at}
        updated_at={issueItem.updated_at}
        url={issueItem.url}
        user={issueItem.user}
      />
    ));
  };

  const handlePageClick = ({ selected }: { selected: number }) => {
    // pagination start from zero so we add one to it
    dispatch(changePaginationIssuesList(selected + 1));
  };
  return (
    <div>
      <main>
        <StyledHeaderSection>
          <StyledPageTitle>
            Please enter the name of repo and organization (eg: microsoft, repo: vscode)
          </StyledPageTitle>
          <SearchIssuesForm onFormSubmit={handleFormSubmit} />
        </StyledHeaderSection>
        <StyledMainSection>{renderLoadingOrData()}</StyledMainSection>
        {!isPending && issues && (
          <ReactPaginate
            previousLabel='previous'
            nextLabel='next'
            breakLabel='...'
            breakClassName='break-me'
            pageCount={paginationData.total}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName='pagination'
            activeClassName='active'
          />
        )}
      </main>
    </div>
  );
};

export default IndexPage;
