// import { AppContext } from "../../components/AppContext";
import React, { useState, useEffect } from "react";
import "../../App.css";

const DataControls = (props) => {
  // const context = useContext(AppContext);
  const [fakeData, setfakeData] = useState({});
  const [person, setPerson] = useState({
    priority: 1,
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    fetch(props.url)
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        // Examine the text in the response
        response.json().then(function (data) {
          setfakeData(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  });

  const AddRandomData = (e) => {
    const random = Math.floor(Math.random() * (fakeData.length - 0) + 0);
    props.addFakeData(fakeData[random]);
  };
  const addData = (e) => {
    props.addData(person);
  };

  const removeData = (e) => {
    props.removeData();
  };

  return (
    <div>
      <h1>Data Controls</h1>
      <div>
        <button className="btn" onClick={() => AddRandomData()}>
          Add Random Data
        </button>
      </div>
      <div className="input-box">
        <label htmlFor="priority">Priority:</label>
        <input
          type="number"
          min="1"
          max="5"
          name="priority"
          value={person.priority}
          onChange={(e) => setPerson({ ...person, priority: e.target.value })}
        />
      </div>
      <div className="input-box">
        <label htmlFor="first-name">First:</label>
        <input
          type="text"
          name="first-name"
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
      </div>
      <div className="input-box">
        <label htmlFor="last-name">Last:</label>
        <input
          type="text"
          name="last-name"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
      </div>
      <button className="btn" onClick={(e) => addData(e)}>
        Put
      </button>
      <button className="btn" onClick={(e) => removeData(e)}>
        Take Out
      </button>
    </div>
  );
};

export { DataControls as default };
