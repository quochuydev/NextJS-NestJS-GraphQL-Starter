import { styled } from 'bumbag';
import React, { useState, useMemo } from 'react';
import TinderCard from 'react-tinder-card';
import Photo from './Photo';
import styles from './swipe.module.css';

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
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Advanced() {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
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

      <div className="buttons">
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div>
    </Photos>
  );
}

export default Advanced;
