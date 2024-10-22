import Home from "./Screens/Home";
import Services from "./Screens/Services";
import HowWeWork from "./Screens/HowWeWork";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import NavBar from "./Components/NavBar";
import React from "react";
import NavBar2 from "./Components/NavBar2";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar2 />
      </React.Fragment>
    </div>
  );
}

export default App;

/*      <NavBar />
      <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact />*/
