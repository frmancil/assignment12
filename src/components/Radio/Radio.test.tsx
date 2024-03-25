import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Radio from "./Radio";

describe("Radio", () => {
  test("renders the Radio component", () => {
    render(<Radio name="radio" label="Radio" />);
  });
});
