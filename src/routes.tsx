import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Customize from "./pages/Customize";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Customize} path="/customize" />
    </BrowserRouter>
  );
};

export default Routes;
