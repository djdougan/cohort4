import { AppContext } from "../../components/AppContext";
import React, { useContext } from "react";
import AddNodeComp from "./AddNodeForm";
import NodeNavComp from "./NodeNavComp";
import NodeListComp from "../DoublyLinkedList/NodeListComp";
import "../../App.css";

const DoubleLinkedListApp = (props) => {
  const context = useContext(AppContext);

  const addNode = (subject, amount) => {
    let node = context.dLinkedList.insert(subject, amount);
    context.handleStateChange([
      {
        state: "current",
        newState: node,
      },
    ]);
  };
  const prevNode = () => {
    let current = context.dLinkedList.current;
    let node = context.dLinkedList.prev(current);
    context.handleStateChange([
      {
        state: "current",
        newState: node,
      },
    ]);
  };
  const nextNode = () => {
    let current = context.dLinkedList.current;
    let node = context.dLinkedList.next(current);
    context.handleStateChange([
      {
        state: "current",
        newState: node,
      },
    ]);
  };

  const deleteNode = () => {
    var r = window.confirm(
      "Are you sure you want to delete node(" +
        context.dLinkedList.current.subject +
        ", " +
        context.dLinkedList.current.amount +
        ")"
    );
    if (r === true) {
      let current = context.dLinkedList.current;
      let node = context.dLinkedList.delete(current);
      context.handleStateChange([
        {
          state: "current",
          newState: node,
        },
      ]);
    }
  };
  const setCurrent = (current) => {
    context.dLinkedList.current = current;
  };
  return (
    <div
      className="container"
      style={{
        color: context.theme[context.state.theme].color1,
        background: context.theme[context.state.theme].background1,
      }}>
      <h1
        style={{
          color: context.theme[context.state.theme].headerTag,
        }}>
        Total: {context.dLinkedList.total() ? context.dLinkedList.total() : 0}
        {props.title}
      </h1>
      <AddNodeComp onCreate={addNode} node={setCurrent} />
      <NodeNavComp
        node={context.dLinkedList.current}
        prevNode={prevNode}
        nextNode={nextNode}
        deleteNode={deleteNode}
      />
      <NodeListComp nodes={context.dLinkedList} />
    </div>
  );
};

export { DoubleLinkedListApp as default };
