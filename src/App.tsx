import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Companies from "./pages/Companies/Companies";
import Home from "./pages/Home/Home";
import Sales from "./pages/Sales/Sales";
import Nav from "./components/Navigation/Nav";
import CompanyDetails from "./pages/Companies/CompanyDetails/CompanyDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddCompany from "./pages/Companies/AddCompany/AddCompany";
import { paths } from "./utils/paths";
import EditCompany from "./pages/Companies/EditCompany/EditCompany";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={paths.companies} element={<Companies />} />
            <Route path={paths.addComapny} element={<AddCompany />} />
            <Route
              path={`/${paths.editComapny}/:id`}
              element={<EditCompany />}
            />
            <Route path="/company/:id" element={<CompanyDetails />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
