import React, { useEffect } from 'react'
import Question from './Question';

import { useSelector } from "react-redux";

export default function Quiz() {

    const state=useSelector(state=>state);
    useEffect(()=>{
        console.log(state);
    })

    // Prev event handler
    function onPrev(){
        console.log("On prev");
    }
    // Next event handler
    function onNext(){
        console.log("On next");
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