import React from "react";
import "./Hero.scss";

export interface HeroProps {
  label: string;
  src: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div>
      <label>{props.label}</label>
      <img src={props.src} />
    </div>
  );
};

export default Hero;
