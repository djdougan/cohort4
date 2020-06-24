import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "../../App.css";
const Theme = () => {
  const context = useContext(AppContext);

  return (
    <div className="theme-picker">
      <div
        id="default"
        className="theme default"
        title="Red Rose"
        onClick={(e) => {
          e.preventDefault();
          context.handleStateChange([{ state: "theme", newState: "default" }]);
        }}></div>
      <div
        id="colorSet1"
        className="theme red"
        title="color Set 1"
        onClick={(e) => {
          e.preventDefault();
          context.handleStateChange([
            { state: "theme", newState: "colorSet1" },
          ]);
        }}></div>
      <div
        id="colorSet2"
        className="theme blue"
        title="color Set 2"
        onClick={(e) => {
          e.preventDefault();
          context.handleStateChange([
            { state: "theme", newState: "colorSet2" },
          ]);
        }}></div>
      <div
        id="hightContrast"
        className="theme high-contrast"
        title="Hight Contrast"
        onClick={(e) => {
          e.preventDefault();
          context.handleStateChange([
            { state: "theme", newState: "hightContrast" },
          ]);
        }}></div>
    </div>
  );
};

export { Theme as default };
