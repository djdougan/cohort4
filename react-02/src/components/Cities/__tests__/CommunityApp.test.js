import React from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CommunityApp from "../CommunityApp";
import CityCard from "../CityCard";

describe("CommunityApp", () => {
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

  test("render properly", () => {
    act(() => {
      render(<CommunityApp />, container);
    });
    expect(container.textContent).toContain("Loading...");
  });
});
