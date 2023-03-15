import React from 'react';
import './InfoLine.css';
import iconBalance from '../../../images/icon-balance.svg';
import iconLeft from '../../../images/icon-left.svg';
import iconRight from '../../../images/icon-right.svg';
import iconCalendar from '../../../images/icon-calendar.svg';

export default function InfoLine() {
  return (
    <div className='infoline'>
      <div className='infoline__balance'>
        <p className='infoline__rank'>
          Баланс:
          <span className='infoline__sum'> 272 ₽ </span>
        </p>
        <img className='infoline__icon' alt='баланс кнопка' src={iconBalance} />
      </div>
      {/* <div className='infoline__date'> */}
        <img
          className='infoline__icon-left'
          alt='иконка влево'
          src={iconLeft}
        />
        <img
          className='infoline__icon-calendar'
          alt='иконка влево'
          src={iconCalendar}
        />
        <p className='infoline__counter-days'>3 дня</p>
        <img
          className='infoline__icon-right'
          alt='иконка влево'
          src={iconRight}
        />
      {/* </div> */}
    </div>
  );
}
