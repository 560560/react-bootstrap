import React from "react";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import TaskListContainer from "./components/TaskList/TaskListContainer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={TaskListContainer} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
