import React from 'react';
import {Col, Row} from "react-bootstrap";
import checkboxDoneIcon from "../../assets/images/task-list/checkboxDoneIcon.svg";
import checkboxIcon from "../../assets/images/task-list/checkboxIcon.svg";
import applyTaskIcon from "../../assets/images/task-list/applyTaskIcon.svg";
import editTaskIcon from "../../assets/images/task-list/editTaskIcon.svg";
import cancelEditIcon from "../../assets/images/task-list/cancelEditIcon.svg";
import deleteTaskIcon from "../../assets/images/task-list/deleteTaskIcon.svg";

const Task = ({task, i, originalValue, globalEditMode,
                  setTaskStatus, deleteTask, setApplyChanges, setEditModeOFF, taskTextChanger, activateEditMode}) => {

    let textValue = React.createRef()

    const changeTaskText = () => {
        taskTextChanger(textValue.current.value)
    }

    return (
        <li className="m-3">
            <Row className="task-wrapper">
                <Col className="col-1 text-right p-0 task-checkbox">
                    <img src={task.isDone ? checkboxDoneIcon : checkboxIcon} alt="checkbox" height="24px" onClick={() => {
                        !task.editMode && setTaskStatus(i)
                    }}/>
                </Col>
                <Col className="col-1 text-right p-0">{i + 1}.</Col>

                {task.editMode
                    ?
                    <Col className="col-8 editTask"><input type="text" id={i} value={originalValue} ref={textValue}
                                                           onChange={() => changeTaskText(task.text)}/></Col>
                    : <Col className={task.isDone ? "col-8 task-done" : "col-8"}>{task.text}</Col>}

                {task.editMode
                    ? <Col className="apply-task col-1"><img src={applyTaskIcon} alt="Apply changes" onClick={() => setApplyChanges(i)}/></Col>
                    : !task.isDone
                        ?
                        <Col className="edit-task col-1"><img src={editTaskIcon} alt="Edit task"
                                                              onClick={() => {
                                                                  !globalEditMode && activateEditMode(i, task.text)
                                                              }}/></Col>
                        : <Col className="edit-task col-1"></Col>

                }
                {task.editMode
                    ? <Col className="cancel-edit col-1"><img src={cancelEditIcon} alt="Cancel edit" onClick={() => setEditModeOFF(i)}/></Col>
                    : <Col className="delete-task col-1"><img src={deleteTaskIcon} alt="Delete task" onClick={() => deleteTask(i)}/>
                        <div className="icon-description delete">DELETE</div></Col>
                }
            </Row>
        </li>
    );
}

export default Task;