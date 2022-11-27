import ReactDOM from "react-dom/client"
import App from "./App"

// https://ant.design/docs/react/migration-v5-cn
import "antd/dist/reset.css" // basic style offered by antd

import "./index.css"
import React from "react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
