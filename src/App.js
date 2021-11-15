import React, { useState, useEffect } from 'react';
import axios from "axios";
import uuid from "uuid";
// import "./App.css";

import AddTodo from "./components/AddTodo";
import Toggle from "./components/Toggle";
import Todos from './components/Todos';

function App() {

  const [state, setState] = useState({
    todos: []
  });

  // { id: '', status: '', title: '' } 

  // 테스트 데이터, API 불러오기
  const getData = () => {
    axios
      .get("https://killsanghyuck.github.io/prography_5th_front/todoDummy.json")
      .then(res => {
        console.log(res, 'res');
        setState({ todos: res.data.body });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Add Todo
  const addTodo = title => {
    const newTodo = {
      title,
      id: uuid.v4(),
      status: "todo"
    };
    setState({ todos: [...state.todos, newTodo] });
  };

  // Delete Todo
  const delTodo = id => {


    setState({ todos: [...state.todos.filter(todo => todo.id !== id)] });
  };

  //취소선
  const markComplete = id => {
    setState({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          if (todo.status === "todo") {
            todo.status = "complete";
          } else {
            todo.status = "todo";
          }
        }
        return todo;
      })
    });
  };

  return (
    <div className="App">
      <React.Fragment>
        <div className="container">
          <div className="startsTopRight">
            <div className="startsTopLeft">
              <div className="headerDiv">What's new mission?</div>
              <AddTodo addTodo={addTodo} />
              App!
              <Toggle>
                // toggle children
                <div className="todoListDIv">
                  <Todos
                    todos={state.todos}
                    markComplete={markComplete}
                    delTodo={delTodo}
                  />
                </div>
              </Toggle>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
