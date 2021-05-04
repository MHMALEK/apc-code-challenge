import React, { useEffect } from 'react';
import { Formik } from 'formik';
import BaseInput from '../../base/base-input';
import BaseButton from '../../base/button';
import validateIssuesForm from './components/form/validation';
import perPageOptions from './components/form/data/perPageOptions';
import initialValues from './components/form/data/init-values';

const IndexPage: React.FunctionComponent<Record<string, never>> = () => {
  const getData = async () => {
    // const data = await sampleApiGit();
    // console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFormSubmit = (values: any, setSubmitting: any) => {};

  return (
    <div>
      <main>
        <section>
          <div className='top-details'>
            Please enter the name of repo and organization
          </div>
          <Formik
            initialValues={initialValues}
            validate={(values) => validateIssuesForm(values)}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values, setSubmitting);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <BaseInput
                  type='text'
                  name='repoName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repoName}
                />
                {errors.repoName && touched.repoName && errors.repoName}
                <BaseInput
                  type='text'
                  name='organizationName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.organizationName}
                />
                <select
                  name='perPage'
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {perPageOptions &&
                    perPageOptions.map(({ value, label }, index) => (
                      <option value={value} key={index}>
                        {label}
                      </option>
                    ))}
                </select>
                {errors.organizationName &&
                  touched.organizationName &&
                  errors.organizationName}
                <BaseButton type='submit' disabled={isSubmitting}>
                  Show issues
                </BaseButton>
              </form>
            )}
          </Formik>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
