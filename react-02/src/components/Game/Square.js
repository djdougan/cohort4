import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "../../App.css";

function Square(props) {
  const context = useContext(AppContext);
  return (
    <button
      className="square"
      style={{
        color: context.theme[context.state.theme].color1,
        background: context.theme[context.state.theme].background2,
      }}
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
