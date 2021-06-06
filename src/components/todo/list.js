import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

function TodoList(props) {

  return (
    <ul>
      {props.list.map(item => (
      <Card id="list" bg="light" className={`complete-${item.complete.toString()}`} onClick={() => props.handleComplete(item._id)}
      key={item._id}>
        <Toast.Header className="exit-button" key={item._id}>
          <Badge
            pillstyles={StyleSheet.pill}
            variant={item.complete ? 'danger' : 'success'}
            onClick={() => props.handleComplete(item._id)}
          >
            {!item.complete ? 'Pending' : 'Complete'}
          </Badge>
          <strong className="mr-auto">{item.assignee}</strong>
        </Toast.Header>
        <Card.Body>
          <blockquote>
            <p>
              {item.text}
            </p>
            <footer className="blockquote-footer">Difficulty:{item.difficulty}</footer>
          </blockquote>
        </Card.Body>
      </Card>
      ))}
    </ul>
  );
}

export default TodoList;