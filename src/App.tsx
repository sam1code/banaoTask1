import React from "react";
import { Navbar, MainBanner } from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <Navbar />
        <MainBanner />
      </div>
    </div>
  );
};

export default App;
