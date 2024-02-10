import React from "react";
import './Footer.scss';

export interface FooterProps {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
}

const Footer = (props: FooterProps) => {
  return <table>Table<tfoot style={{backgroundColor: props.backgroundColor}}>{props.label}</tfoot></table>;
};

export default Footer;