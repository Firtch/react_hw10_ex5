import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import withSuspense from "./components/withSuspense";
const Lazy = React.lazy(() => import("./components/Lazy"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <div className="App">
        
        {/* <Route
          path="/lazy"
          render={() => {
            // return <React.Suspense fallback={<h1>Loading</h1>}>
            return (
              <React.Suspense fallback={<Preloader />}>
                <Lazy />
              </React.Suspense>
            );
          }}
        /> */}

        {/* <React.Suspense fallback={<Preloader />}>
          <Route path="/lazy" component={Lazy} />
        </React.Suspense> */}

        <Route path="/lazy" render={withSuspense(Lazy)} />

      </div>
    </BrowserRouter>
  );
}

export default App;
