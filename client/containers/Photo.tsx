import * as React from 'react';
import { styled } from 'bumbag';

const Photo = styled.div`
  height: 684px;
  background: url('./girl.jpg') center center/cover;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  color: #eee;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
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

const Home = () => {
  return (
    <Photo>
      <PhotoText>
        <PhotoNameAge>
          <h2>Lorem</h2>
          <h2>22</h2>
        </PhotoNameAge>
        <PhotoBio>
          Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem
        </PhotoBio>
      </PhotoText>
    </Photo>
  );
};

export default Home;
