import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import "../styles/Result.css";
import ResultTable from "./ResultTable";
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper'; 

export default function Result() {
  const dispatch=useDispatch();
  const {questions: {queue,answers}, result: { result, userId }}=useSelector(state=>state);
  useEffect(()=>{
    console.log(userId);
  });

  const totalPoints=queue.length*10;
  const attempts=attempts_Number(result);
  const point=10;
  const earnPoints=earnPoints_Number(result,answers,point);
  const flag=flagResult(totalPoints,earnPoints);

  function onRestart(){
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>{userId}</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points:</span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Attempts:</span>
          <span className='bold'>{attempts || 0}</span>
        </div>
        <div className='flex'>
          <span>Total Earn Points</span>
          <span className='bold'>{earnPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Quiz Result</span>
          <span style={{color: `${flag?"green":"red"}`}} className='bold'>{flag?"Passed":"Fail"}</span>
        </div>
      </div>
      
      <div className='start'>
        <Link className='btn' to={'/'} onClick={()=>onRestart()}>Restart</Link>
      </div>
      <div className='container'>
        <ResultTable />
      </div>
    </div>
  )
}
