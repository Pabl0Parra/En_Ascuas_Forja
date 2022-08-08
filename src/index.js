import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { CartProvider } from "./contexts/cart.context";
import { store } from "./store/store";

import { Provider } from "react-redux";

import "./index.scss";
import FooterContainer from "./components/footer-container/footer-container.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* // once we wrapped App with Provider, Redux store can access the whole app */}
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <App />
          <FooterContainer />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
