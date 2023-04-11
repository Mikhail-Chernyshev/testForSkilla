import React, { useState } from 'react';
import './Player.css';
import iconPlay from '../../../../../images/iconPlay.svg';
import { getRecord } from '../../../../../utils/api';
import useSound from 'use-sound';

export default function Player({ partnerId, record, duration }) {
  const [sound, setsound] = useState({});
  const [play] = useSound(sound);
  console.log(sound);
  function handleGetRecord(idRecord, idPartner) {
    getRecord(idRecord, idPartner)
      .then((res) => {
        setsound(res);
        console.log('kaif');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleGetAudio() {
    handleGetRecord(record, partnerId);
  }
  return (
    <div className='player'>
      <p className='player__duration'>{duration}</p>
      <div className='player__button-play' onClick={play}>
        <img src={iconPlay} className='player__icon-play' />
      </div>
      <div className='player__line'></div>
      <div className='played__download' onClick={handleGetAudio}></div>
    </div>
  );
}
