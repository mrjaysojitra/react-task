import React from 'react'
import { useState } from 'react'

export default function Question({question}) {
    const [open, setopen] = useState(false)
  return (
    <section>
         <div className={open ? "open" : "close"}>
                <h4>{question.title}</h4>
                <button onClick={()=> setopen(!open)}>{open ? "_" : "+"}</button>
            </div>
                {open && <p>{question.info}</p>}
    </section>
  )
}
