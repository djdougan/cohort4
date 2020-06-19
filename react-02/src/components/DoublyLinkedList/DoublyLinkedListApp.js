import { AppContext } from "../../components/AppContext";
import React, { useState, useEffect, useContext } from "react";
import CreateNodeComp from "./AddNodeForm";
import NodeNavComp from "./NodeNavComp";
import NodeListComp from "../DoublyLinkedList/NodeListComp";
// import NodeComp from "../DoublyLinkedList/NodeComp";
// import DoublyLinkedList from "../../BLL/Data-Structures/DoublyLinkedList";
// import Node from "../../BLL/Data-Structures/Node";

// const context.dLinkedList = new DoublyLinkedList();

const DoubleLinkedListApp = (props) => {
  const context = useContext(AppContext);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    addNode("A", "1");
    addNode("B", "3");
    addNode("C", "2");
    addNode("D", "4");
  }, []);

  const addNode = (subject, amount) => {
    let node = context.dLinkedList.insert(subject, amount);
    setCurrent(node);
  };
  const prevNode = () => {
    let node = context.dLinkedList.prev(current);
    setCurrent(node);
  };
  const nextNode = () => {
    let node = context.dLinkedList.next(current);
    setCurrent(node);
  };

  const deleteNode = () => {
    var r = window.confirm(
      "Are you sure you want to delete node(" +
        current.subject +
        ", " +
        current.amount +
        ")"
    );
    if (r === true) {
      let node = context.dLinkedList.delete(current);
      setCurrent(node);
    }
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <h3>
        Total: {context.dLinkedList.total() ? context.dLinkedList.total() : 0}
      </h3>
      <CreateNodeComp onCreate={addNode} node={setCurrent} />
      <NodeNavComp
        node={current}
        prevNode={prevNode}
        nextNode={nextNode}
        deleteNode={deleteNode}
      />
      <NodeListComp nodes={context.dLinkedList} />
    </div>
  );
};

export { DoubleLinkedListApp as default };
