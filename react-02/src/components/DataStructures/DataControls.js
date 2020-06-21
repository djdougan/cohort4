import { AppContext } from "../../components/AppContext";
import React, { useState, useEffect, useContext } from "react";
import "../../css/red/data-structures.css";

const DataControls = (props) => {
  const context = useContext(AppContext);
  const [fakeData, setfakeData] = useState({});
  const [person, setPerson] = useState({
    priority: 1,
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    // console.log(props.url);
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
  }, []);

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
        <button onClick={() => AddRandomData()}>Add Random Data</button>
      </div>
      <div>
        <label htmlFor="priority">
          Priority:
          <input
            type="number"
            min="1"
            max="5"
            name="priority"
            value={person.priority}
            onChange={(e) => setPerson({ ...person, priority: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="first-name">
          First:
          <input
            type="text"
            name="first-name"
            value={person.firstName}
            onChange={(e) =>
              setPerson({ ...person, firstName: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label htmlFor="last-name">
          Last:
          <input
            type="text"
            name="last-name"
            value={person.lastName}
            onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          />
        </label>
      </div>
      <button onClick={(e) => addData(e)}>Put</button>
      <button onClick={(e) => removeData(e)}>Take Out</button>
    </div>
  );
};

export { DataControls as default };
