import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "./Button";
import rgbToHex from "../../utils/rgbToHex";
import colors from "../../constants/colors";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders text", () => {
  act(() => {
    render(<Button>Hello</Button>, container);
  });
  expect(container.textContent).toBe("Hello");
  act(() => {
    render(<Button />, container);
  });
  expect(container.textContent).toBeFalsy();
});

it("called when clicked", () => {
  const handleClick = jest.fn();
  act(() => {
    render(
      <Button data-testid="my-button" onClick={handleClick}>
        Hello
      </Button>,
      container
    );
  });
  let button = container.querySelector("[data-testid='my-button']");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(handleClick).toBeCalled();
  expect(handleClick).toBeCalledTimes(1);
});
