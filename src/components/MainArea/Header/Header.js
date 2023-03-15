import React from 'react';
import './Header.css';
import avatar from '../../../images/image_face.png';

export default function Header() {
  return (
    <div className='header'>
      <p className='header__date'>Среда, 13 окт</p>
      <div className='header__data-element'>
        <p className='header__data-title'>
          Новые звонки
          <span className='header__data-counter'> 20 из 30 шт</span>
        </p>
        <div className='header__data-scale'>
          <div className='header__data-scale-active'></div>
        </div>
      </div>
      <div className='header__data-element'>
        <p className='header__data-title'>
          Качество разговоров
          <span className='header__data-counter header__data-counter_yellow'>
            {' '}
            40%
          </span>
        </p>
        <div className='header__data-scale '>
          <div className='header__data-scale-active header__data-scale-active_yellow'></div>
        </div>
      </div>
      <div className='header__data-element'>
        <p className='header__data-title'>
          Конверсия в заказ
          <span className='header__data-counter header__data-counter_red'>
            {' '}
            67%
          </span>
        </p>
        <div className='header__data-scale'>
          <div className='header__data-scale-active header__data-scale-active_red'></div>
        </div>
      </div>
      <div className='header__search'></div>
      <p className='header__select'>ИП Сидорова Александра Михайловна</p>
      <span className='header__icon-select'></span>
      <img src={avatar} alt='аватар владельца' className='header__avatar' />
      <span className='header__icon-select'></span>
    </div>
  );
}
