"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TodoItem = function (props) {
    // 투두 리스트 스타일 + 취소선 기능
    var lineThroughStyle = function () {
        return {
            marginBottom: "1.8rem",
            fontFamily: "Noto Sans KR, sansSerif",
            fontSize: "0.84rem",
            lineHeight: "1rem",
            textDecoration: props.todo.status === "complete" ? "line-through" : "none",
            // textAlign: "left", // TODO
            cursor: "pointer"
        };
    };
    // 깃발 버튼 스타일 + 취소선 기능
    var flagStyle = function () {
        return {
            // position: "relative", //TODO
            top: "0.3rem",
            width: "1.1rem",
            height: "1.1rem",
            marginRight: "0.8rem",
            background: "transparent",
            backgroundImage: props.todo.status === "complete"
                ? "url('/flagWhite.png')"
                : "url('/flagBlack.png')",
            backgroundPosition: "top center",
            backgroundSize: "auto 100%",
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            border: "none",
            lineHeight: "1rem",
            cursor: "pointer"
        };
    };
    var _a = props.todo, id = _a.id, title = _a.title;
    console.log(props, 'TodoItem props');
    return (react_1.default.createElement("div", { style: lineThroughStyle() },
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null,
                react_1.default.createElement("span", { onClick: props.markComplete.bind(_this, id) },
                    react_1.default.createElement("button", { style: flagStyle() }, " "),
                    title),
                react_1.default.createElement("button", { onClick: props.delTodo.bind(_this, id), style: xBtnStyle }, "x")))));
};
// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// };
// 'x' 삭제 버튼
var xBtnStyle = {
    marginLeft: "0.5rem",
    background: "transparent",
    border: "none",
    color: "#D1C7AC",
    fontFamily: "Fredoka One, cursive",
    fontSize: "1rem",
    lineHeight: "1rem",
    cursor: "pointer"
};
exports.default = TodoItem;
