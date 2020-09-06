import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import Task from "./Task";
import checkboxDoneIcon from "../../assets/images/task-list/checkboxDoneIcon.svg";
import checkboxIcon from "../../assets/images/task-list/checkboxIcon.svg";

const TaskList = (props) => {
  return (
    <>
      <Container className="TL-container-wrapper">
        <Row className="pt-sm-5 pt-3 justify-content-center align-items-center">
          <Col className="col-7 text-center">
            <h1>Task list</h1>
          </Col>
        </Row>
        <Row className="pt-sm-3 justify-content-center align-items-center">
          <Col className="col-xl-9 col-lg-12 col-md-12 col-sm-12 ">
            <ul className="list-unstyled task-list">
              <li className="m-3">
                <Row className="d-flex justify-content-end align-items-center">
                  <span className="mr-2">Hide done tasks</span>
                  <img
                    src={props.hideDoneTask ? checkboxDoneIcon : checkboxIcon}
                    alt="checkbox"
                    height="24px"
                    onClick={() => {
                      props.setHideDoneTask(!props.hideDoneTask);
                    }}
                  />
                </Row>
              </li>
              {props.tasks.map((task, i) => (
                <Task key={i} task={task} i={i} {...props} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="add-task-button">
        <Navbar sticky="bottom">
          <Container className="justify-content-center">
            <Button
              disabled={props.globalEditMode}
              variant="success "
              onClick={props.addNewTask}
            >
              Add new task
            </Button>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default TaskList;
