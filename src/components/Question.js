import React, { useEffect, useState } from 'react';
import data from "../database/data";
import { useDispatch, useSelector } from 'react-redux';

// Custom Hook
import { useFetchQuestion } from '../hooks/FetchQuestion';
import { updateResult } from '../hooks/setResult';

export default function Question({onChecked}) {
    const [checked,setCheck]=useState(undefined);
    const [{isLoading, apiData, serverError}]=useFetchQuestion();

    const questions=useSelector(state=>state.questions.queue[state.questions.trace]);
    const { trace }=useSelector(state=>state.questions);
    const result=useSelector(state=>state.result.result);
    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(updateResult({trace,checked}));
    },[dispatch,trace,checked]);
    useSelector(state=>console.log(state));
    
    function onSelect(index){
        onChecked(index);
        setCheck(index);
        dispatch(updateResult({trace,checked}));
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
                        <input type='radio' value={false} name="options" id={`q${index}-option`} onChange={()=>onSelect(index)} />
                        <label className='text-primary' htmlFor={`q${index}-option`}>{option}</label>
                        <div className={`check ${result[trace]===index?"checked":""}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
