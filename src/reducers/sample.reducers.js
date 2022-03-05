import { sampleConstants } from "../constants/sample.constants";

const initialState = {
  number: 0,
};
function sample(state = initialState, action) {
  switch (action.type) {
    case sampleConstants.INCREMENT:
      return {
        number: state.number + 1,
      };
    case sampleConstants.DECREMENT:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
export default sample;
