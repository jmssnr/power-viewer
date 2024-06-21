import React from "react";
import classes from "./Card.module.css";

type CardProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Card = ({ children, style }: CardProps) => {
  return (
    <div className={classes.root} style={style}>
      {children}
    </div>
  );
};

export default Card;
