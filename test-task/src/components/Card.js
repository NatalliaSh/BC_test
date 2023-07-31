import React from 'react';
import './Card.scss';

export const Card = ({ character, cbClickOnCardHandler }) => {
  return (
    <div className='Card'>
      <div
        className='Card__container container'
        onClick={() => cbClickOnCardHandler(character)}
      >
        <img
          className='container__characterAvatar'
          src={character.image}
          alt='Avatar'
        />
        <h5 className='container__characterName'>{character.name}</h5>
      </div>
    </div>
  );
};
