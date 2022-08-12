import { useEffect } from "react";

import { useDispatch } from "react-redux/es/exports";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Contact from "./routes/contact/contact.component";
import { checkUserSession } from "./store/user/user.action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // dispatch method
  const dispatch = useDispatch();

  // the way we keep up with changes on Auth with Redux
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
