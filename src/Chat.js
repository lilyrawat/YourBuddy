import React,{ useState} from "react";
import Chatbot from "react-chatbot-kit";
import App from "./App";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

import "./Chat.css";
//import { ReactComponent } from "*.svg";
//import { renderIntoDocument } from "react-dom/test-utils";

function Chat(){
    const [show,setShow]=useState(false)

    if(show){
        return <App />
    }
    else{
  return(
    <div className="Chat">
      <div>
      <button onClick={()=>setShow(true)} id="hide">Close</button>
      
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />

      </div>
      
    </div>
    
  );
    }
}


export default Chat;
  