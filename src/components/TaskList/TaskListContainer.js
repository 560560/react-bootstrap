import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import TaskList from "./TaskList";
import {
    activateEditMode,
    deleteTask,
    taskTextChanger,
    setApplyChanges,
    setCancelEdition,
    setTaskStatus,
    addNewTask,
    setChosenTask
} from "../../redux/taskList-reducer"

class TaskListContainer extends Component {
    render() {
        return (
            <>
                <TaskList {...this.props}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasksPage.tasks,
    originalValue: state.tasksPage.tempTaskTextOfEditMode,
    globalEditMode: state.tasksPage.globalEditMode,
    errorMessage: state.tasksPage.errorMessage,
    chosenTask: state.tasksPage.chosenTask,
    tempTaskTextOfEditMode: state.tasksPage.tempTaskTextOfEditMode
})


export default compose(connect(mapStateToProps, {
    setTaskStatus,
    setCancelEdition,
    deleteTask,
    setApplyChanges,
    taskTextChanger,
    activateEditMode,
    addNewTask,
    setChosenTask
}))(TaskListContainer);