import React from "react";
import Home from "../components/Home";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Page1() {
  return (

    <>
        <Home />
        <Services />
        <Footer />
    </>


    //   <Router>
    //       <Switch>
    //           <Route exact path={"/"}>
    //               <Home />
    //               <Testimonial />
    //               <Footer />
    //           </Route>
    //           <Route path={"/about"}>
    //               {() => window.location.replace("about.html")}
    //           </Route>
    //           <Route path={"*"}>
    //               {() => window.location.replace("404.html")}
    //           </Route>
    //       </Switch>
    //   </Router>
  );
}

export default Page1;
