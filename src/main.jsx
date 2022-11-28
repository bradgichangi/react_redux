import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useSelector } from 'react-redux'
import App from './App'
import './index.css'
import { createStore } from 'redux'
import { userReducer } from './reducer'
//STORE



const store = createStore(userReducer)
// const rootReducer = userReducer()
//ACTIONS



//DISPATCH

// store.dispatch(createUser())
// store.dispatch(deleteUser())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <App />
  </Provider>
)
