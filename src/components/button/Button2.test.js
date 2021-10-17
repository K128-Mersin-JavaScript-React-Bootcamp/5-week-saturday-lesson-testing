import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "./Button2";
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
    render(<Button text={"Hello"} />, container);
  });
  expect(container.textContent).toBe("Hello");
  act(() => {
    render(<Button />, container);
  });
  expect(container.textContent).toBeFalsy();
});

it("has blue background", () => {
  act(() => {
    render(<Button data-testid={"my-button"} text={"Hello"} />, container);
  });
  let myButton = container.querySelector("[data-testid='my-button']");
  let rgbColor = myButton.style.backgroundColor;
  let hexColor = rgbToHex(rgbColor);
  expect(hexColor.toLocaleLowerCase()).toMatch(
    colors.PETER_RIVER.hex.toLocaleLowerCase()
  );
});

it("has number when clicked", () => {
  act(() => {
    render(<Button data-testid={"my-button"} text={"Hello"} />, container);
  });
  expect(container.textContent).toBe("Hello");
  let button = container.querySelector("[data-testid='my-button']");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(container.textContent).toBe("Hello 1");

  for (let i = 0; i < 5; i++) {
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  }
  expect(container.textContent).toBe("Hello 6");
});

it("has name when clicked", async () => {
  act(() => {
    render(<Button data-testid={"my-button"} text={"Hello"} />, container);
  });
  expect(container.textContent).toBe("Hello");
  const fakeUser = {
    id: 1,
    name: "Zafer AYAN",
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );
  let button = container.querySelector("[data-testid='my-button']");
  await act(async () => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(container.textContent).toBe("Hello 1 Zafer AYAN");
});
