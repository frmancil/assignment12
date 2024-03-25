import React from "react";
import "./Table.scss";

export interface TableProps {
  label: string;
  backgroundColor?: string;
}

const Table = (props: TableProps) => {
  return (
    <table style={{ backgroundColor: props.backgroundColor }}>
      {props.label}
      <tr>
        col<td>cel</td>
      </tr>
    </table>
  );
};

export default Table;
