import { AppContext } from "../../components/AppContext";
import React from "react";

import DataList from "./DataList";
import DataControls from "./DataControls";
import "../../App.css";

const url = "./People.json";

const DataStructuresApp = () => {
  const context = React.useContext(AppContext);

  const addData = (person) => {
    const data = { ...person };
    context.queue.enqueue(data);
    context.stack.push(data);
    context.handleStateChange([
      {
        state: "stack",
        newState: context.stack,
      },
    ]);
    context.handleStateChange([
      {
        state: "queue",
        newState: context.queue,
      },
    ]);
  };
  const removeData = () => {
    context.queue.dequeue();
    context.stack.pop();
    context.handleStateChange([
      {
        state: "stack",
        newState: context.stack,
      },
    ]);
    context.handleStateChange([
      {
        state: "queue",
        newState: context.queue,
      },
    ]);
  };
  const addFakeData = (person) => {
    addData(person);
  };

  return (
    <div
      className="container"
      style={{
        color: context.theme[context.state.theme].color1,
        background: context.theme[context.state.theme].background1,
      }}>
      <h1 data-testid="app-header">Queue Application</h1>
      <DataControls
        addFakeData={addFakeData}
        url={url}
        addData={addData}
        removeData={removeData}
      />
      <div className="list-grid">
        <DataList title="Queue" data={context.queue.collection} />
        <DataList title="Stack" data={context.stack.collection} />
      </div>
    </div>
  );
};
export { DataStructuresApp as default };
