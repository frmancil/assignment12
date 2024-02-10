import React from "react";
import './Header.scss';

export interface HeaderProps {
  label: string;
  backgroundColor?: string;
}

const Header = (props: HeaderProps) => {
  return <table>Table<th style={{backgroundColor: props.backgroundColor}}>{props.label}</th></table>;
};

export default Header;