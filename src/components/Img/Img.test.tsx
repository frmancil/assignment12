import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Img from "./Img";

describe("Img", () => {
  test("renders the Img component", () => {
    render(
      <Img src="https://64.media.tumblr.com/62c69c62c8d3d67bff8cd2db51c135c4/tumblr_pdptyjw7dU1rrftcdo1_1280.jpg" />,
    );
  });
});
