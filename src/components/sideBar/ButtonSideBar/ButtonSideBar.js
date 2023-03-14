import React from 'react';
import './ButtonSideBar.css';

export default function ButtonSideBar({ text, textt }) {
  return (
    <div className='button-sidebar'>
      <p className='button-sidebar__text'>{text}</p>
      <div className='button-sidebar__image'>{textt}</div>
    </div>
  );
}
