import React, { useState } from "react";
import Question from "./Question";
import { useDispatch, useSelector } from "react-redux";
import { moveNextQuestion, movePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";

export default function Quiz() {
    const { queue, trace } = useSelector((state) => state.questions);
    const dispatch = useDispatch();
    const [check, setCheck] = useState(undefined);
    const result = useSelector((state) => state.result.result);

    // Prev event handler
    function onPrev() {
        // Decrease the trace if prev is clicked
        if (trace > 0) {
            dispatch(movePrevQuestion());
        }
    }
    // Next event handler
    function onNext() {
        // Increase the trace if next is clicked
        if (trace < queue.length) {
            dispatch(moveNextQuestion());

            // Insert new result into the array
            if (result.length <= trace) {
                dispatch(PushAnswer(check));
            }
        }
        // reset the value check
        setCheck(undefined);
    }
    function onChecked(check) {
        setCheck(check);
    }

    if (result.length && result.length >= queue.length) {
        return <Navigate to={"/result"} replace={true}></Navigate>;
    }

    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>

            {/* Display Questions */}
            <Question onChecked={onChecked} />

            <div className="grid">
                {trace > 0 ? (<button className="btn prev" onClick={() => onPrev()}>Prev</button>) : ("")}
                <button className="btn next" onClick={() => onNext()}>
                    {trace===queue.length-1?"Submit": "Next"}
                </button>
            </div>
        </div>
    );
}
