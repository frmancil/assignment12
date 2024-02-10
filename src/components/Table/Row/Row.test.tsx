import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import Row from "./Row";

describe("Row", () => {
  test("renders the Row component", () => {
    render(<Row label="Row" />);
  });

});