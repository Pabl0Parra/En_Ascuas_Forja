import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { store } from "./store/store";

import { Provider } from "react-redux";

import "./index.scss";
import FooterContainer from "./components/footer-container/footer-container.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* // once we wrapped App with UserProvider, we can access the user info anywhere in the app */}
        {/* <UserProvider> */}
        <CategoriesProvider>
          <CartProvider>
            <App />
            <FooterContainer />
          </CartProvider>
        </CategoriesProvider>
        {/* </UserProvider> No need for it with Redux Store*/}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
