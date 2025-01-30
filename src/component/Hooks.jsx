import { useState } from "react";
import Navbar from "./Navbar";
import Alert from "./Alert";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home";
import About_us from "./About_us";
import Contact from "./Contact";
function Application(){
    const [count, setCount] = useState(2);
    const [mode, setMode] = useState("light")
    const [text, setText] = useState("Dark Mode enabled")
    const[alert, setAlert] = useState(null)
    const toogleMode = () => { 
        if (mode === "light"){
            setMode("dark")
            setText("Light Mode enabled")
            showAlert("success", "dark mode has been enabled")
        }
        else{
            setMode("light")    
            setText("Dark Mode enabled")
            showAlert("success", "light mode has been enabled")
        }
      
    }
    const showAlert = (type,message) => {
        setAlert({
            type: type,
            message: message,
        })
    }
    setTimeout(()=>{
        setAlert(null)
    },10000)
    

return(
    <>  
    <Router>
    <Navbar title="hamro bazzar" toogleMode={toogleMode} text={text} mode={mode}></Navbar> 
    <Alert alert={alert}></Alert>
    <div>
        <button className="mt-40" onClick={()=> setCount(()=> count+1)} > click me</button>
    </div>
    <p > {count}</p>
    {/* <p>what is your friend name?<br></br>ans. {name}</p> */}
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About_us></About_us>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </Router>
    </>
)
}
export default Application