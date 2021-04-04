import React from "react";
import Routes from "./Routes";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <section>
        <Router>
          <Routes />
        </Router>
      </section>
    </div>
  );
};

export default App;
