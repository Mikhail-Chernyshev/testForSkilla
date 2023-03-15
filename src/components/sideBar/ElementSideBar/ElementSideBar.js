import React from 'react';
import './ElementSideBar.css';

export default function ElementSideBar({ image, name, status }) {
  if (status === 'active') {
    return (
      <div className='element-sidebar element-sidebar_active'>
        <img src={image} className='element-sidebar__image' />
        <p className='element-sidebar__name element-sidebar__name_active'>
          {name}
        </p>
        <span className='element-sidebar__circle'></span>
      </div>
    );
  }
  return (
    <div className='element-sidebar'>
      <img src={image} className='element-sidebar__image' />
      <p className='element-sidebar__name'>{name}</p>
    </div>
  );
}
