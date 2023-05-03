import { useEffect, useState } from "react";
import data, { answers } from "../database/data";
import { useDispatch } from "react-redux";

// Redux actions
import * as Action from "../redux/question_reducer";

export const useFetchQuestion= ()=>{
    const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null})
    const dispatch=useDispatch();

    useEffect(()=>{
        setGetData(prev=>({
            ...prev,
            isLoading: true
        }));

        // Async function fetch backend data
        (async()=>{
            try {
                let question=await data;
                if(question.length>0){
                    setGetData(prev=>({...prev, isLoading: false}));
                    setGetData(prev=>({...prev, apiData: {question, answers}}));

                    // dispatch an action
                    dispatch(Action.startExamAction({question, answers}));
                }else{
                    throw new Error("New error");
                }
            } catch (error) {
                setGetData(prev=>({...prev, isLoading: false}));
                setGetData(prev=>({...prev, serverError: error}));
            }
        })();
    },[dispatch]);

    return [getData, setGetData];
}

export const moveNextQuestion= ()=>async (dispatch)=>{
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error);
    }
}

export const movePrevQuestion= ()=>async (dispatch)=>{
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error);
    }
}