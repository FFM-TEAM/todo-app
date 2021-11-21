
import React from "react";
// import PropTypes from "prop-types";

const TodoItem = (props:any) => { //props 질문
    // 투두 리스트 스타일 + 취소선 기능
    const lineThroughStyle = () => {
        return {
            marginBottom: "1.8rem",
            fontFamily: "Noto Sans KR, sansSerif",
            fontSize: "0.84rem",
            lineHeight: "1rem",
            textDecoration:
                props.todo.status === "complete" ? "line-through" : "none",
            // textAlign: "left", // TODO
            cursor: "pointer"
        }
    };

    // 깃발 버튼 스타일 + 취소선 기능
    const flagStyle = () => {
        return {
            // position: "relative", //TODO
            top: "0.3rem",
            width: "1.1rem",
            height: "1.1rem",
            marginRight: "0.8rem",
            background: "transparent",
            backgroundImage:
                props.todo.status === "complete"
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

    const { id, title } = props.todo;
    console.log(props, 'TodoItem props');
    return (
        <div style={lineThroughStyle()}>
            <ul>
                <li>
                    <span onClick={props.markComplete.bind(this, id)}>
                        <button style={flagStyle()}> </button>
                        {title}
                    </span>
                    <button onClick={props.delTodo.bind(this, id)} style={xBtnStyle}>
                        x
                    </button>
                </li>
            </ul>

        </div>
    )

};

// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// };

// 'x' 삭제 버튼
const xBtnStyle = {
    marginLeft: "0.5rem",
    background: "transparent",
    border: "none",
    color: "#D1C7AC",
    fontFamily: "Fredoka One, cursive",
    fontSize: "1rem",
    lineHeight: "1rem",
    cursor: "pointer"
};


export default TodoItem;