import React, { useContext } from "react";
import "../../App.css";
import { AppContext } from "../../components/AppContext";

const ErrorComponent = () => {
  const context = useContext(AppContext);

  const clearError = () => {
    context.handleStateChange([
      {
        state: "error",
        newState: "",
      },
    ]);
  };
  return (
    context.state.error !== "" && (
      <div className="overlay">
        <div className="error">
          <h2>{context.state.error.name}</h2>
          <p>{context.state.error.message}</p>
          <p>{context.state.error.lineNumber}</p>
          <button onClick={() => clearError()}>Ok</button>
        </div>
      </div>
    )
  );
};

export default ErrorComponent;
