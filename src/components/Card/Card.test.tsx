import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import Card from "./Card";

describe("Card", () => {
  test("renders the Card component", () => {
    render(<Card src="https://i0.wp.com/pkmncards.com/wp-content/uploads/en_US-XY11-096-talonflame.jpg" />);
  });

});