import React, { useState, useEffect } from 'react';
import uuid from "uuid";
import axios from "axios";


// types



// interface TodoArr {
//     todos: Todo[]
//   }
  
//   interface Todo {
//     id:string;
//     status:string;
//     title:string;
//   }

// export type TodosProps = {
//     // [key:string] : string
//     id:string;
//     status:string;
//     title:string;
// }

export interface TodoItemDataParams {
    // id:string;
    // text: string;
    done: boolean;
    id:string;
    status:string;
    title:string;
};

export interface TodoState {
    todoItems: TodoItemDataParams[];
    input: string;
};

export const CREATE = "todo/CREATE";
export const REMOVE = "todo/REMOVE";
export const TOGGLE = "todo/TOGGLE";
export const CHANGE_INPUT = "todo/CHANGE_INPUT";

interface CreateAction {
    type: typeof CREATE;
    payload: TodoItemDataParams;
  }
  
  interface RemoveAction {
    type: typeof REMOVE;
    meta: {
      id: string;
    };
  }
  
  interface ToggleAction {
    type: typeof TOGGLE;
    meta: {
      id: string;
    };
  }
  
  interface ChangeInputAction {
    type: typeof CHANGE_INPUT;
    meta: {
      input: string;
    };
  }

  export type TodoActionTypes =
  | CreateAction
  | RemoveAction
  | ToggleAction
  | ChangeInputAction;

  // actions

// 추가
// const addTodo = ( title:string ) => {
//     const newTodo : Todo = {
//       title,
//       id: uuid.v4(),
//       status: "todo"
//     };
//     setState({ todos: [...state.todos, newTodo] });
//   };

function create( title:string ) {
    return {
        type: CREATE,
        payload: {
            title,
            id: uuid.v4(),
            status: "todo",
        }
    }
}

// 삭제
// const delTodo = ( id:string ) => {
//     setState({ todos: [...state.todos.filter((todo:TodosProps) => todo.id !== id)] });
//   };

function remove( id:string ) {
    return {
        type: REMOVE,
        meta: {
          id
        }
      };
}

function toggle(id: string) {
    return {
      type: TOGGLE,
      meta: {
        id
      }
    };
  }
  
  function changeInput(input: string) {
    return {
      type: CHANGE_INPUT,
      meta: {
        input
      }
    };
  }

  export const actionCreators = {
    create,
    toggle,
    remove,
    changeInput
  };

  // reducers

//   export interface TodoState {
//     todoItems: TodoItemDataParams[];
//     input: string;
// };

  // 테스트 데이터, API 불러오기
  // const getData = () => {
  //   axios
  //     .get("https://killsanghyuck.github.io/prography_5th_front/todoDummy.json")
  //     .then(res => {
  //       console.log(res, 'res');
  //       setState({ todoItems: res.data.body });
  //     });
  // };
    

  const initialState: TodoState = {
    todoItems: [],
    input: ""
  };




  export function todoReducer(
    state = initialState,
    action: TodoActionTypes
  ): TodoState {
    switch (action.type) {
      case CREATE:
        return {
          input: "",
          todoItems: [...state.todoItems, action.payload]
        };
      case REMOVE:
        return {
          ...state,
          todoItems: state.todoItems.filter(todo => todo.id !== action.meta.id)
        };
      case TOGGLE:
        return {
          ...state,
          todoItems: state.todoItems.map(todo => {
            if (todo.id === action.meta.id) {
              todo.done = !todo.done;
            }
            return todo;
          })
        };
      case CHANGE_INPUT:
        return {
          ...state,
          input: action.meta.input
        };
      default:
        return state;
    }
  }