import { combineReducers, configureStore} from "@reduxjs/toolkit"

import questionReducer from "./reducers/question_reducer";
import resultReducer from "./reducers/result_reducer";

const rootreducer=combineReducers({
    questions: questionReducer,
    result: resultReducer,
});

export default configureStore({
    reducer: rootreducer,
});