import { combineReducers, configureStore} from "@reduxjs/toolkit"

import questionReducer from "./question_reducer"
import resultReducer from "./result_reducer"

const rootreducer=combineReducers({
    questions: questionReducer,
    result: resultReducer,
});

export default configureStore({
    reducer: rootreducer,
});