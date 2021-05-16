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

const Photo = styled.div`
  width: 98vw;
  height: 85vh;
  background: url('./girl.jpg') center center/cover;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  color: #eee;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);

  @media (min-width: 1025px) {
    width: 367px;
    height: 684px;
  }
`;

const PhotoText = styled.div`
  padding: 15px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(35, 34, 65, 0) 0%,
    rgba(0, 0, 0, 0.7) 52%
  );
  border-radius: 10px;
`;

const PhotoNameAge = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  h2:nth-child(2) {
    margin-left: 10px;
    font-weight: 500;
  }
`;

const PhotoBio = styled.div`
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
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

      <PhotoActions>
        <Photo>
          <PhotoText>
            <PhotoNameAge>
              <h2>Lorem</h2>
              <h2>22</h2>
            </PhotoNameAge>
            <PhotoBio>
              Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem
            </PhotoBio>
          </PhotoText>
        </Photo>

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
