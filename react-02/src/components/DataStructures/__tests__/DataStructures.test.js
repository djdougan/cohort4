import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import QueueApp from "../DataStructures";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/dom";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Tests QueueApp", () => {
  let container = null;

  beforeAll(() => {
    // setup DOM element as render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  const mockEnqueueHandler = jest.fn();
  const mockDeQueueHandler = jest.fn();
  const mockPeekHandler = jest.fn();
  const mockIsEmptyHandler = jest.fn();
  const mockClearHandler = jest.fn();
  const mockSizeHandler = jest.fn();

  test("Renders Properly", () => {
    const { getByTestId, rerender } = render(<QueueApp />);
    expect(getByTestId("app-header").textContent).toBe("Queue Application");
  });
});
