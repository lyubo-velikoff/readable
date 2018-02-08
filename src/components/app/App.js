/* React */
import React from 'react'
import { Route } from 'react-router-dom'

/* Components */
import Category from '../categories/Category'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import MainPage from '../pages/Main'
import ViewPage from '../pages/View'
import CreatePage from '../pages/Create'

const App = () => {
  return (
    <div className="app">
      <div className="body-content">
        <Header />
        <Route exact path='/' component={MainPage} />
        <Route exact path={`/:category`} component={MainPage} />
        <Route path={`/:category/:postId`} component={ViewPage} />
        <Route exact path='/new' component={CreatePage} />
      </div>
      <Footer />
    </div>
  )
}

export default App