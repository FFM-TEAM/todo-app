import React from "react";
import TodoItem from "./TodoItem";
import { TodosProps } from "../App";

const Todos = (props:any) => { //props 질문

    console.log(props, 'props');

    return props.todos.map( (todo:TodosProps) => (
        <TodoItem
            key={todo.id}
            todo={todo}
            markComplete={props.markComplete}
            delTodo={props.delTodo}
        />
    ));

};


export default Todos;