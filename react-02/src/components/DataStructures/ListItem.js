import React from "react";
import "../../css/red/data-structures.css";

const ListItem = ({ person }) => {
  console.log(person);
  return (
    <div>
      <h3>
        Name
        {person.firstName}, {person.lastName}
      </h3>
      <p>Priority: {person.priority ? person.priority : undefined} </p>
    </div>
  );
};

export { ListItem as default };
