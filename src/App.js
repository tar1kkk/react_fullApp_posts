import React, { useState, useMemo, useEffect } from "react";
import './styles/App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NavBar from "./components/UI/NavBar/NavBar";
import PostIdPage from "./pages/PostIdPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/posts" element={<Posts />}>
        </Route>
        <Route exect path="/posts/:id" element={<PostIdPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
