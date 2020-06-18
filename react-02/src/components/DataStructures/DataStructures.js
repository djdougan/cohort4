import React, { useState } from "react";
import Queue from "../../BLL/Data-Structures/Queue";
import Stack from "../../BLL/Data-Structures/Stack";

import DataList from "./DataList";
import DataControls from "./DataControls";

const DataStructures = () => {
  const url = "../../DAL/People.js";
  const [jsonData, setjsonData] = useState([]);
  const [stack, setStack] = useState([]);
  const [queue, setQueue] = useState([]);

  const fetchData = (url) => {
    let response = fetch(url);
    if (response.ok) {
      // if HTTP-status is 200-299
      // get the response body (the method explained below)
      setjsonData(response.json());
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  return (
    <div>
      <h1 data-testid="app-header">Queue Application</h1>
      <DataControls />
      <div>
        <DataList data={queue} />
        <DataList data={stack} />
      </div>
    </div>
  );
};
export { DataStructures as default };
