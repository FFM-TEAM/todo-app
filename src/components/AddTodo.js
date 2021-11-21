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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
//import PropTypes from "prop-types";
//import "../App.css";
// interface Props {
//     title: string;
// }
// PropTypes
// AddTodo.propTypes = {
//     addTodo: PropTypes.func.isRequired
// };
function AddTodo(props) {
    var _a = (0, react_1.useState)({
        title: ""
    }), state = _a[0], setState = _a[1];
    var onSubmit = function (e) {
        e.preventDefault();
        props.addTodo(state.title);
        setState({ title: "" });
    };
    var onChange = function (e) {
        var _a;
        return setState((_a = {}, _a[e.target.name] = e.target.value, _a));
    }; // TODO
    return (react_1.default.createElement("form", { onSubmit: onSubmit },
        react_1.default.createElement("input", { type: "text", name: "title", style: addTodoStyle, value: state.title, onChange: onChange }),
        react_1.default.createElement("input", { type: "submit", value: "", style: spaceshipStyle, className: "spaceshipClass" })));
}
;
// 인풋 창
var addTodoStyle = {
    display: "block",
    width: "80%",
    // resize: "none", ???
    margin: "5.8rem auto 0 auto",
    padding: "0.1rem",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "0.1px #D1C7AC solid",
    outline: "none",
    fontFamily: "Noto Sans KR, sansSerif",
    fontSize: "1.1rem",
    lineHeight: "1.1rem",
    color: "#EFEFEF"
};
// 로켓 버튼
// 마우스 호버 css는 우선 App.css에 넣어놓았음.
var spaceshipStyle = {
    display: "block",
    width: "3.3rem",
    height: "10rem",
    margin: "2.3rem auto 0 auto",
    padding: "0",
    backgroundPosition: "top center",
    backgroundSize: "100% auto",
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    outline: "none",
    alt: "rocketship",
    cursor: "pointer"
};
exports.default = AddTodo;
