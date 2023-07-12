import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Redux actions
import * as Action from "../redux/reducers/question_reducer";
import { getServerData } from "../helper/helper.js";

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
                const [{questions, answers}]=await getServerData(`https://quiz-server-j3ho.onrender.com/api/question`);
                if(questions?.length>0){
                    setGetData(prev=>({...prev, isLoading: false}));
                    setGetData(prev=>({...prev, apiData: {questions, answers}}));

                    // dispatch an action
                    dispatch(Action.startExamAction({question: questions, answers}));
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