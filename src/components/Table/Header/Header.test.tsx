import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

describe("Header", () => {
  test("renders the Header component", () => {
    render(<Header label="Header" />);
  });
});
