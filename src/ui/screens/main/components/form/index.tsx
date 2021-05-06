import React from 'react';

// dependencies
import { Formik } from 'formik';

// base components
import BaseInput from '../../../../base/base-input';
import BaseButton from '../../../../base/button';

// form data
import initialValues from './data/init-values';
import perPageOptions from './data/perPageOptions';
import validateIssuesForm from './validation';
import { SearchIssuesFormPropsType } from './types';
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
      <form onSubmit={handleSubmit}>
        <BaseInput
          type='text'
          name='organizationName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.organizationName}
        />

        <BaseInput
          type='text'
          name='repoName'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.repoName}
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

        <BaseButton type='submit'>Show issues</BaseButton>
      </form>
    )}
  </Formik>
);

export default SearchIssuesForm;