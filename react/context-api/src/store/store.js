import { createContext } from "react";

export const initialState = {
  counter: 10000,
  increment: () => {},
  decrement: () => {},
};

export const store = createContext({
  initialState,
});
