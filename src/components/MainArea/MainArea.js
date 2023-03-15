import React, { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import Calls from './Calls/Calls';
import Header from './Header/Header';
import InfoLine from './InfoLine/InfoLine';
import './MainArea.css';

export default function MainArea() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false)
  function getDataOnLoad() {
    getData()
      .then((res) => {
        // return res;
        setdata(res);
        setloading(true)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getDataOnLoad();
  }, []);
  return (
    <div className='main-area'>
      <Header />
      <InfoLine />
      <Calls loading={loading} data={data} />
    </div>
  );
}
