/* React */
import React from 'react'
import { Route } from 'react-router-dom'

/* Components */
import Category from '../categories/Category'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import MainPage from '../pages/Main'
import ViewPage from '../pages/View'

const App = () => {
  return (
    <div className="App">
      <div className="body-content">
        <Header />
        <Route exact path='/' component={MainPage} />
        <Route exact path={`/:category`} component={Category} />
        <Route path={`/:category/:postId`} component={ViewPage} />
      </div>
      <Footer />
    </div>
  )
}

export default App