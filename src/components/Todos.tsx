import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { TodoItemDataParams } from '../store/modules/todos';

import AddTodo from '../components/AddTodo';
import Toggle from '../components/Toggle';


interface Props {
    input: string;
    todoItems: TodoItemDataParams[];
    onCreate(): void;
    onRemove(id: string): void;
    onToggle(id: string): void;
    onChange(e: any): void;
}

const Todos: React.FC<Props> = ({
    input,
    todoItems,
    onCreate,
    onRemove,
    onToggle,
    onChange
  }) => {
    
    return (
       <>
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
       </>
    );
  };

export default Todos;