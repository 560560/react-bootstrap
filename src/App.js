import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import FormikForm from "./components/FormikForm/FormikForm";
import Calculator from "./components/Calculator/Calculator";
import TaskList from "./components/TaskList/TaskList";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Blog from "./components/Blog/Blog";


function App() {
    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/formik" component={FormikForm}/>
                <Route exact path="/calculator" component={Calculator}/>
                <Route exact path="/task-list" component={TaskList}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contacts" component={Contacts}/>
                <Route exact path="/blog" component={Blog}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
