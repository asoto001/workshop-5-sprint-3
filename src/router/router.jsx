import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../components/logIN/LogIn";
import Error404 from "../components/error404/Error404";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}> </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>

    </BrowserRouter>
  )
}

export default Router