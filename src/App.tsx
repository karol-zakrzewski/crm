import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Companies from "./pages/Companies/Companies";
import Home from "./pages/Home/Home";
import Sales from "./pages/Sales/Sales";
import Nav from "./components/Navigation/Nav";
import CompanyDetails from "./pages/Companies/CompanyDetails/CompanyDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
