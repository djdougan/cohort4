import { AppContext } from "../AppContext";
import React, { useContext } from "react";

import "../../App.css";
const NodeNavComp = (props) => {
  const context = useContext(AppContext);
  if (!props.node) {
    return null;
  }
  return (
    <div
      className="node-nav"
      style={{
        color: context.theme[context.state.theme].color1,
        background: context.theme[context.state.theme].background,
      }}>
      {props.node.prev ? (
        <button
          className="prev-btn"
          style={{
            background: context.theme[context.state.theme].color2,
          }}
          onClick={(e) => props.prevNode()}>
          {props.node.prev.subject}
        </button>
      ) : (
        <button className="prev-btn" disabled>
          empty
        </button>
      )}
      <div>
        <h3>
          {props.node.subject},{props.node.amount}
        </h3>
        <button
          className="delete-btn"
          onClick={(e) => props.deleteNode(props.node)}>
          Delete
        </button>
      </div>
      {props.node.next ? (
        <button
          className="next-btn"
          style={{
            background: context.theme[context.state.theme].color2,
          }}
          onClick={(e) => props.nextNode()}>
          {props.node.next.subject}
        </button>
      ) : (
        <button className="next-btn" disabled>
          empty
        </button>
      )}
    </div>
  );
};

export { NodeNavComp as default };
