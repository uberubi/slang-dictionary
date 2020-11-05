import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import SingleTerm from "./pages/SingleTerm/index";
import NewTerm from "./pages/NewTerm/index";
import Header from "./components/Header/index";
import { GlobalStyles } from "./globalStyles";
import AuthRoute from './utils/AuthRoute'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <Route exact path="/terms/:termsId" component={SingleTerm} />
        <Route exact path="/add" component={NewTerm} />
      </Router>
      <GlobalStyles />
    </AuthProvider>
  );
};

export default App;
