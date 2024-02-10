import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import Text from "./Text";

describe("Text", () => {
  test("renders the Button component", () => {
    render(<Text label="Text"></Text>);
  });

});