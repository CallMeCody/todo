import React, {useState} from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import Card from 'react-bootstrap/Card';

function TodoForm (props) {

  const [item, handleInputChange, handleSubmit] = useForm(props);

  return (
    <>
      <Card bg="light" className="card">
        <h3>Add To Do Item</h3>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="add" controlId="formAddItem">
          <Form.Label>To Do Item</Form.Label>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </Form.Group>

          <FormGroup className="assignee" controlId="formAssignedTo">
            <Form.Label>Assigned To</Form.Label>
              <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </FormGroup>

          <FormGroup className="difficulty" controlId="formDifficulty">
            <Form.Label>Difficulty Rating</Form.Label>
              <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </FormGroup>

          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default TodoForm;