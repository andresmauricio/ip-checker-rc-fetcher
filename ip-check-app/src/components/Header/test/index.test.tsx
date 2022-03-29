import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "../index";

jest.mock("react-query", () => ({
  useQuery: () => ({ isLoading: false, error: {}, data: "" }),
}));

test("should render title application", () => {
  const component = render(<Header />) ;
  const title = component.getByText('IP Address Tracker');
  expect(title).toBeTruthy();
});

test("should render input application", () => {
  const component = render(<Header />) ;
  const input = component.getByPlaceholderText('Search for any IP address or domain');
  expect(input).toBeTruthy();
});

test("should render button application", () => {
  const component = render(<Header />) ;
  const button = component.getByTestId('button-search');  
  expect(button).toBeTruthy();
  expect(typeof(button.onclick)).toBe('function');
});
