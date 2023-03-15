import React from 'react';
import './Call.css';
import insideCall from '../../../../images/insideCall.svg';
import outsideCall from '../../../../images/outsideCall.svg';
import insideMissedCall from '../../../../images/insideMissedCall.svg';
import outsideMissedCall from '../../../../images/outsideMissedCall.svg';

export default function Call({
  type,
  time,
  avatar,
  phone,
  source,
  error,
  duration,
  status,
}) {
  let imagee;
  const typeImage = (status, type) => {
    if (status === 'Не дозвонился' && type === 1) {
      imagee = insideMissedCall;
    } else if (type === 1) {
      imagee = insideCall;
    } else if (type === 0) {
      imagee = outsideCall;
    } else {
      imagee = outsideMissedCall;
    }
  };
  typeImage(status, type);
  const timeCall = time.slice(11, 16);
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  let showSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const resultDuration = `${minutes}:${showSeconds}`;
  const showDuration = resultDuration !== '0:00' ? resultDuration : '';
  return (
    <div className='call'>
      <img
        alt='лого типа звонка'
        src={imagee}
        className='calls__element calls__element_type call__type'
      />
      <p className='calls__element calls__element_time call__time'>
        {timeCall}
      </p>
      <img
        // alt='сотрудник фото'
        src={avatar}
        className='calls__element calls__who call__who'
      />
      <p className='calls__element calls__number call__number'>{phone}</p>
      <p className='calls__element calls__from call__from'>{source}</p>
      <p className='calls__element calls__quality call__quality'>{error}</p>
      <p className='calls__element calls__longer call__longer'>
        {showDuration}
      </p>
    </div>
  );
}
