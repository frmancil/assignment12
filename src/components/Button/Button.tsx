import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.label}
    </button>
  );
};

export default Button;
