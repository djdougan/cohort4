import React, { useState, useEffect } from "react";
import Queue from "../../BLL/Data-Structures/Queue";
import Stack from "../../BLL/Data-Structures/Stack";

import DataList from "./DataList";
import DataControls from "./DataControls";
import "../../css/red/data-structures.css";
const queue = new Queue();
const stack = new Stack();
const url = "./People.json";

const DataStructuresApp = () => {
  const [queueList, setQueueList] = useState([]);
  const [stackList, setStackList] = useState([]);

  const addData = (id, first, last) => {
    const data = { id: id, firstName: first, lastName: last };
    queue.enqueue(data);
    stack.push(data);
    setQueueList({ queueList: queue });
    setStackList({ stackList: stack });
  };
  const removeData = () => {
    queue.dequeue();
    stack.pop();
    setQueueList({ queueList: queue });
    setStackList({ stackList: stack });
  };
  const addFakeData = (person) => {
    addData(person.id, person.firstName, person.lastName);
  };

  return (
    <div>
      <h1 data-testid="app-header">Queue Application</h1>
      <DataControls
        addFakeData={addFakeData}
        url={url}
        addData={addData}
        removeData={removeData}
      />
      <div className="list-grid">
        <DataList data={queue.collection} />
        <DataList data={stack.collection} />
      </div>
    </div>
  );
};
export { DataStructuresApp as default };
