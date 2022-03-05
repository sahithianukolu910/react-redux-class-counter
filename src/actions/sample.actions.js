import { sampleConstants } from "../constants/sample.constants";

export const SampleActions = {
  increment,
  decrement,
};

function increment() {
  return { type: sampleConstants.INCREMENT };
}

function decrement() {
  return { type: sampleConstants.DECREMENT };
}
