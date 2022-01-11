import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";
import App from "~/App";
import { queryClient } from "~/services/react-query";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
