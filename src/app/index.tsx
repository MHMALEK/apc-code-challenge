import React, { useEffect } from 'react';
import RootProvider from './providers';

const App: React.FunctionComponent<Record<string, never>> = () => {
  useEffect(() => {}, []);
  return <RootProvider />;
};

export default App;
