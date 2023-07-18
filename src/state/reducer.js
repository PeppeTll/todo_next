export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPLETE": // ACTIONS
      return {
        // Nuovo stato di ritorno
        ...state,
        competed: true,
      };
    case "SET_UNCOMPLETE":
      return {
        ...state,
        completed: false,
      };
    default:
      console.log(state);
      return state;
  }
};
