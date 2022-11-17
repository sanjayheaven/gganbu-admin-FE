import ReactDOM from "react-dom/client"
import App from "./App"

// https://ant.design/docs/react/customize-theme-variable-cn
import "antd/dist/antd.variable.min.css" // theme config by ConfigProvider

// https://ant.design/docs/react/customize-theme-cn
// import "antd/dist/antd.dark.css" // dark theme
// import "antd/dist/antd.compact.css" // compact theme

// import "@ant-design/aliyun-theme"

import "./index.css"
import React from "react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
