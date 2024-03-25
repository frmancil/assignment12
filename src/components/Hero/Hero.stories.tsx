import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Hero from "./Hero";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Enabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enabled.args = {
  label: "Hero",
  src: "https://www.wordstream.com/wp-content/uploads/2021/07/hero-image-guide-avengers.jpg",
};
