import React from "react";
import { render, fireEvent, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import List from "./List";

test("when items empty, should render no data found", async () => {
  render(<List data-testid="my-list" />);
  expect(screen.getByText("No data found")).toBeTruthy();
  const list = screen.queryByRole("list");
  expect(list).toBeFalsy();
});

test("when props given, should render list", async () => {
  render(<List data-testid="my-list" items={[{ id: 1, name: "Zafer" }]} />);
  const list = screen.getByRole("list");
  expect(list).toHaveTextContent("Zafer");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(1);
});
