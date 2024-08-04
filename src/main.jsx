import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/User.jsx";
import { IsLoadingProvider } from "./context/IsLoading.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/nc-marketplace">
    <UserProvider>
      <IsLoadingProvider>
        <App />
      </IsLoadingProvider>
    </UserProvider>
  </BrowserRouter>
);
