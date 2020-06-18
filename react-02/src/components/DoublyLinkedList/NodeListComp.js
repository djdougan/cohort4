import React from "react";
import NodeComp from "./NodeComp";

const NodeListComp = ({ nodes }) => {
  // console.log(nodes);
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
