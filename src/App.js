import './App.css';
import React, { useEffect, useState } from 'react';
import SideBar from './components/sideBar/sideBar';
import MainArea from './components/MainArea/MainArea';
import { getData } from './utils/api';
function App() {
  return (
    <div className='App'>
      <SideBar />
      <MainArea />
    </div>
  );
}

export default App;
