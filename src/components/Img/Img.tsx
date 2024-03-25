import React from "react";
import "./Img.scss";

export interface ImgProps {
  backgroundColor?: string;
  src: string;
  width?: string;
  height?: string;
}

const Img = (props: ImgProps) => {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      style={{ backgroundColor: props.backgroundColor }}
    />
  );
};

export default Img;
