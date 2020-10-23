import { ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR } from "../types";

const initialState = {
  users: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
      case ADD_USER:
          return{
              ...state,
              loading: action.payload
          }
    case ADD_USER_SUCCESS:
        return{
            ...state,
            loading: false,
            users: [...state.users, action.payload]
        }
        case ADD_USER_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
    default:
      return state;
  }
}
