import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import taskListReducer from "./taskList-reducer";
import blogReducer from "./blog-reducer";


let reducers = combineReducers({
    tasksPage: taskListReducer,
    blogPage: blogReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store