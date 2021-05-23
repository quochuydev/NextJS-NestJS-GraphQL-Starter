import React, { useState } from 'react';
import App from 'components/App';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import withApollo from 'lib/withApollo';

function Checkin() {
  const [value, onChange] = useState(new Date());

  return (
    <App description="" showFooter={false}>
      <Calendar onChange={onChange} value={value} />
    </App>
  );
}

export default withApollo(Checkin);
