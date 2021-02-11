import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import HomeReducer from "./store/reducers/Home";
import "./index.css";
import Home from "./components/Home";

const rootReducer = combineReducers({
  user: HomeReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/d" component={DetailPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
