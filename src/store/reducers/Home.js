import { FETCH_W, FETCH_P, FETCH_T } from "../actions/Home";
const initialState = {
  tasks: [],
  workspace: [],
  project: [],
  user: "Admin",
  process: "pending",
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_W:
      return { ...state, workspace: action.data, process: action.complete };
    case FETCH_P:
      console.log(action.data);
      return { ...state, project: action.data };
    case FETCH_T:
      console.log(action.data);
      return { ...state, tasks: action.data };

    default:
      return state;
  }
};

export default HomeReducer;
