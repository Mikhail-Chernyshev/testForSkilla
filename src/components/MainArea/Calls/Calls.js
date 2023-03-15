import React from 'react';
import Call from './Call/Call';
import './Calls.css';

export default function Calls({ data, loading }) {
  console.log(data.results);

  return (
    <div className='calls'>
      <div className='calls__bar'>
        <p className='calls__element calls__element_type'>Тип</p>
        <p className='calls__element calls__element_time'>Время</p>
        <p className='calls__element calls__element_who'>Сотрудник</p>
        <p className='calls__element calls__element_number'>Звонок</p>
        <p className='calls__element calls__element_from'>Источник</p>
        <p className='calls__element calls__element_quality'>Оценка</p>
        <p className='calls__element calls__longer'>Длительность</p>
      </div>
      {loading
        ? data.results.map((el) => {
            return (
              <Call
                key={el.id}
                type={el.in_out}
                time={el.date}
                avatar={el.person_avatar}
                phone={el.partner_data.phone}
                source={el.source}
                error={el.errors}
                duration={el.time}
                status={el.status}
              />
            );
          })
        : ''}
    </div>
  );
}
