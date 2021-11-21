"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TodoItem_1 = __importDefault(require("./TodoItem"));
var Todos = function (props) {
    console.log(props, 'props');
    return props.todos.map(function (todo) { return (react_1.default.createElement(TodoItem_1.default, { key: todo.id, todo: todo, markComplete: props.markComplete, delTodo: props.delTodo })); });
};
exports.default = Todos;
