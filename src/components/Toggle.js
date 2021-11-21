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
function Toggle(props) {
    console.log(props, "Toggle props");
    var _a = (0, react_1.useState)({
        on: false
    }), state = _a[0], setState = _a[1];
    console.log(state.on, "Toggle state");
    var toggle = function () {
        setState({
            on: !state.on
        });
    };
    return (react_1.default.createElement("div", { style: toggleStyle },
        react_1.default.createElement("div", { onClick: toggle, style: astronautStyle }),
        state.on && props.children,
        !state.on && "Show me the missions"));
}
;
// 우주인 버튼
var astronautStyle = {
    display: "block",
    width: "6rem",
    height: "6rem",
    margin: "0.7rem auto 1rem auto",
    padding: "0",
    backgroundImage: "url('/astronaut.png')",
    backgroundPosition: "top center",
    backgroundSize: "100% auto",
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    alt: "toggle",
    cursor: "pointer"
};
// 'Show me the mission' 텍스트 가운데로
var toggleStyle = {
// textAlign: "center"
};
exports.default = Toggle;
