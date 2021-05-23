import * as React from 'react';
import { get } from 'lodash';
import { getDataFromTree } from '@apollo/client/react/ssr';
import App from 'components/App';
import { useMeQuery } from 'generated';
import LoggedOutHome from 'containers/LoggedOutHome';
import withApollo from 'lib/withApollo';
import Swipe from 'containers/Swipe';

const Home = () => {
  const { data } = useMeQuery();
  const me = get(data, 'me', null);
  console.log({ me });

  return <Swipe />;
};

export default withApollo(Home, { getDataFromTree });
