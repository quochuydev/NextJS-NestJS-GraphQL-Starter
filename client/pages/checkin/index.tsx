import React, { useState } from 'react';
import App from 'components/App';
import Calendar from 'react-calendar';
import withApollo from 'lib/withApollo';
import { styled } from 'bumbag';
import { BsCheckAll } from 'react-icons/bs';

import 'react-calendar/dist/Calendar.css';

const CheckinButton = styled.button`
  display: inline-block;
  position: relative;
  padding: 12px 36px;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  border: 0;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(90deg, #755bea, #ff72c0);
`;

function Checkin() {
  const [value, onChange] = useState(new Date());

  return (
    <App showFooter={false}>
      <div style={{ textAlign: 'center' }}>
        <CheckinButton
          onClick={() => {
            console.log('check');
          }}
        >
          <span>Check-In Now</span>
        </CheckinButton>
        <p style={{ color: 'green' }}>
          <BsCheckAll />
          <span>Check-in success</span>
        </p>
        <p>Date: {new Date().toISOString()}</p>
      </div>
      <Calendar onChange={onChange} value={value} />
    </App>
  );
}

export default withApollo(Checkin);
