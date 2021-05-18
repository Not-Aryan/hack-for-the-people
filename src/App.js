import React, { useEffect } from "react";
import Page1 from "./pages/Page1";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gsap } from "gsap";
import Navbar from "./components/Navbar"


function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }


function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
            <Route exact path={"/"}>
            <Page1 />
            </Route>
            {/* <Route path={"/about"}>
                {() => window.location.replace("about.html")}
            </Route>
            <Route path={"*"}>
                {() => window.location.replace("404.html")}
            </Route> */}
        </Switch>
      </Router>
  );
}

export default App;
