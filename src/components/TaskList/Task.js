import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import checkboxDoneIcon from "../../assets/images/task-list/checkboxDoneIcon.svg";
import checkboxIcon from "../../assets/images/task-list/checkboxIcon.svg";
import applyTaskIcon from "../../assets/images/task-list/applyTaskIcon.svg";
import editTaskIcon from "../../assets/images/task-list/editTaskIcon.svg";
import cancelEditIcon from "../../assets/images/task-list/cancelEditIcon.svg";
import deleteTaskIcon from "../../assets/images/task-list/deleteTaskIcon.svg";
import IconDescription from "./IconDescription";
import ErrorMessage from "./ErrorMessage";

const Task = ({
                  task,
                  i,
                  originalValue,
                  globalEditMode,
                  setTaskStatus,
                  deleteTask,
                  setChosenTask,
                  chosenTask,
                  setApplyChanges,
                  setCancelEdition,
                  taskTextChanger,
                  activateEditMode,
                  errorMessage,
              }) => {
    const screenWidth = document.body.clientWidth;

    let textValue = React.createRef();

    const changeTaskText = () => {
        taskTextChanger(textValue.current.value);
    };

    return (
        <>
            <li className="m-3">
                <Row className="task-wrapper">
                    {/*  //////////////////////////// Отрисовка "Чекбокса" ////////////////////////////  */}

                    <Col className="col-1 text-right p-0 task-checkbox">
                        <img
                            src={task.isDone ? checkboxDoneIcon : checkboxIcon}
                            alt="checkbox"
                            height="24px"
                            onClick={() => {
                                !task.editMode && setTaskStatus(task.id);
                            }}
                        />
                    </Col>

                    {/* /////////////////////////// Отрисовка порядкового номера /////////////////////////// */}

                    <Col className="col-1 text-right p-sm-0 pl-3 task-number">
                        {i + 1}.
                    </Col>

                    {/* /////////////////////////// Блок отрисовки текста задачи и блок режима редактирования текста /////////////////////////// */}

                    {task.editMode ? (
                        <Col className="col-sm-8 col-10 edit-task-input">
                            <TextareaAutosize
                                type="text"
                                id={task.id}
                                value={originalValue}
                                ref={textValue}
                                autoFocus={true}
                                autoComplete="off"
                                onChange={() => changeTaskText(task.text)}
                            />
                            <ErrorMessage errorMessage={errorMessage}/>
                        </Col>
                    ) : screenWidth < 621 && !globalEditMode ? (
                        <Col
                            className={
                                task.isDone
                                    ? "col-sm-8 col-10 task-done pl-2"
                                    : "task col-sm-8 col-10 pr-sm-4"
                            }
                            onClick={() => {
                                chosenTask === task.id
                                    ? setChosenTask()
                                    : setChosenTask(task.id);
                            }}
                        >
                            {task.text}
                        </Col>
                    ) : (
                        <Col
                            className={
                                task.isDone
                                    ? "col-sm-8 col-10 task-done pl-2"
                                    : "task col-sm-8 col-10 pr-sm-4"
                            }
                        >
                            {task.text}
                        </Col>
                    )}

                    {/* /////////////////////////// Блок отрисовки кнопки включения редактирования задачи и принятия редактирования /////////////////////////// */}
                    {task.editMode ? (
                        <Col className="apply-task col-sm-1 text-sm-right">
                            <img
                                src={applyTaskIcon}
                                alt="Apply changes"
                                onClick={() => setApplyChanges(task.id)}
                            />
                            <IconDescription dsc={"apply"}/>
                        </Col>
                    ) : !task.isDone ? (
                        <Col className="edit-task col-sm-1 text-sm-right">
                            <img
                                src={editTaskIcon}
                                alt="Edit task"
                                onClick={() => {
                                    !globalEditMode && activateEditMode(task.id, task.text);
                                }}
                            />
                            <IconDescription dsc={"edit"}/>
                        </Col>
                    ) : (
                        <Col className="edit-task col-sm-1"></Col>
                    )}

                    {/* /////////////////////////// Блок отрисовки удаления задачи и отмены режима редактирования /////////////////////////// */}

                    {task.editMode ? (
                        <Col className="cancel-edit col-sm-1 ">
                            <img
                                src={cancelEditIcon}
                                alt="Cancel edit"
                                onClick={() => setCancelEdition(task.id)}
                            />
                            <IconDescription dsc={"cancel"}/>
                        </Col>
                    ) : (
                        <Col className="delete-task col-sm-1">
                            <img
                                src={deleteTaskIcon}
                                alt="Delete task"
                                onClick={() => deleteTask(task.id)}
                            />
                            <IconDescription dsc={"delete"}/>
                        </Col>
                    )}
                </Row>
            </li>

            {/* /////////////////////////// Блок отрисовки кнопок для узких экранов /////////////////////////// */}
            {chosenTask === task.id && screenWidth < 621 ? (
                task.editMode ? (
                    <div className="buttons-block">
                        <Button onClick={() => setApplyChanges(task.id)} variant="success">
                            Apply
                        </Button>
                        <Button onClick={() => setCancelEdition(task.id)} variant="warning">
                            Cancel
                        </Button>
                    </div>
                ) : (
                    <div className="buttons-block">
                        <Button
                            disabled={task.isDone}
                            onClick={() => {
                                !globalEditMode && activateEditMode(task.id, task.text);
                            }}
                            variant="success"
                        >
                            Edit
                        </Button>
                        <Button onClick={() => deleteTask(task.id)} variant="danger">
                            Delete
                        </Button>
                    </div>
                )
            ) : (
                <div className="buttons-block-hidden">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </div>
            )}
        </>
    );
};

export default Task;
