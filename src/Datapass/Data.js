import React from 'react'
import { useState } from 'react';
import "./Datapass.css"

export const Data = ({getColor}) => {
    const [color, setcolor] = useState(null);

    const onChange = (e) => {
        const {value} = e.target;
        setcolor(value);
        getColor(value);
    }
  return (
    <div>
        <input
            type='text'
            className='inputid'
            aria-label='input'
            onChange={onChange}
            value={color}
        />
    </div>
  )
}



