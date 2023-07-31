import React from 'react';

import './PersonalCard.scss';

export const PersonalCard = ({ character }) => {
  return (
    <div className='PersonalCard'>
      <div
        className='PersonalCard__avatar'
        style={{
          background: `linear-gradient(to right, transparent, #ffffff), url(${character.image})`,
        }}
      ></div>
      <ul className='PersonalCard__info text'>
        <li>
          <h4>Name:</h4>
          {character.name}
        </li>
        <li>
          <h4>Origin:</h4>
          {character.origin.name}
        </li>
        <li>
          <h4>Status:</h4>
          {character.status}
        </li>
        <li>
          <h4>Location:</h4>
          {character.location.name}
        </li>
        <li>
          <h4>Species:</h4>
          {character.species}
        </li>
        <li>
          <h4>Gender:</h4>
          {character.gender}
        </li>
      </ul>
    </div>
  );
};
