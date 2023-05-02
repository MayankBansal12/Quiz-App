import React, { useEffect, useState } from 'react';
import data from "../database/data";
import { useSelector } from 'react-redux';
// Custom Hook
import { useFetchQuestion } from '../hooks/FetchQuestion';

export default function Question() {
    const [checked,setCheck]=useState(undefined);
    const [{isLoading, apiData, serverError}]=useFetchQuestion();

    const questions=useSelector(state=>state.questions.queue[state.questions.trace]);
    const trace=useSelector(state=>state.questions.trace)
    useEffect(()=>{
        console.log(questions);
        console.log(trace);
    });

    useEffect(()=>{
        // console.log(data);
        console.log(isLoading);
        // console.log(apiData);
        // console.log(serverError);
    });
    
    function onSelect(){
        // setCheck(true);
    }
    
    if(isLoading){
        return <h3 className='text-light'>isLoading</h3>
    }
    if(serverError){
        return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>
    }

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>
        <ul key={questions?.id}>
            {
                questions?.options.map((option,index)=>(
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
