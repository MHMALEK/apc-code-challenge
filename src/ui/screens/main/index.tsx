import React, { useEffect } from 'react';
import { sampleApiGit } from '../../../services/api/sample';

const IndexPage: React.FunctionComponent<Record<string, never>> = () => {
  const getData = async () => {
    // const data = await sampleApiGit();
    // console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <p>Index</p>;
};

export default IndexPage;
