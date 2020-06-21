import { AppContext } from "../../components/AppContext";
import React, { useState, useEffect } from "react";

import DataList from "./DataList";
import DataControls from "./DataControls";
import "../../css/red/data-structures.css";
const url = "./People.json";

const DataStructuresApp = () => {
  const context = React.useContext(AppContext);

  const addData = (person) => {
    console.log(person);
    const data = { ...person };
    console.log("data", data);
    context.queue.enqueue(data);
    context.stack.push(data);
    setState("stack", context.stack);
    setState("queue", context.queue);
  };
  const removeData = () => {
    context.queue.dequeue();
    context.stack.pop();
    setState("stack", context.stack);
    setState("queue", context.queue);
  };
  const addFakeData = (person) => {
    addData(person);
  };

  const setState = (state, newState) => {
    context.handleStateChange([
      {
        state: state,
        newState: newState,
      },
    ]);
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
        <DataList data={context.queue.collection} />
        <DataList data={context.stack.collection} />
      </div>
    </div>
  );
};
export { DataStructuresApp as default };
