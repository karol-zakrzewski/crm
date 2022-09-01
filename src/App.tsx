import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
