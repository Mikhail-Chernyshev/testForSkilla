import React, { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import Calls from './Calls/Calls';
import Header from './Header/Header';
import InfoLine from './InfoLine/InfoLine';
import SearchLine from './SearchLine/SearchLine';
import './MainArea.css';

export default function MainArea() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [showData, setshowData] = useState([]);
  const [typeCalls, settypeCalls] = useState('all');
  const [isOpenPopup, setisOpenPopup] = useState(false)
  const today = new Date();
  // let dateForStart;
  let year = today.getFullYear();
  let month = today.getMonth();
  let showMonth = month < 10 ? `0${month}` : month;
  let day = today.getDate();
  let finishDay = day - 2;
  // dateForStart = `${year}-${showMonth}-${day}`;
  // let dateForFinish = `${year}-${showMonth}-${finishDay}`;
  const [dateForStart, setdateForStart] = useState(
    `${year}-${showMonth}-${day}`
  );
  const [dateForFinish, setdateForFinish] = useState(
    `${year}-${showMonth}-${finishDay}`
  );

  console.log(dateForStart);
  console.log(dateForFinish);
  function getDataOnLoad(start, end) {
    getData(start, end)
      .then((res) => {
        setdata(res);
        setshowData(res);
        setloading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getDataOnLoad(dateForFinish, dateForStart);
  }, []);
  return (
    <div className='main-area'>
      <Header />
      <InfoLine isOpenPopup={isOpenPopup} setisOpenPopup={setisOpenPopup} />
      <SearchLine
        typeCalls={typeCalls}
        settypeCalls={settypeCalls}
        showData={showData}
        data={data}
        setshowData={setshowData}
      />
      <Calls
        typeCalls={typeCalls}
        showData={showData}
        data={data}
        setshowData={setshowData}
        loading={loading}
      />
    </div>
  );
}
