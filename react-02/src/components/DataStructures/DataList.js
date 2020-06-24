import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import ListItem from "./ListItem";
import "../../App.css";

const DataList = ({ data, title }) => {
  const context = useContext(AppContext);
  if (!data) {
    return null;
  }
  const dList = data.map((d, i) => {
    return <ListItem key={i} person={d} />;
  });

  return (
    <div className="list">
      <h2
        style={{
          color: context.theme[context.state.theme].h,
        }}>
        {title}
      </h2>
      <div>{dList}</div>
    </div>
  );
};
export { DataList as default };
