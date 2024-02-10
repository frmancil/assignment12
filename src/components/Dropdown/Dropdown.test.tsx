import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("renders the Dropdown component", () => {
    render(<Dropdown name="Dropdown" />);
  });

  test("renders the Dropdown color", () => {
    const color = 'rgb(204, 204, 204)';
    const { container } = render(<Dropdown name="Dropdown" disabled={false} backgroundColor="rgb(204, 204, 204)"/>);
    expect(container.children[0]).toHaveStyle(`background-color: ${color}`); 
  });

});