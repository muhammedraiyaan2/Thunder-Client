import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import Navbar from './Navbar'
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
    <Navbar/>
    <div className="form">
      <div className="form2">
      <input type="text" id="get" />
      <button id="getBtn">GET</button>
      <pre className="language-html">
        <code id="output"></code>
      </pre>
      </div>
    </div>
    </>
  );
}

export default App;
