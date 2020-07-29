import React from 'react';
import "./styles/main.scss"
import Header from "./components/Header/Header";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import FormikForm from "./components/FormikForm/FormikForm";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import BlogContainer from "./components/Blog/BlogContainer";
import TaskListContainer from "./components/TaskList/TaskListContainer";


function App() {
    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/formik" component={FormikForm}/>
                <Route exact path="/task-list" component={TaskListContainer}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contacts" component={Contacts}/>
                <Route exact path="/blog" component={BlogContainer}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
