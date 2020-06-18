import React from "react";

const ThemeControl = ({ themes }) => {
  const listOfThemes = themes.map((theme) => {
    return (
      <div
        className={"theme-btn" + "-" + theme.name}
        title={theme.name}
        onClick={(e) => {
          console.log({ theme.name });
        }}></div>
    );
  });
  return <div>{listOfThemes}</div>;
};


export { ThemeControl as default };
