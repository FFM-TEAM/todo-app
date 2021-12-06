import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { TodoItemDataParams } from '../store/modules/todos';

import AddTodo from '../components/AddTodo';
import Toggle from '../components/Toggle';

// const Todos = (props:any) => { //props 질문

//     console.log(props, 'props');

//     return props.todos.map( (todo:any) => (
//         <TodoItem
//             key={todo.id}
//             todo={todo}
//             markComplete={props.markComplete}
//             delTodo={props.delTodo}
//         />
//     ));

// };

interface Props {
    input: string;
    todoItems: TodoItemDataParams[];
    onCreate(): void;
    onRemove(id: string): void;
    onToggle(id: string): void;
    onChange(e: any): void;
  }

const Todos: React.SFC<Props> = ({
    input,
    todoItems,
    onCreate,
    onRemove,
    onToggle,
    onChange
  }) => {
    // const todoItemList = todoItems.map(todo => 
    //     todo 
    //     ? (
    //   <TodoItem
    //     key={todo.id}
    //     done={todo.done}
    //     onToggle={() => onToggle(todo.id)}
    //     onRemove={() => onRemove(todo.id)}
    //     text={todo.text}
    //   />
    // ) : null
    // );
  
  // 테스트 데이터, API 불러오기
  // const getData = () => {
  //   axios
  //     .get("https://killsanghyuck.github.io/prography_5th_front/todoDummy.json")
  //     .then(res => {
  //       console.log(res, 'res');
  //       setState({ todoItems: res.data.body });
  //     });
  // };

  // const { todos } = useSelector((state) => state.todos);

  // console.log(state, 'state');

    return (
      <div>
       <React.Fragment>
        <div className="container" >
          <div className="startsTopRight" >
            <div className="startsTopLeft" >
              <div className="headerDiv" > What's new mission?</div>
              < AddTodo addTodo = { onCreate } />
              < Toggle >
                <div className="todoListDIv" >
                {/* <Todos
                    todos={ todoItemList }
                    markComplete = { onToggle }
                    delTodo = { onRemove }
                /> */}
                    {/* <TodoItem
                    key={todo.id}
                    done={todo.done}
                    onToggle={() => onToggle(todo.id)}
                    onRemove={() => onRemove(todo.id)}
                    text={todo.text}
                /> */}
                </div>
              </Toggle>
            </div>
          </div>
        </div>
       </React.Fragment>
    </div>
    );
  };

export default Todos;