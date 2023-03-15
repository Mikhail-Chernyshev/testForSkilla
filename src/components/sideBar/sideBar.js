import React, { useEffect, useState } from 'react';
import './sideBar.css';
import ElementSideBar from './ElementSideBar/ElementSideBar';
import image from '../../images/Vector.png';
import ButtonSideBar from './ButtonSideBar/ButtonSideBar';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <p className='sidebar__logo'>SKILLA lS</p>
      <ElementSideBar name='Итоги' image={image} />
      <ElementSideBar name='Заказы' image={image} />
      <ElementSideBar name='Сообщения' image={image} />
      <ElementSideBar name='Звонки' status='active' image={image} />
      <ElementSideBar name='Контрагенты' image={image} />
      <ElementSideBar name='Документы' image={image} />
      <ElementSideBar name='Исполнители' image={image} />
      <ElementSideBar name='Отчеты' image={image} />
      <ElementSideBar name='База знаний' image={image} />
      <ElementSideBar name='Настройки' image={image} />
      <ButtonSideBar text='Добавить заказ' textt='+' />
      <ButtonSideBar text='Оплата' textt='!' />
    </div>
  );
}
