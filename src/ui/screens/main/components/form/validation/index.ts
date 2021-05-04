const validateIssuesForm = (values: any) => {
  const errors: any = {};
  if (!values.repoName) {
    errors.repoName = 'Required';
  }
  if (!values.organizationName) {
    errors.organizationName = 'Required';
  }

  return errors;
};

export default validateIssuesForm;
