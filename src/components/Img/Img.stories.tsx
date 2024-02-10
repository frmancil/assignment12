import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Img from "./Img";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Img",
  component: Img,
} as ComponentMeta<typeof Img>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const Enabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enabled.args = {
  src: "https://64.media.tumblr.com/62c69c62c8d3d67bff8cd2db51c135c4/tumblr_pdptyjw7dU1rrftcdo1_1280.jpg",
};
