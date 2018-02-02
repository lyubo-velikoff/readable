/* React */
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'

/* Styles */
import './index.css'

/* Components*/
import App from './components/app/App'

/* Sergice workers */
import registerServiceWorker from './service-workers/registerServiceWorker'

/* Redux */
import {
  Provider
} from 'react-redux'

/* Store */
import store from './store'

/* Render Application */
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

/* Register service workers */
registerServiceWorker();