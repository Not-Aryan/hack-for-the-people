import React, { useEffect } from "react";
import Page1 from "./pages/Page1";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gsap } from "gsap";
import Header from "./components/header";
import Navigation from "./components/navigation";
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

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
        });

        useEffect(() => {
        // prevents flashing
        gsap.to("body", 0, { css: { visibility: "visible" } });
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
            });
        }, 1000);

        window.addEventListener("resize", debouncedHandleResize);
        return () => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
        });

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
