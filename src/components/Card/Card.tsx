import React from "react";
import './Card.scss';

export interface CardProps {
  src: string;
}

const Card = (props: CardProps) => {
  return <div><img src={props.src} /></div>;
};

export default Card;