import { SyntheticEvent } from "react";

const stopPropagation = <T>(callback: T) => {
  return (event: SyntheticEvent) => {
    event.stopPropagation();
    callback instanceof Function
      ? callback()
      : console.error("No Function Passed for Click event");
  };
};

export default stopPropagation;
