import { createContext } from 'react';

export const SampleContext = createContext({
  count: null,
  increment: () => {},
  decrement: () => {},
  name: "名無し",
  changeName: name => {}
})