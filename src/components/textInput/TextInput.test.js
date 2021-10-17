import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import TextInput from "./TextInput";

test("when user enters text, should render correctly", async () => {
  const { getByTestId } = render(
    <TextInput data-testid="my-input" placeholder="Enter text" />
  );
  const input = getByTestId("my-input");
  fireEvent.change(input, { target: { value: "Zafer AYAN" } });
  expect(input.value).toBe("Zafer AYAN");
});

test("when user enters text, should call onChange", async () => {
  const myChange = jest.fn();
  const { getByTestId } = render(
    <TextInput
      data-testid="my-input"
      placeholder="Enter text"
      onChange={myChange}
    />
  );
  const input = getByTestId("my-input");
  fireEvent.change(input, { target: { value: "z" } });
  fireEvent.change(input, { target: { value: "a" } });
  expect(myChange).toBeCalledTimes(2);
});
