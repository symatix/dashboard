import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import initStore from './store'
import App from './components/App/App'

const store = createStore(
    reducers, 
    initStore, 
    applyMiddleware(reduxThunk)
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)
