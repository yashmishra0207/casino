import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const mytheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e90ff",
    },
    secondary: {
      main: "#ff69b4",
    },
  },
});

if (!localStorage.getItem("state")) {
  localStorage.setItem(
    "state",
    JSON.stringify({
      amount: 99.99,
      name: "",
    })
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mytheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
