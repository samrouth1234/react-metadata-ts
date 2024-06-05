import React from "react";
import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about-us/About";
import Service from "./components/service/Service";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Service />} />
      </Route>
    </Routes>
  );
}
