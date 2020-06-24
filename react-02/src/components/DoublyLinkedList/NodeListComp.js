import React from "react";
import NodeComp from "./NodeComp";
import "../../App.css";

const NodeListComp = ({ nodes }) => {
  let counter = 0;
  if (!nodes) {
    return null;
  }
  let current = nodes.head;
  const listOfNodes = [];

  while (current) {
    counter++;
    listOfNodes.push(
      <NodeComp
        key={counter}
        node={{ current }}
        className={nodes.current === current ? "current" : "node"}
      />
    );
    current = current.next;
  }

  return (
    <div>
      <div className="list">{listOfNodes}</div>
    </div>
  );
};

export default NodeListComp;
