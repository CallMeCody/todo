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
    item.complete = false;
    let url = `https://api-js401.herokuapp.com/api/v1/todo/`;
    await axios.post(url, item)
    let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
    setList(newList);
    refetch();
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

  const deleteItem = async id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if(item._id) {
      let url =  `https://api-js401.herokuapp.com/api/v1/todo/${id}`;
      let deletedItem = await axios.delete(url, item)
      let updatedList = list.map(listItem => listItem.id === item._id ? item : listItem);
      setList(updatedList);
      refetch()
    }
  }

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
            handleDelete={deleteItem}
          />
        </Col>

      </Row>
    </Container>
  );
}

export default ToDo;