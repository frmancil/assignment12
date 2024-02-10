import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import Label from "./Label";

describe("Label", () => {
  test("renders the Label component", () => {
    render(<Label label="Label"></Label>);
  });
});