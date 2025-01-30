import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./component/App"
import Application from './component/Hooks'
import Navbar from './component/Navbar'

let title="hello world from main.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <h1>{title}</h1> */}
   {/* <hr /> */}
   {/* <App /> */}
   {/* <Navbar></Navbar> */}
   <Application />
  </React.StrictMode>,
)
// research : component in react : simply a function which return html code
//  how to make a component
//  how to use a component
//  how to pass value in component