/* React */
import React from 'react'
import ReactDOM from 'react-dom'

/* Styles */
import './index.css'

/* Components*/
import App from './components/app/App'

/* Sergice workers */
import registerServiceWorker from './service-workers/registerServiceWorker'

/* Redux */
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from './reducers'
// import { Provider } from 'react-redux'

/* Render Application */
ReactDOM.render(<App />, document.getElementById('root'))

/* Register service workers */
registerServiceWorker();
