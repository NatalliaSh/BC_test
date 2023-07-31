import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card';
import { Modal } from './Modal';
import { PersonalCard } from './PersonalCard';

import './CardsList.scss';

export const CardsList = ({ arrOfCharacters }) => {
  const [chosenCharacter, setChosenCharacter] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const settings = useSelector((state) => state.settings);

  const clickOnCardHandler = (character) => {
    setChosenCharacter(character);
    setIsShowModal(true);
  };

  const modalCloser = () => {
    setIsShowModal(false);
    setChosenCharacter(null);
  };

  const cards = arrOfCharacters.map((elem) => (
    <Card
      key={elem.id}
      character={elem}
      cbClickOnCardHandler={clickOnCardHandler}
    />
  ));

  return (
    <div className='CardsList'>
      {settings.workMode === 0 && (
        <div className='CardsList__cardsContainer'>{cards}</div>
      )}
      {isShowModal && (
        <Modal cbModalCloser={modalCloser}>
          <PersonalCard character={chosenCharacter} />
        </Modal>
      )}
    </div>
  );
};
