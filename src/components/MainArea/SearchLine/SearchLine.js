import React from 'react';
import './SearchLine.css';
import iconSearch from '../../../images/search.svg';

export default function SearchLine({ data, settypeCalls }) {
  function handleChangeSelectType(event) {
    settypeCalls(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeSelectError(event) {
    settypeCalls(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeSpringType(event) {
    settypeCalls(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeErrorType(event) {
    settypeCalls(event.target.value);
    console.log(event.target.value);
  }
  console.log(data.results);
  return (
    <div className='searchline'>
      <div className='search'>
        <img
          alt='icon search'
          src={iconSearch}
          className='searchline__icon-search'
        />
        <p className='searchline__search-area'>Поиск по звонкам</p>
      </div>
      {/* <select className='searchline__select searchline__select-staff'>
        <option value='all' className='searchline__staff-all'>
          Все сотрудники
        </option>
        <option value='junior' className='searchline__staff-new'>
          Новые
        </option>
        <option value='middle' className='searchline__staff-old'>
          Опытные
        </option>
      </select> */}
      <select
        onChange={handleChangeSelectType}
        className='searchline__select searchline__select-calls'
      >
        <option value='all' className='searchline__calls-all'>
          Все звонки
        </option>
        <option value='income' className='searchline__calls-income'>
          Входящие
        </option>
        <option value='outcome' className='searchline__calls-outcome'>
          Исходящие
        </option>
      </select>
      <select
        onChange={handleChangeSpringType}
        className='searchline__select searchline__select-from'
      >
        <option value='all' className='searchline__from-all'>
          Все источники
        </option>
        <option value='yandex' className='searchline__from-yandex'>
          Yandex
        </option>
        <option value='google' className='searchline__from-google'>
          Google
        </option>
      </select>{' '}
      <select
        onChange={handleChangeSelectError}
        className='searchline__select searchline__select-quality'
      >
        <option value='all' className='searchline__quality-all'>
          Все оценки
        </option>
        <option value='good' className='searchline__quality-new'>
          Хорошие
        </option>
        <option value='bad' className='searchline__quality-old'>
          Плохие
        </option>
      </select>
      <select onChange={handleChangeErrorType} className='searchline__select searchline__select-error'>
        <option value='all' className='searchline__error-all'>
          Все ошибки
        </option>
        <option value='offer' className='searchline__error-new'>
          Ошибка предложения
        </option>
        <option value='script' className='searchline__error-old'>
          Отсутствие скрипта
        </option>
      </select>
    </div>
  );
}
