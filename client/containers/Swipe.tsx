import * as React from 'react';
import * as _ from 'lodash';
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineClose,
  AiFillFire,
  AiFillWechat
} from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { styled } from 'bumbag';
import Swiped from './Swiped';

const Navbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px 0;

  svg {
    fill: #dadfe6;
    font-size: 1.5rem;
  }

  svg:nth-child(1) {
    fill: #fe466d;
  }

  @media (min-width: 1025px) {
    width: 400px;
    margin: auto;
  }
`;

const PhotoActions = styled.div`
  height: calc(100vh-44px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  margin: 1rem 0;

  .action:nth-child(1) {
    color: #fd5068;
  }

  .action:nth-child(2) {
    margin: 0 1rem;
    color: #2db1ff;
  }

  .action:nth-child(3) {
    color: #1be4a1;
  }
`;

const Action = styled.div`
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Home = () => {
  return (
    <div>
      <Navbar>
        <AiFillFire />
        <AiFillWechat />
        <FaUserAlt />
      </Navbar>
      <Swiped />
      <PhotoActions>
        <Actions>
          <Action className="action">
            <AiOutlineClose />
          </Action>
          <Action className="action">
            <AiFillStar />
          </Action>
          <Action className="action">
            <AiFillHeart />
          </Action>
        </Actions>
      </PhotoActions>
    </div>
  );
};

export default Home;
