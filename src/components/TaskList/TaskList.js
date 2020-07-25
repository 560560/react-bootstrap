import React from "react"
import {Button, Col, Container, Row} from "react-bootstrap";
import Task from "./Task";


const TaskList = (props) => {

    const prepareNewTask = () => {
        props.addNewTask("Сделать еще что-нибудь")
    }



    return (
        <Container>
            <Row className="pt-5 justify-content-center align-items-center">
                <Col className="col-7 text-center">
                    <h1>Task List</h1>
                </Col>
            </Row>
            <Row className="pt-5 justify-content-center align-items-center">
                <Col className="col-9 ">
                    <ul className="list-unstyled task-list">
                        {props.tasks.map((task, i) => <Task key={i} task={task} i={i} {...props}/>)}
                    </ul>
                    <Row className="justify-content-center">
                        <Col className="text-center">
                            <Button disabled={props.globalEditMode} variant="success " onClick ={prepareNewTask}>Add new task</Button>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Container>
    );
}

export default TaskList;