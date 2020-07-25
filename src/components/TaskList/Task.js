import React from 'react';
import {Col, Row} from "react-bootstrap";
import TextareaAutosize from 'react-textarea-autosize';
import checkboxDoneIcon from "../../assets/images/task-list/checkboxDoneIcon.svg";
import checkboxIcon from "../../assets/images/task-list/checkboxIcon.svg";
import applyTaskIcon from "../../assets/images/task-list/applyTaskIcon.svg";
import editTaskIcon from "../../assets/images/task-list/editTaskIcon.svg";
import cancelEditIcon from "../../assets/images/task-list/cancelEditIcon.svg";
import deleteTaskIcon from "../../assets/images/task-list/deleteTaskIcon.svg";
import IconDescription from "./IconDescription";
import ErrorMessage from "./ErrorMessage";

const Task = ({
                  task, i, originalValue, globalEditMode, setTaskStatus, deleteTask, setApplyChanges, setCancelEdition, taskTextChanger, activateEditMode, errorMessage,
              }) => {


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

                <Col className="col-1 text-right p-0 task-number">{i + 1}.</Col>


                {task.editMode

                    ? <Col className="col-8 edit-task"><TextareaAutosize type="text" id={i} value={originalValue} ref={textValue}
                                                                       autoFocus={true}
                                                                       autoComplete="off"
                                                                       onChange={() => changeTaskText(task.text)}/>


                        <ErrorMessage errorMessage={errorMessage}/></Col>
                    : <Col className={task.isDone ? "col-8 task-done" : "col-8 pr-sm-4"}>{task.text}</Col>
                }


                {task.editMode

                    ? <Col className="apply-task col-1"><img src={applyTaskIcon} alt="Apply changes" onClick={() => setApplyChanges(i)}/>
                        <IconDescription dsc={"apply"}/>
                    </Col>
                    : !task.isDone

                        ? <Col className="edit-task col-1"><img src={editTaskIcon} alt="Edit task"
                                                                onClick={() => {
                                                                    !globalEditMode && activateEditMode(i, task.text)
                                                                }}/><IconDescription dsc={"edit"}/>
                        </Col>

                        : <Col className="edit-task col-1"></Col>
                }


                {task.editMode

                    ? <Col className="cancel-edit col-1"><img src={cancelEditIcon} alt="Cancel edit" onClick={() => setCancelEdition(i)}/>
                        <IconDescription dsc={"cancel"}/>
                    </Col>

                    : <Col className="delete-task col-1"><img src={deleteTaskIcon} alt="Delete task" onClick={() => deleteTask(i)}/>
                        <IconDescription dsc={"delete"}/>
                    </Col>
                }


            </Row>
        </li>
    );
}

export default Task;