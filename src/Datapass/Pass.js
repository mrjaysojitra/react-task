import React from 'react'
import { Data } from './Data';
import { useState } from 'react';

export default function Pass() {
    const [Uicolor, setUicolor] = useState(null);

    const getColor = (color) => {
        setUicolor(color)
    }
  return (
    <div className='app'>
        <div className='colorground' style={{background: `${Uicolor}`}}>
        <Data getColor = {getColor}/>
        </div>
    </div>
  )
}
