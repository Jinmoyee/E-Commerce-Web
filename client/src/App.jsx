import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./components/header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>Hello World!</Route>
        <Route path="/about" element={<About />}>About Page</Route>
        <Route path="/signIn" element={<SignIn />}>Sign In page</Route>
        <Route path="/signUp" element={<SignUp />}>Sign Up page</Route>
        <Route path="/profile" element={<Profile />}>Profile page</Route>
      </Routes>
    </BrowserRouter>
  )
}