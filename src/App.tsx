import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import Design from "./pages/Design/Design";
import Home from "./pages/Home/Home";
import WayToCome from "./pages/Map/WayToCome";
import Portpolio from "./pages/Portpolio/Portpolio";
import QuoteContact from "./pages/QuoteContact/QuoteContact";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/way_to_come" element={<WayToCome />} />
          <Route path="/portpolio" element={<Portpolio />} />
          <Route path="/quote_contact" element={<QuoteContact />} />
          <Route path="/notice_board" element={<WayToCome />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
