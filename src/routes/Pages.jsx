import React from "react";
import Home from "./home/Home";
import Galaxy from "./galaxy/Galaxy";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBefore Enter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/galaxy" element={<Galaxy />} />
      </Routes>
    </AnimatePresence>
  );
}
