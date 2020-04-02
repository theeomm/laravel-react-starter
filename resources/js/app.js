// Axios set up
window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.withCredentials = true;

// React App setup
import React from "react";
import ReactDOM from "react-dom";

import App from "./src/App";

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
