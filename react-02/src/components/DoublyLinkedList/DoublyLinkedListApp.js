import { AppContext } from "../../components/AppContext";
import React, { useContext } from "react";
import CreateNodeComp from "./AddNodeForm";
import NodeNavComp from "./NodeNavComp";
import NodeListComp from "../DoublyLinkedList/NodeListComp";
// import NodeComp from "../DoublyLinkedList/NodeComp";
// import DoublyLinkedList from "../../BLL/Data-Structures/DoublyLinkedList";
// import Node from "../../BLL/Data-Structures/Node";

// const context.dLinkedList = new DoublyLinkedList();

const DoubleLinkedListApp = (props) => {
  const context = useContext(AppContext);
  // const [current, setCurrent] = useState("");

  // useEffect(() => {}, []);
  const addNode = (subject, amount) => {
    let node = context.dLinkedList.insert(subject, amount);
    context.handleStateChange([
      {
        state: "current",
        newState: node,
      },
    ]);
    // setCurrent(node);
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
    <div>
      <h1>{props.title}</h1>
      <h3>
        Total: {context.dLinkedList.total() ? context.dLinkedList.total() : 0}
      </h3>
      <CreateNodeComp onCreate={addNode} node={setCurrent} />
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
