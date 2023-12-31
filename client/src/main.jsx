import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-n361pzjr66uahas0.us.auth0.com"
     clientId="9jbGsvTiiGSWrUerC95g5OWNGynjZlp8"
     authorizationParams={{
      redirect_uri: "https://property-management-app-client.vercel.app/"
     }}
     audience="http://localhost:8000/"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
