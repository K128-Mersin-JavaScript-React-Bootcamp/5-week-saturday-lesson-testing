import { render, screen, within, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders button", () => {
  render(<App />);
  const button = screen.getByText(/Add item/i);
  expect(button).toBeInTheDocument();
  const input = screen.getByPlaceholderText(/Enter item/i);
  expect(input).toBeInTheDocument();
  const list = screen.queryByRole("list");
  expect(list).toBeTruthy();
  const { queryByRole } = within(list);
  const items = queryByRole("listitem");
  expect(items).toBeFalsy();
});

test("should render list when items entered", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter item/i);
  const button = screen.getByText(/Add item/i);
  const list = screen.getByRole("list");
  const { queryByRole, getAllByRole } = within(list);
  expect(queryByRole("listitem")).toBeFalsy();
  fireEvent.change(input, { target: { value: "Zafer" } });
  fireEvent.click(button);
  expect(queryByRole("listitem")).toBeTruthy();
  expect(getAllByRole("listitem").length).toBe(1);
  fireEvent.change(input, { target: { value: "Hasan" } });
  fireEvent.click(button);
  expect(getAllByRole("listitem").length).toBe(2);
});
