import React from 'react';
import './main.css';
import SomeImage from '../../assets/images/one.jpg';

const Main = () => {
  return (
    <div className={'main__container'}>
      <div className={'main__header reg'}>{'This main page'}</div>
      <div className={'main__header norm'}>{'This main page'}</div>
      <div className={'main__header bold'}>{'This main page'}</div>
      <img className={'main-img'} src={SomeImage} alt='img' />
    </div>
  );
};

export default Main;
