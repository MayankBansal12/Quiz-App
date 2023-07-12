import React, { useRef } from 'react'
import {Link} from "react-router-dom";
import "../styles/Main.css";
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/reducers/result_reducer';


export default function Main() {
    const inputRef=useRef(null);
    const dispatch=useDispatch();
    function startQuiz(){
        const username=inputRef.current?.value;
        if(username){
            dispatch(setUserId(username));
        }
    }

    return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        <ol>
            <li>You will be asked 10 questions one after the other</li>
            <li>10 points will be awarded for each correct answer</li>
            <li>Each option has three options. You have to choose only one</li>
            <li>You can review and change answer before submission</li>
            <li>The result will be declared at the end of the quiz</li>
        </ol>
        <form id="form"> 
            <input ref={inputRef} className="userid" type="text" placeholder="Username*" required />
        </form>
        <div className="start">
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>
    </div>
  )
}
