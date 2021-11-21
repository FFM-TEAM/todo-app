import React, { useState } from "react";
//import PropTypes from "prop-types";
//import "../App.css";


// interface Props {
//     title: string;
// }

// PropTypes
// AddTodo.propTypes = {
//     addTodo: PropTypes.func.isRequired
// };

function AddTodo(props:any) {


    const [state, setState] = useState({
        title: ""
    });

    const onSubmit = (e:any) => {
        e.preventDefault();
        props.addTodo(state.title);
        setState({ title: "" });
    }

    const onChange = (e:any) => setState({ [e.target.name]: e.target.value }); // TODO

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="title"
                style={addTodoStyle}
                value={state.title}
                onChange={onChange}
            />
            <input
                type="submit"
                value=""
                style={spaceshipStyle}
                className="spaceshipClass"
            />
        </form>
    );
};

// 인풋 창
const addTodoStyle = {
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
const spaceshipStyle = {
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





export default AddTodo;

