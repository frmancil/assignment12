import React from "react";
import './Text.scss';

export interface TextProps {
  label: string;
  backgroundColor?: string;
}

const Text = (props: TextProps) => {
  return <text style={{backgroundColor: props.backgroundColor}}>{props.label}</text>;
};

export default Text;