import React from "react";
import './Cell.scss';

export interface CellProps {
  label: string;
  backgroundColor?: string;
}

const Cell = (props: CellProps) => {
  return <table>Table<tr>Row<td style={{backgroundColor: props.backgroundColor}}>{props.label}</td></tr></table>;
};

export default Cell;