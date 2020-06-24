import { AppContext } from "../AppContext";
import React, { useContext } from "react";
import "../../App.css";

const NodeComp = (props) => {
  const { prev, next } = props.node.current;
  const context = useContext(AppContext);
  return (
    <div
      className="data-item grid grid-3"
      style={{
        background: context.theme[context.state.theme].background2,
      }}>
      {prev ? (
        <div
          className="prev"
          style={{
            background: context.theme[context.state.theme].background1,
          }}>
          <p>prev {prev.subject}</p>
        </div>
      ) : (
        <div
          className="prev"
          style={{
            background: context.theme[context.state.theme].background1,
          }}>
          <p>null</p>
        </div>
      )}
      <div>
        <h3>
          {props.node.current.subject}, {props.node.current.amount}
        </h3>
      </div>
      {next ? (
        <div
          className="next"
          style={{
            background: context.theme[context.state.theme].background1,
          }}>
          <p>next {next.subject}</p>
        </div>
      ) : (
        <div
          className="next"
          style={{
            background: context.theme[context.state.theme].background1,
          }}>
          <p>null</p>
        </div>
      )}
    </div>
  );
};

export { NodeComp as default };
