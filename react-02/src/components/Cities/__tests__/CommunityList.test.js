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

describe("CommunityList", () => {
  let container = null;

  beforeAll(() => {
    // setup DOM element as render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
    // container = null;
  });
  const mockDeleteHandler = jest.fn();
  const mockIncreaseHandler = jest.fn();
  const mockDecreaseHandler = jest.fn();
  const mockChangeHandler = jest.fn();

  test("should list cities", () => {
    const community = new Community();
    community.createCity("City-1", 1, 1, 10);
    community.createCity("City-2", 2, 2, 20);
    community.createCity("City-3", 3, 3, 30);

    act(() => {
      render(
        <CommunityList
          cities={community.communities}
          onDeleHandler={mockDeleteHandler}
          mockIncrease={mockIncreaseHandler}
          mockDecrease={mockDecreaseHandler}
          mockChangeHandler={mockChangeHandler}
        />,
        container
      ); // render
      const names = screen.getAllByLabelText(/Name:/);
      expect(names[0].value).toContain("City-1");
      expect(names[1].value).toContain("City-2");
      expect(names[2].value).toContain("City-3");
      const latitude = screen.getAllByLabelText(/Latitude:/);
      expect(latitude[0].value).toContain("1");
      expect(latitude[1].value).toContain("2");
      expect(latitude[2].value).toContain("3");
    }); // act
  });
});
