import { atom } from "nanostores";

// Simple create a atom and set its default to 0
export const counter = atom(0);

// set our counter to "currentCouterValue + 1 "
export const addToCounter = () => {
  counter.set(counter.get() + 1);
};

// set our counter to "currentCouterValue - 1"
export const subtractFromCounter = () => {
  counter.set(counter.get() - 1);
};
