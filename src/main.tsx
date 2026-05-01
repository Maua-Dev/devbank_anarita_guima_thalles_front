import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApiProvider } from "./context/ApiContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApiProvider>
    <App />
  </ApiProvider>
);