import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { Layout } from "../Components/Layout";
import PageNoivas from "../Pages/PageNoivas";
import { PageAbout } from "../Pages/About";
import { Services } from "../Pages/Services";
import { Courses } from "../Pages/Courses";
import { Contact } from "../Pages/Contact";

export function ServerRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<PageNoivas />} path="/noivas" />
          <Route element={<PageAbout />} path="/sobre" />
          <Route element={<Services />} path="/atendimento" />
          <Route element={<Courses />} path="/cursos" />
          <Route element={<Contact />} path="/contatos" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
