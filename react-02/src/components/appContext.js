import React, { Component } from "react";
import App from "../App";

import { LinkedList } from "../BLL/Data-Structures/DoublyLinkedList";

export const AppContext = createContext();

export class ContextProvider extends Component {
  linkedList = new LinkedList();

  state = {
    current: null,
  };
}
