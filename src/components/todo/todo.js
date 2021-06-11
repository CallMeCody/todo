import React, {useEffect, useState} from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';
import TodoForm from './form.js';
import TodoList from './list.js';

import { Container, Row, Col } from 'react-bootstrap';
import './todo.scss';

function ToDo() {
  
  const [list, setList] = useState([])

  const [{ data, loading, error }, refetch] = useAxios(
    'https://api-js401.herokuapp.com/api/v1/todo'
  )

  const addItem = async (item) => {
    console.log(item)
    item._id = Math.random();
    item.complete = false;
    let url = `https://api-js401.herokuapp.com/api/v1/todo/`;
    let fixed = await axios.post(url, item)
    console.log(fixed);
    setList([...list, item])
  };

  const toggleComplete = async id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let url = `https://api-js401.herokuapp.com/api/v1/todo/${id}`;
      let fixed = await axios.put(url, item)
      console.log(fixed);
      
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
      refetch();
    }

  };

  useEffect(() => {
    if(!loading) {
      setList(data.results);
    }
    console.log(list)
  }, [data]);

  return (
    <Container fluid >
      <Row>
      <header>
        <h2>
        There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>
      </Row>

      <Row className="todo">

        <Col>
          <TodoForm handleSubmit={addItem} />
        </Col>

        <Col>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </Col>

      </Row>
    </Container>
  );
}

export default ToDo;