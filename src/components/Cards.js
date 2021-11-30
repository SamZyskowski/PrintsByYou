import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Prints By You, the most stylish and eco friendly shirts out right now!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/blank-jacket.jpg'
              text='Try our top of the line quality jackets'
              label='Jackets'
              path='/services'
            />
            <CardItem
              src='images/blank-t.jpg'
              text='Our T-shirts are outsourced with eco-friendly materials'
              label='T-shirts'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Their quality is unmatched, I will always go back to Prints By You - John H.'
              label='Review'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Always ships on time and with no issues. - Emily J.'
              label='Review'
              path='/products'
            />
            <CardItem
              src='images/img-15.jpg'
              text='My new go to for my popping clothing line, could not do it without Prints By You. - Tim B.'
              label='Review'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
