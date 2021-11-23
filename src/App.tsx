import React, { useState, useEffect } from 'react';
import axios from "axios";
import uuid from "uuid";
//import "./App.css";

// import { AddTodo, Toggle, Todos } from "./components";
import AddTodo from './components/AddTodo';
import Toggle from './components/Toggle';
import Todos from './components/Todos';


interface TodoArr {
  todos: Todo[]
}

interface Todo {
  id:string;
  status:string;
  title:string;
}

export type TodosProps = {
  // [key:string] : string
  id:string;
  status:string;
  title:string;
}

function App() {
  
  const [state, setState] = useState<TodoArr>({
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

  // 추가
  const addTodo = ( title:string ) => {
    const newTodo : Todo = {
      title,
      id: uuid.v4(),
      status: "todo"
    };
    setState({ todos: [...state.todos, newTodo] });
  };

  // 삭제
  const delTodo = ( id:String ) => {
    setState({ todos: [...state.todos.filter((todo:TodosProps) => todo.id !== id)] });
  };

  //취소선
  const markComplete = (id:string) => {
    setState({
      todos: state.todos.map((todo:TodosProps) => {
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
    <div>
       <React.Fragment>
        <div className="container" >
          <div className="startsTopRight" >
            <div className="startsTopLeft" >
              <div className="headerDiv" > What's new mission?</div>
              < AddTodo addTodo = { addTodo } />
              < Toggle >
                <div className="todoListDIv" >
                <Todos
                    todos={ state.todos }
                    markComplete = { markComplete }
                    delTodo = { delTodo }
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
