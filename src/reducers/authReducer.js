const initialState = {
  info: []
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SEND_FROM_USER":
      return {
        info: [...state.info, action.data]
      };
    default:
      return state;
  }
}