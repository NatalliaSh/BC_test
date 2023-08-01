import React, { useState, createRef, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card';
import { Modal } from './Modal';
import { PersonalCard } from './PersonalCard';
import { PaginationButtons } from './PaginationButtons';
import { Loader } from './Loader';
import { charactersDataLoad } from '../redux/charactersDataLoad';
import './CardsList.scss';

export const CardsList = () => {
  const [chosenCharacter, setChosenCharacter] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const clickOnCardHandler = (character) => {
    setChosenCharacter(character);
    setIsShowModal(true);
  };

  const modalCloser = () => {
    setIsShowModal(false);
    setChosenCharacter(null);
  };

  const lastItem = createRef();
  const observerLoader = useRef();

  const cbInView = async (entries) => {
    if (entries[0].isIntersecting && characters.nextPageURL) {
      console.log('inView');
      dispatch((dispatch) =>
        charactersDataLoad(dispatch, characters.nextPageURL),
      );
    }
  };

  //регистрируем на последний элемент наблюдателя, когда последний элемент меняется
  useEffect(() => {
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }
    observerLoader.current = new IntersectionObserver(cbInView);
    if (lastItem.current) {
      observerLoader.current.observe(lastItem.current);
    }
  }, [lastItem]);

  const paginationButtonHandler = (target) => {
    dispatch((dispatch) => charactersDataLoad(dispatch, target.dataset.url));
    window.scrollTo(0, 0);
  };

  const cards =
    characters.workMode === 0
      ? characters.data.map((elem, index) => (
          <Card
            key={elem.id}
            character={elem}
            cbClickOnCardHandler={clickOnCardHandler}
            ref={index + 1 === characters.data.length ? lastItem : null}
          />
        ))
      : characters.data.map((elem, index) => (
          <Card
            key={elem.id}
            character={elem}
            cbClickOnCardHandler={clickOnCardHandler}
          />
        ));

  return (
    <div className='CardsList'>
      <div className='CardsList__cardsContainer'>{cards}</div>
      {characters.workMode === 1 && (
        <PaginationButtons
          cbPaginationButtonHandler={paginationButtonHandler}
        />
      )}
      {isShowModal && (
        <Modal cbModalCloser={modalCloser}>
          <PersonalCard character={chosenCharacter} />
        </Modal>
      )}
    </div>
  );
};
