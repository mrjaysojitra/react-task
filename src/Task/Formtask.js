import React from 'react'
import { useState } from 'react';

export default function Formtask() {

    const [data, setdata] = useState('');

    const onClickup = () => {
        let up = data.toUpperCase();
        setdata(up)
    }

    const onClicklo = () => {
        let up = data.toLowerCase();
        setdata(up)
    }

    const onCliyer = () => {
        let up = '';
        setdata(up)
    }

    const onRemove = () => {
        let up = data.split(" ").shift();
        setdata(up)
    }

    const myHandler = (e) => {
       setdata(e.target.value)
    }

    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea value={data} onChange={myHandler} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button  type="button" onClick={onClickup} class="btn btn-primary me-3">Uppercase</button>
            <button  type="button" onClick={onClicklo} class="btn btn-primary me-3">LowerCase</button>
            <button  type="button" onClick={onCliyer} class="btn btn-primary me-3">cliar</button>
            <button  type="button" onClick={onRemove} class="btn btn-primary">Remove last element</button>
            <h6>{data.split(" ").length}</h6>
            <h6>{data.length} Text length</h6>
        </div>
        </>
    )
}
