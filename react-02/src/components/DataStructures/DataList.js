import React from "react";
import ListItem from "./ListItem";
import "../../css/red/data-structures.css";

const DataList = ({ data }) => {
  if (!data) {
    return null;
  }
  const dList = data.map((d, i) => {
    return <ListItem key={i} person={d} />;
  });

  return <div className="list">{dList}</div>;
};
export { DataList as default };
