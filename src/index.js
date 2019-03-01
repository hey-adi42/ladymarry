import './index.css';
import * as serviceWorker from './serviceWorker';

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import StylishCalligraphyDemo from "./assets/fonts/StylishCalligraphyDemo.woff";
import EauSansBook from "./assets/fonts/eau_sans_book.woff";
import EauSansBold from "./assets/fonts/eau_sans_bold.woff";
import { createStore } from "redux";
import { Provider } from "react-redux";



ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.unregister();
