import React from "react";
import Inicio from "./components/Inicio/Inicio.jsx";
import { Footer } from "./components/footer/index.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Footer />
    </div>
  );
};

export default App;
