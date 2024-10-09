import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Tab, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDoList.css';

const TodoList = () => {
  // Static array of ToDo items
  const initialTodos = [
    { title: 'Todo 1', description: 'This is the first ToDo item', dueDate: '2024-10-20' },
    { title: 'Todo 2', description: 'This is the second ToDo item', dueDate: '2024-10-15' },
    { title: 'Todo 3', description: 'This is the third ToDo item', dueDate: '2024-10-10' },
    { title: 'Todo 4', description: 'This is the fourth ToDo item', dueDate: '2024-10-08' },
  ];

  const [todos, setTodos] = useState(initialTodos);

  // Function to determine the color variant based on the due date
  const getVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = dueDateObj - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 2) return 'danger';
    if (diffDays < 4) return 'warning';
    if (diffDays < 7) return 'success';
    return 'primary';
  };

  return (
    <Container>
      {/* Header */}
      <h1 className="my-4 text-center">Assignment 2: Ayaz Mohammed ToDo List</h1>

      <Row>
        {/* Left: Form for adding new ToDo item (Non-functional) */}
        <Col sm={4}>
          <div className="p-3 form-container">
            <Form>
              <Form.Group controlId="newTodoItem">
                <Form.Label>ToDo Item</Form.Label>
                <Form.Control type="text" placeholder="Add todo item" readOnly />
              </Form.Group>
              <Form.Group controlId="newDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" readOnly />
              </Form.Group>
              <Button variant="primary" type="submit" disabled>
                Add Todo
              </Button>
            </Form>
          </div>
        </Col>

        {/* Right: ToDo list */}
        <Col sm={8}>
          <Tab.Container defaultActiveKey="">
            <Row>
              {/* ListGroup to display ToDo titles */}
              <Col sm={4}>
                <ListGroup as="ul" role="tablist">
                  {todos.map((item, index) => (
                    <ListGroup.Item
                      action
                      href={`#${index}`}
                      key={index}
                      variant={getVariant(item.dueDate)}
                      role="tab"
                      className={`list-group-item-${getVariant(item.dueDate)}`}
                    >
                      {item.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>

              {/* Tab content for description and due date */}
              <Col sm={8}>
                <Tab.Content>
                  {todos.map((item, index) => (
                    <Tab.Pane eventKey={`#${index}`} key={index} role="tabpanel">
                      <h4 contentEditable>{item.title}</h4>
                      <p contentEditable>{item.description}</p>
                      <Form.Group controlId={`dueDate-${index}`}>
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" defaultValue={item.dueDate} readOnly />
                      </Form.Group>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
