import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import Navbar from './Navbar'
import Post from './Post'
function App() {
  useEffect(() => {
    let gets=document.getElementById("get")
  let getsBtn=document.getElementById("getBtn")
  let output=document.getElementById("output")
  getsBtn.addEventListener("click",function(e) {
    fetch(gets.value).then(function(response){
        return response.text()
    }).then(function(responses){
      output.innerHTML=responses
    })
  })
  }, )
  
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/post">
          <Post/>
        </Route>
        <Route path="/">
        <div className="form">
      <div className="form2">
      <input type="text" id="get" />
      <button id="getBtn">GET</button>
      <pre className="language-html">
        <code id="output"></code>
      </pre>
      </div>
    </div>
        </Route>
      </Switch>
    </Router>
   
    </>
  );
}

export default App;
