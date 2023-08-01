import React, { forwardRef } from 'react';
import './Card.scss';

export const Card = forwardRef(({ character, cbClickOnCardHandler }, ref) => {
  return (
    <div className='Card' ref={ref}>
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
});
