import React from "react";
const NodeComp = (props) => {
  const { prev, next } = props.node.current;

  return (
    <div className={props.className}>
      {prev ? (
        <div>
          <p>prev</p>
          {prev.subject}
        </div>
      ) : (
        <div>
          <p>prev</p>null
        </div>
      )}
      <div>
        <h3>
          {props.node.current.subject}, {props.node.current.amount}
        </h3>
      </div>
      {next ? (
        <div>
          <p>next</p> {next.subject}
        </div>
      ) : (
        <div>
          <p>next</p>null
        </div>
      )}
    </div>
  );
};

export { NodeComp as default };
