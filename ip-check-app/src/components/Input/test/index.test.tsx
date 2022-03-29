import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { InputSearch } from "../index";

jest.mock("react-query", () => ({
  useQuery: () => ({ isLoading: false, error: {}, data: "" }),
}));

test("should render title application", () => {
  const component = render(<InputSearch />) ;
  const container = component.getByTestId('container');
  expect(container.childElementCount).toEqual(2);
});
