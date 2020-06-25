import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Game from "./components/Game/Game";
import Cities from "./components/Cities/CommunityApp";
import Accounts from "./components/Account/AccountApp";
import DataStructuresApp from "./components/DataStructures/DataStructuresApp";
import DoublyLinkedList from "./components/DoublyLinkedList/DoublyLinkedListApp";
import Theme from "./components/Theme/Theme";
import { ContextProvider, AppContext } from "./components/AppContext";

it("App renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContextProvider>
      <AppContext.Consumer>
        <App />
      </AppContext.Consumer>
    </ContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("Tic-Tac-Toe Game renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContextProvider>
      <AppContext.Consumer>
        <Game />
      </AppContext.Consumer>
    </ContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("Accounts renders ", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContextProvider>
      <AppContext.Consumer>
        <Accounts />
      </AppContext.Consumer>
    </ContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("Cities renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContextProvider>
      <AppContext.Consumer>
        <Cities />
      </AppContext.Consumer>
    </ContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("LinkedList renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContextProvider>
      <AppContext.Consumer>
        <DoublyLinkedList />
      </AppContext.Consumer>
    </ContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("ChangeSettingsDisplay renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContextProvider>
      <AppContext.Consumer>
        <Theme />
      </AppContext.Consumer>
    </ContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("FifoLifoList renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContextProvider>
      <AppContext.Consumer>
        <DataStructuresApp />
      </AppContext.Consumer>
    </ContextProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
