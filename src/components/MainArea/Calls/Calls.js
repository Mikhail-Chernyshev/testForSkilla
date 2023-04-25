import React from 'react';
import Call from './Call/Call';
import './Calls.css';

export default function Calls({ data, loading, typeCalls }) {
  let newShowCalls;
  const showCalls = () => {
    if (typeCalls === 'all') {
      newShowCalls = data.results;
    } else if (typeCalls === 'income') {
      let newData = data.results.filter((el) => el.in_out === 1);
      newShowCalls = newData;
    } else if (typeCalls === 'good') {
      let newData = data.results.filter((el) => el.errors.length === 0);
      newShowCalls = newData;
    } else if (typeCalls === 'bad') {
      let newData = data.results.filter((el) => el.errors !== []);
      newShowCalls = newData;
    } else if (typeCalls === 'yandex') {
      let newData = data.results.filter((el) => el.from_site === 'yandex.ru');
      newShowCalls = newData;
    } else if (typeCalls === 'google') {
      let newData = data.results.filter((el) => el.from_site === 'google.com');
      newShowCalls = newData;
    } else if (typeCalls === 'offer') {
      let newData = data.results.filter(
        (el) => el.errors[0] !== 'Скрипт не использован' && el.errors.length > 1
      );
      newShowCalls = newData;
    } else if (typeCalls === 'script') {
      let newData = data.results.filter(
        (el) => el.errors[0] === 'Скрипт не использован'
      );
      newShowCalls = newData;
    } else {
      let newData = data.results.filter((el) => el.in_out === 0);
      newShowCalls = newData;
    }
  };
  showCalls();
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
        ? newShowCalls
            .map((el) => {
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
                  record={el.record}
                  partnerId={el.partnership_id}
                />
              );
            })
            .slice(0, 25)
        : ''}
    </div>
  );
}
