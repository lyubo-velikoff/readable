/* React */
import React from 'react'
import { Route } from 'react-router-dom'

/* Components */
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
        <Route path='/new' component={CreatePage} />
        <Route exact path={`/posts`} component={MainPage} />
        <Route exact path={`/posts/:category`} component={MainPage} />
        <Route exact path={`/posts/:category/:postId`} component={ViewPage} />
      </div>
      <Footer />
    </div>
  )
}

export default App