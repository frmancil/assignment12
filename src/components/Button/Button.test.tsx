import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Button" />);
  });

  test("renders the Button color", () => {
    const color = "rgb(204, 204, 204)";
    const { container } = render(
      <Button
        label="Button"
        disabled={false}
        backgroundColor="rgb(204, 204, 204)"
      />,
    );
    expect(container.children[0]).toHaveStyle(`background-color: ${color}`);
  });
});
