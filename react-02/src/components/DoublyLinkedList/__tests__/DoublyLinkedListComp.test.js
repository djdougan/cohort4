import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/dom";
import { cleanup, render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import DoubleLinkedListApp from "../../DoublyLinkedList/DoublyLinkedListApp";

describe("Name of the group", () => {
  let container = null;
  beforeAll(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
    // container = null;
  });

  test("should render", () => {
    act(() => {
      render(<DoubleLinkedListApp title="Doubly Linked List" />, container);
    });
    expect(container.textContent).toContain("Doubly Linked List");
  });
});
