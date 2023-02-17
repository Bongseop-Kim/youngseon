import React from "react";
import { BrowserRouter } from "react-router-dom";
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Home />
        <Fotter />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
