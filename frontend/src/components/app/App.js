/* React */
import React from 'react'
import { Route, Switch } from 'react-router-dom'

/* Components */
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import MainPage from '../pages/Main'
import ViewPage from '../pages/View'
import CreateEditPostPage from '../pages/CreateEditPost'
import CreateEditComment from '../pages/CreateEditComment';
import PageNotFound from '../pages/NotFound'

const App = () => {
  return (
    <div className="app">
      <div className="body-content">
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/new/post" exact component={CreateEditPostPage} />
          <Route path="/new/comment/:postId" component={CreateEditComment} />
          <Route path="/edit/comment/:commentId" component={CreateEditComment} />
          <Route path="/edit/post/:postId" exact component={CreateEditPostPage} />
          <Route path="/:category" exact component={MainPage} />
          <Route path="/:category/:postId" exact component={ViewPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App