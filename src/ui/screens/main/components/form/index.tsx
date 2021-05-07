import React from 'react';

// dependencies
import { Formik } from 'formik';


// base components
import BaseInput from '../../../../base/base-input';
import BaseButton from '../../../../base/button';

// styles
import { StyledButtonWrapper, StyledForm } from './styled';

// form data
import initialValues from './data/init-values';
import perPageOptions from './data/perPageOptions';
import validateIssuesForm from './validation';
import { SearchIssuesFormPropsType } from './types';
import { ButtonVariants } from '../../../../base/button/types';
import { StateTypes } from '../../../../../services/api/issues/types';

// this component handle search input and get data from user to search api
// TODO: it can be improved many ways.
const SearchIssuesForm: React.FunctionComponent<SearchIssuesFormPropsType> = ({
  onFormSubmit,
}) => (
  <Formik
    initialValues={initialValues}
    validate={(values) => validateIssuesForm(values)}
    onSubmit={(values) => {
      onFormSubmit(values);
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <StyledForm onSubmit={handleSubmit}>
        <BaseInput
          type='text'
          name='organizationName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.organizationName}
          placeholder='organization name'
        />

        <BaseInput
          type='text'
          name='repoName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.repoName}
          placeholder='repository name'
        />
        {errors.repoName && touched.repoName && errors.repoName}

        <select name='perPage' onChange={handleChange} onBlur={handleBlur}>
          {perPageOptions &&
            perPageOptions.map(({ value, label }, index) => (
              <option value={value} key={index}>
                {label}
              </option>
            ))}
        </select>

        {/* TODO: unfortunatly, api return 500 error when I changed state of issues */}
        <select
          disabled
          name='issueState'
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {StateTypes &&
            Object.keys(StateTypes).map((state, index) => (
              <option value={state} key={index}>
                {state}
              </option>
            ))}
        </select>
        <StyledButtonWrapper>
          <BaseButton
            width='305px'
            type='submit'
            variant={ButtonVariants.PRIMARY}
          >
            Show issues
          </BaseButton>
        </StyledButtonWrapper>
      </StyledForm>
    )}
  </Formik>
);

export default SearchIssuesForm;
