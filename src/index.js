import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import CourseListComponent from "./components/CourseListComponent";
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import CourseEditorComponent from "./containers/CourseEditorContainer";
import {CourseManagerComponent} from "./components/CourseManagerComponent";
import HelloContainer from "./containers/HelloContainer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Counter from "./components/Counter";
import CounterContainer from "./containers/CounterContainer";
import fsm from "./reducers/fsm"
import widgetsReducer from "./reducers/widgetsReducer";
import moduleReducer from "./reducers/moduleReducer";
import courseReducer from "./reducers/courseReducer";
import {lessonReducer} from "./reducers/lessonReducer";
import {topicReducer} from "./reducers/topicReducer";
import "font-awesome/css/font-awesome.min.css";

const reducers = combineReducers({
  fsm, widgetsReducer, moduleReducer, courseReducer, lessonReducer,
  topicReducer
})
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <CourseManagerComponent/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
