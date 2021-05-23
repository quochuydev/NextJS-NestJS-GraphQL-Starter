import * as React from 'react';
import { useMemo, useState } from 'react';
import * as _ from 'lodash';
import { AiFillFire, AiFillCalendar } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { styled } from 'bumbag';
import Link from 'next/link';

const Navbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 20px 0;

  svg {
    display: block;
    flex: 1;
    fill: #dadfe6;
    font-size: 1.5rem;
  }

  @media (min-width: 1025px) {
    width: 400px;
    margin: auto;
  }
`;

const NavBar = (props: any) => {
  const { asPath } = props;
  const isActive = path => (path == asPath ? { fill: '#fe466d' } : {});

  return (
    <Navbar>
      <Link as="/" href="/" passHref>
        <AiFillFire style={isActive('/')} />
      </Link>
      <Link as="/checkin" href="/checkin" passHref>
        <AiFillCalendar style={isActive('/checkin')} />
      </Link>
      {/* <Link as="/chat" href="/chat" passHref>
        <AiFillWechat style={isActive('/chat')} />
      </Link> */}
      <Link as="/profile" href="/profile" passHref>
        <FaUserAlt style={isActive('/profile')} />
      </Link>
    </Navbar>
  );
};

export default NavBar;
