import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Customize from "./pages/Customize";
import FinishOrder from "./pages/FinishOrder";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Customize} path="/customize" />
      <Route component={FinishOrder} path="/finish-order" />
    </BrowserRouter>
  );
};

export default Routes;
