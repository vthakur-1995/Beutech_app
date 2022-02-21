import { grey } from "@material-ui/core/colors";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FormSection from "./Views/FormSection";
import Project1 from "./Views/Project1";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TableScreen from "./Views/TableScreen";

import SingleTableData from "./Views/SingleTableData";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/Theme";
import FormikScreen from "./Views/FormikScreen";
import FormikScreenDocs, { SignupForm } from "./Views/FormikScreenDocs";
import Home from "./Views/Home";

function App() {
  return (
    <div className="App" style={{ height: "auto" }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Project1 />} />
            <Route path="/form" element={<SignupForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/table" element={<TableScreen />} />
            <Route path="/data/:id" element={<SingleTableData />} />
            <Route path="*" element={<Navigate replace to="/form" />} />
            <Route
              path="*"
              element={<h1 style={{ color: "#fff" }}>Invalid path</h1>}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
