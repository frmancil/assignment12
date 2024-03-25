import React from "react";
import "./Row.scss";

export interface RowProps {
  label?: string;
  backgroundColor?: string;
}

const Row = (props: RowProps) => {
  return (
    <table>
      Table
      <tr style={{ backgroundColor: props.backgroundColor }}>{props.label}</tr>
    </table>
  );
};

export default Row;
