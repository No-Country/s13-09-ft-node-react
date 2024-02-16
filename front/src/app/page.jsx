import React from "react";
import Inicio from "./components/Inicio/Inicio.jsx";
import {Footer} from "@/app/components/footer"


export const metadata = {
  title: "HealthMate | Nosotros",
};

const App = () => {
  return (
    <div>
      <Inicio />
      <Footer />
    </div>
  );
};

export default App;
