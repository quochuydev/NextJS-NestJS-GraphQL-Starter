import * as React from 'react';
import { useMemo, useState } from 'react';
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
import TinderCard from 'react-tinder-card';
import Photo from './Photo';
import styles from './swipe.module.css';

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

const Photos = styled.div`
  display: flex;
  flexdirection: column;
  alignitems: center;
  position: relative;
  height: 680px;
  textalign: center;
  margin: 0 auto;

  @media (min-width: 1025px) {
    width: 400px;
    height: 684px;
  }
`;

const db = [
  {
    name: 'Richard Hendricks',
    url: './girl.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './girl.jpg'
  },
  {
    name: 'Monica Hall',
    url: './girl.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './girl.jpg'
  }
];

const alreadyRemoved = [];
let charactersState = db;

const Home = () => {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs: any = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(i => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = name => {
    console.log(name + ' left the screen!');
    charactersState = charactersState.filter(
      character => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = dir => {
    const cardsLeft = characters.filter(
      person => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div>
      <Navbar>
        <AiFillFire />
        <AiFillWechat />
        <FaUserAlt />
      </Navbar>
      {/* <Swiped /> */}
      <Photos>
        {characters.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className={styles.swipe}
            key={character.name}
            onSwipe={dir => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <Photo />
          </TinderCard>
        ))}
      </Photos>
      <PhotoActions>
        <Actions>
          <Action className="action" onClick={() => swipe('left')}>
            <AiOutlineClose />
          </Action>
          <Action className="action" onClick={() => console.log('super like')}>
            <AiFillStar />
          </Action>
          <Action className="action" onClick={() => swipe('right')}>
            <AiFillHeart />
          </Action>
        </Actions>
      </PhotoActions>
    </div>
  );
};

export default Home;
