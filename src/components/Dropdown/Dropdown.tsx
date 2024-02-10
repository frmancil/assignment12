import React from "react";
import './Dropdown.scss';

export interface DropdownProps {
  name: string;
  disabled?: boolean;
  backgroundColor?: string;
}

const Dropdown = (props: DropdownProps) => {
  return <select disabled={props.disabled} style={{backgroundColor: props.backgroundColor}} name={props.name}><option>Select an option</option></select>;
};

export default Dropdown;