import React from "react";
import Inicio from "./components/Inicio/Inicio.jsx";
import {Footer} from "@/app/components/footer"
import Navbar from "./components/Navbar.jsx";
import "../../public/fonts.css";

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
