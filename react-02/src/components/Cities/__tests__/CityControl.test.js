import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/dom";
import { cleanup, render, fireEvent } from "@testing-library/react";

// adds special assertions like toHaveTextContent
import City from "../../../BLL/Communities/City";
import Community from "../../../BLL/Communities/Community";
import "@testing-library/jest-dom/extend-expect";
import CityCard from "../CityCard";
import CommunityList from "../CommunityList";
import CityControl from "../CityControl";

describe("CityControl", () => {
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

  const mockOnCreate = jest.fn((e) => {});

  test("should create cities", () => {
    const fakeCity = {
      key: null,
      name: "",
      latitude: 0,
      longitude: 0,
      population: 0,
    };

    act(() => {
      render(
        <CityControl onChange={mockHandleChange} onCreate={mockOnCreate} />
      );
    });
  });
});
