import * as ActionTypes from "./ActionTypes";
const initialState = {
  counter: 0,
  result: []
};
const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ActionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case ActionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case ActionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({
          id: new Date(),
          resultCtr: state.counter
        })
      };
    case ActionTypes.DELETE_RESULT:
      return {
        ...state,
        result: state.result.filter((val, ind) => {
          return val.id !== action.id;
        })
      };
  }
  return state;
};
export default reducer;
