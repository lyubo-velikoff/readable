/* React */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter }  from 'react-router-dom'

/* Styles */
import './index.css'

/* Components*/
import App from './components/app/App'

/* Sergice workers */
import registerServiceWorker from './service-workers/registerServiceWorker'

/* Redux */
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger)
  )
)

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
