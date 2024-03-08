import { useState } from "react";

const intialState = 300;

const updateValue = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default updateValue;
