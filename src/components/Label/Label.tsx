import React from "react";
import './Label.scss';

export interface LabelProps {
  label: string;
  backgroundColor?: string;
}

const Label = (props: LabelProps) => {
  return <label style={{backgroundColor: props.backgroundColor}}>{props.label}</label>;
};

export default Label;