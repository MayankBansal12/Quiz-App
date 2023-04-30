import React, { useEffect, useState } from 'react';
import data from "../database/data";

// Custom Hook
import { useFetchQuestion } from '../hooks/FetchQuestion';

export default function Question() {
    const [checked,setCheck]=useState(undefined);
    const [{isLoading, apiData, serverError}]=useFetchQuestion();
    const question=data[0];

    useEffect(()=>{
        // console.log(data);
        console.log(isLoading);
        // console.log(apiData);
        // console.log(serverError);
    });
    
    function onSelect(){
        // setCheck(true);
    }

  return (
    <div className='questions'>
        <h2 className='text-light'>{question.question}</h2>
        <ul key={question.id}>
            {
                question.options.map((option,index)=>(
                    <li key={index}>
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
