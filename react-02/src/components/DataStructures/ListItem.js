import React from "react";

const ListItem = ({ person }) => {
  return (
    <div>
      <h3>{person.id}</h3>
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
    </div>
  );
};

export { ListItem as default };
