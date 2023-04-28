import React, { useEffect, useState } from 'react';
import data from "../database/data";

export default function Question() {
    const [checked,setCheck]=useState(undefined);
    
    const question=data[0];
    useEffect(()=>{
        console.log(data);
    });
    
    function onSelect(){
        console.log("On radio change");
        // setCheck(true);
    }

  return (
    <div className='questions'>
        <h2 className='text-light'>{question.question}</h2>
        <ul key={question.id}>
            {
                question.options.map((option,index)=>(
                    <li>
                        <input type='radio' value={false} name="options" id={`q${index}-option`} onChange={onSelect()} />
                        <label className='text-primary' htmlFor={`q${index}-option`}>{option}</label>
                        <div className='check'></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
