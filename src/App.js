import React from 'react'
import { Route ,Switch } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import ReviewPage from './pages/ReviewPage'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/ErrorPage'



function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/service" component={ServicePage}></Route>
        <Route exact path="/review" component={ReviewPage}></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  )
}

export default App
