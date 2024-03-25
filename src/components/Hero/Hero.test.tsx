import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "./Hero";

describe("Hero", () => {
  test("renders the Button component", () => {
    render(
      <Hero
        label="Hero"
        src="https://www.wordstream.com/wp-content/uploads/2021/07/hero-image-guide-avengers.jpg"
      />,
    );
  });
});
