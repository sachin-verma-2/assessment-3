import React from "react"
import ReactDOM  from "react-dom"
import { Provider } from "react-redux"
import App from './App'
import { configureStore } from "@reduxjs/toolkit"
import store from "./movie app/store"
import {fetchdata} from './movie app/userSlice'
import userReducer from './movie app/userSlice'
store.dispatch(fetchdata())
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
    <App></App>
    </Provider>
)