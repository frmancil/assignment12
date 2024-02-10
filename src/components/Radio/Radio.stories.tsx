import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from "./Radio";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Enabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enabled.args = {
  label: "Radio",
  name: "radio",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Radio',
  name: "radio",
};