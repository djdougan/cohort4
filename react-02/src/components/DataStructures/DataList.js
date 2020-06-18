import React from "react";
import ListItem from "./ListItem";

const DataList = ({ ListItems }) => {
  if (!ListItems) {
    return null;
  }
  const peopleList = this.props.people.map((person, i) => {
    return <ListItem key={person.id} person={person} />;
  });

  return <div>{peopleList}</div>;
};
export { DataList as default };
