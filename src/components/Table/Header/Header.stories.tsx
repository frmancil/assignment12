import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Enabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enabled.args = {
  label: "Header",
};
