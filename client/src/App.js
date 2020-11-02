import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleTerm from "./pages/SingleTerm";
import Header from "./components/Header";
import { GlobalStyles } from "./globalStyles";
import styled from "styled-components";

const App = () => {
  return (
    <AuthProvider>
      <Header />
        <Router>
          <Route exact path="/" component={Home} />
          {/* <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/register" component={Register} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/terms/:termsId" component={SingleTerm} />
        </Router>
        <GlobalStyles />
    </AuthProvider>
  );
};



export default App;
