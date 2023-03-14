import React from 'react';
import './ElementSideBar.css';

export default function ElementSideBar({ image, name }) {
  return (
    <div className='element-sidebar'>
      <img src={image} className='element-sidebar__image' />
      <p className='element-sidebar__name'>{name}</p>
    </div>
  );
}
