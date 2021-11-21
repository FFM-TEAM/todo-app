"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var uuid_1 = __importDefault(require("uuid"));
//import "./App.css";
// import { AddTodo, Toggle, Todos } from "./components";
var AddTodo_1 = __importDefault(require("./components/AddTodo"));
var Toggle_1 = __importDefault(require("./components/Toggle"));
var Todos_1 = __importDefault(require("./components/Todos"));
function App() {
    var _a = (0, react_1.useState)({
        todos: Todos_1.default
    }), state = _a[0], setState = _a[1];
    // { id: '', status: '', title: '' } 
    // 테스트 데이터, API 불러오기
    var getData = function () {
        axios_1.default
            .get("https://killsanghyuck.github.io/prography_5th_front/todoDummy.json")
            .then(function (res) {
            console.log(res, 'res');
            setState({ todos: res.data.body });
        });
    };
    (0, react_1.useEffect)(function () {
        getData();
    }, []);
    // 추가
    var addTodo = function (title) {
        var newTodo = {
            title: title,
            id: uuid_1.default.v4(),
            status: "todo"
        };
        setState({ todos: __spreadArray(__spreadArray([], state.todos, true), [newTodo], false) });
    };
    // 삭제
    var delTodo = function (id) {
        setState({ todos: __spreadArray([], state.todos.filter(function (todo) { return todo.id !== id; }), true) });
    };
    //취소선
    var markComplete = function (id) {
        setState({
            todos: state.todos.map(function (todo) {
                if (todo.id === id) {
                    if (todo.status === "todo") {
                        todo.status = "complete";
                    }
                    else {
                        todo.status = "todo";
                    }
                }
                return todo;
            })
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("div", { className: "startsTopRight" },
                    react_1.default.createElement("div", { className: "startsTopLeft" },
                        react_1.default.createElement("div", { className: "headerDiv" }, " What's new mission?"),
                        react_1.default.createElement(AddTodo_1.default, { addTodo: addTodo }),
                        react_1.default.createElement(Toggle_1.default, null,
                            react_1.default.createElement("div", { className: "todoListDIv" },
                                react_1.default.createElement(Todos_1.default, { todos: state.todos, markComplete: markComplete, delTodo: delTodo })))))))));
}
exports.default = App;
