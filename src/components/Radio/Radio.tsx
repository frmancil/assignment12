import React from "react";
import "./Radio.scss";

export interface RadioProps {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  name: string;
}

const Radio = (props: RadioProps) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="radio"
        disabled={props.disabled}
        style={{ backgroundColor: props.backgroundColor }}
        name={props.name}
      ></input>
    </div>
  );
};

export default Radio;
