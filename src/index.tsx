import React from "react";
import ReactDOM from "react-dom/client";
import DogRanking from "./components/ScoreBoard/Table/DogRanking";
import reportWebVitals from "./reportWebVitals";
import getStore from "./store";
import "./index.css";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";

export const store = getStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <DogRanking />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
