import React from "react";
const NodeNavComp = (props) => {
  if (!props.node) {
    return null;
  }
  return (
    <div className="node-nav">
      {props.node.prev ? (
        <button className="prev" onClick={(e) => props.prevNode()}>
          {props.node.prev.subject}
        </button>
      ) : (
        <button disabled>empty</button>
      )}
      <div>
        <h3>
          {props.node.subject},{props.node.amount}
        </h3>
        <button
          className="delete"
          onClick={(e) => props.deleteNode(props.node)}>
          Delete
        </button>
      </div>
      {props.node.next ? (
        <button className="next" onClick={(e) => props.nextNode()}>
          {props.node.next.subject}
        </button>
      ) : (
        <button disabled>empty</button>
      )}
    </div>
  );
};

export { NodeNavComp as default };
