import React from 'react'
import Question from './Question';
import { useDispatch, useSelector } from 'react-redux';
import { moveNextQuestion, movePrevQuestion } from "../hooks/FetchQuestion";

export default function Quiz() {
    const { queue,trace}=useSelector(state=>state.questions);
    const dispatch=useDispatch();

    // Prev event handler
    function onPrev(){
        // Decrease the trace if prev is clicked
        if(trace>0){
            dispatch(movePrevQuestion());
        }
    }
    // Next event handler
    function onNext(){
        // Increase the trace if next is clicked
        if(trace<queue.length){
            dispatch(moveNextQuestion());
        }
    }
  return (
    <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        {/* Display Questions */}
        <Question />

        <div className="grid">
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}