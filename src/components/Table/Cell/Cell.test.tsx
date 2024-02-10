import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import Cell from "./Cell";

describe("Cell", () => {
  test("renders the Button component", () => {
    render(<Cell label="Button" />);
  });

});