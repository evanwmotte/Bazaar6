import React, { useState, useEffect } from "react"
import Home from './pages/home'
import Dashboard from "./pages/dashboard";
import Signing from "./pages/signing";
import { PostWanted } from "./pages/postWanted";
import { Wanted } from "./pages/wanted";
import Product from "./pages/product";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Error404 } from "./pages/errors/404";
import { Layout } from "./components/Layout";
import { Posting } from "./pages/posting";
import http from './services/http'

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false)

  useEffect(() => {
    checkCookie()
  }, [])

  const checkCookie = () => {
    return http.get('/checkcookie')
      .then(res => res.data ? setUserLoggedIn(true) : "")
  }
// basename={process.env.BASE_URL}
  return (<Router >
    <Switch>
      <Route path="/signing" component={Signing} />
      <Route exact path="/" component={Signing} />
      <Layout>
        <Route path="/home" render={() => {
          return userLoggedIn
            ? <Home />
            : <Redirect to="/signing" />
        }} />
        <Route path="/dashboard" render={() => {
          return userLoggedIn
            ? <Dashboard />
            : <Redirect to="/" />
        }} />
        <Route path="/product/:id" render={() => {
          return userLoggedIn
            ? <Product />
            : <Redirect to="/" />
        }} />
        <Route path="/post-product" render={() => {
          return userLoggedIn
            ? <Posting />
            : <Redirect to="/" />
        }} />
        <Route path="/post-wanted" render={() => {
          return userLoggedIn
            ? <PostWanted />
            : <Redirect to="/" />
        }} />
        <Route path="/wanted" render={() => {
          return userLoggedIn
            ? <Wanted />
            : <Redirect to="/" />
        }} />
      </Layout>
      <Route path="/*" component={Error404} />
    </Switch>
  </Router>
  )
};

export default App;