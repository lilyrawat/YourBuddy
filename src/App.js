import React,{useState} from "react";
import Chat from './Chat'


import "./App.css";

function App() {
  const [show,setShow]=useState(false)
  return (
    <div className="App">
      {
       show?<Chat />:<div><h1 class="h1">Emi</h1>
       <br/>
       <p> Click on the chatbot to chat with Emi, yourBuddy.</p>
       <button onClick={()=>setShow(true)} id="show"></button>
       </div>
     }

    </div>
  );
}

export default App;