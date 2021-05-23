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

  const position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position =>
        console.log({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      err => console.log(err)
    );
  };

  React.useEffect(() => {
    if (navigator.geolocation) {
      position();

      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function(result) {
          if (result.state === 'granted') {
            console.log(result.state);
          } else if (result.state === 'prompt') {
            console.log(result.state);
          } else if (result.state === 'denied') {
          }
          result.onchange = function() {
            console.log(result.state);
          };
        });
    }
  }, []);

  return (
    <App description="">{me ? `Welcome ${me.name}` : <LoggedOutHome />}</App>
  );
};

export default withApollo(Home, { getDataFromTree });
