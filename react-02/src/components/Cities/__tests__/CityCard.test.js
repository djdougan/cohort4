import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/dom";
import { cleanup, render, fireEvent } from "@testing-library/react";

// adds special assertions like toHaveTextContent
import "@testing-library/jest-dom/extend-expect";
import CityCard from "../CityCard";
import City from "../../../BLL/Communities/City";

describe("CityCard", () => {
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

  test("renders city component and data", async () => {
    const fakeCity = new City("A", 1, 1, 10, 1);
    let modify = 5;

    const mockDelete = jest.fn();

    const mockIncrease = jest.fn((e) => {
      fakeCity.population += modify;

      console.log(e);
    });

    const mockDecrease = jest.fn((e) => {
      fakeCity.population -= modify;
      console.log(modify);
    });
    //
    const mockChange = jest.fn((e) => {
      modify = parseInt(e.target.value);
      console.log(modify);
    });

    act(() => {
      render(
        <CityCard
          key={1}
          city={fakeCity}
          onDelete={mockDelete}
          handleIncrease={mockIncrease}
          onDecrease={mockDecrease}
          onChange={mockChange}
        />,
        container
      );
      const name = screen.getByLabelText(/Name:/i);
      expect(name.value).toBe(fakeCity.name);
      const lat = screen.getByLabelText(/Latitude:/i);
      expect(lat.value).toBe(fakeCity.latitude.toString());
      const long = screen.getByLabelText(/Longitude:/i);
      expect(long.value).toBe(fakeCity.longitude.toString());
      const pop = screen.getByLabelText(/Population:/i);
      expect(pop.value).toBe(fakeCity.population.toString());
      const transaction = screen.getByLabelText(/Population Change:/i);
      const increase = screen.getByText("Increase");
      expect(increase).toBeTruthy();
      const decrease = screen.getByText("Decrease");
      expect(decrease).toBeTruthy();
      expect(transaction.value).toBe("");
      fireEvent.change(transaction, { target: { value: 5 } });

      //   fireEvent.click(increase);
      //   expect(mockIncrease).toBeCalledWith(5);

      //   fireEvent.change(transaction, { target: { value: 10 } });
      //   fireEvent.click(increase);
      //   expect(fakeCity.population).toBe(25);
    });
  });
});
