import React from "react";
import "../../css/red/data-structures.css";

const ListItem = ({ person }) => {
  return (
    <div>
      <h3>ID: {person.id} </h3>
      <p>
        {person.firstName}, {person.lastName}
      </p>
    </div>
  );
};

export { ListItem as default };
