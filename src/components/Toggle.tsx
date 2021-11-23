import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

function Toggle({ children }: Props) {
  console.log("Toggle props");

  const [state, setState] = useState({
    on: false,
  });
  console.log(state.on, "Toggle state");
  const toggle = () => {
    setState({
      on: !state.on,
    });
  };

  return (
    <div style={toggleStyle}>
      <div onClick={toggle} style={astronautStyle}></div>
      {state.on && children}
      {!state.on && "Show me the missions"}
    </div>
  );
}

// 우주인 버튼
const astronautStyle = {
  display: "block",
  width: "6rem",
  height: "6rem",
  margin: "0.7rem auto 1rem auto",
  padding: "0",
  backgroundImage: "url('../astronaut.png')",
  backgroundPosition: "top center",
  backgroundSize: "100% auto",
  backgroundColor: "transparent",
  backgroundRepeat: "no-repeat",
  border: "none",
  alt: "toggle",
  cursor: "pointer",
};

// 'Show me the mission' 텍스트 가운데로
const toggleStyle: React.CSSProperties = {
  textAlign: "center",
};

export default Toggle;
