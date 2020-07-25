import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import TaskList from "./TaskList";
import {activateEditMode, deleteTask, taskTextChanger, setApplyChanges, setEditModeOFF, setTaskStatus} from "../../redux/taskList-reducer"

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
    globalEditMode: state.tasksPage.globalEditMode
})



export default compose (connect(mapStateToProps,{setTaskStatus, setEditModeOFF, deleteTask, setApplyChanges, taskTextChanger, activateEditMode}))(TaskListContainer) ;