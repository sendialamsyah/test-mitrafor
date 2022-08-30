import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "antd/dist/antd.css";
import Sidebar from "./components/module/sidebar";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Sidebar>
                <Home />
              </Sidebar>
            }
          />
          <Route
            path="/about"
            element={
              <Sidebar>
                <About />
              </Sidebar>
            }
          />
          <Route
            path="/contact"
            element={
              <Sidebar>
                <Contact />
              </Sidebar>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Sidebar>
                <Detail />
              </Sidebar>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
