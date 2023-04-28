import React from 'react'
import Question from './Question';
export default function Quiz() {
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