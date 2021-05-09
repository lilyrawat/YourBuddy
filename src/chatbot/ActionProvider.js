class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
//greetings 
  greet = (name) => {
    const message = this.createChatBotMessage("Hello "+name+"! Nice to meet you");
    const message2 = this.createChatBotMessage("Would you like to know about me?",{
      widget: "option1",
    });
    
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
 
  yes = () => {
    const message = this.createChatBotMessage(
      "I am a Relief Bot aka your happiness buddy to help you when you are feeling destresssed,anxious."
    ); 
    const message2 = this.createChatBotMessage("How are you feeling today?",
    {
      widget:"emotions"
    });

    this.addMessageToState(message);
    this.addMessageToState(message2);
  }

  no = () => {
    const message = this.createChatBotMessage("Okay! 😄");
    const message2 = this.createChatBotMessage("How are you feeling right now?",
    {
      widget:"emotions"
    });

    this.addMessageToState(message);
    this.addMessageToState(message2);
  }


  //emotions 
  stress = () => { 
    const message = this.createChatBotMessage("I am Sorry to hear that you are going through stress.");
    const message2=this.createChatBotMessage("At some point in our life we all go through stress and sometimes it is too much.");
    const message3= this.createChatBotMessage("Stress can make us feel unfocussed, forgetful and easily frustrated.");
    const message4 = this.createChatBotMessage( "But don't worry at all. I have some strategies that can help you. Do you wanna try some? ",
      {
        widget: "options", 
      }
    );

    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);

  };

  depressed = () => { 
    const message = this.createChatBotMessage("I am really Sorry to hear that you are going through depression. Here, take a hug from me 🤗 ");
    const message2=this.createChatBotMessage("Depression is really to deal with. It can make us lose trust in ourselves and others.");
    const message3=this.createChatBotMessage("Sometimes it can make us feel lonely and we get trapped inside our own thoughts.");
    const message4 = this.createChatBotMessage( "I am here for you. Let me suggest a few things that might be helpful to you.",
      {
        widget: "options", 
      }
    );

    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);


  };

  anxiety = () => { 
    const message = this.createChatBotMessage("I am Sorry to hear that you are dealing with anxiety.");
    const message2=this.createChatBotMessage("Life can be out of control sometimes.");
    const message3 = this.createChatBotMessage( "I am here for you. And I have some activities which can make you feel less anxious. Would you like to try them?",
      {
        widget: "options", 
      }
    );

    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
  };

  sure =() => {
    const message= this.createChatBotMessage("Thank you. Here's a list of my activities.");
    const message2= this.createChatBotMessage("Choose an activity which you might wanna try.",
    {
      widget: "choices",
    });

    this.addMessageToState(message);
    this.addMessageToState(message2); 

  }
  
  not =() => {
    const message= this.createChatBotMessage("I understand. You don't have to talk to me if you don't want to.");
    const message2= this.createChatBotMessage("Please know that I am here for you and you can reach out to me whenever you want.😊");

    this.addMessageToState(message);
    this.addMessageToState(message2);
  }
  
  exercise =() => {
    const message= this.createChatBotMessage("Great! Here are some recommended exercises for you.",
    {
      widget: "Exerciselinks",
    });
    const message2=this.createChatBotMessage("Tell me when you are done with the exercise.",{
      widget: "done",
    });
    this.addMessageToState(message);
    this.addMessageToState(message2);

  }

  peace =() => {
    const message= this.createChatBotMessage("Great! Here are some peaceful music for you.",
    {
      widget: "peacefulsounds",
    });

    const message2=this.createChatBotMessage("Tell me when you are done.",{
      widget:"done",
    });

    this.addMessageToState(message);
    this.addMessageToState(message2);
  }

  song =() => {
    const message= this.createChatBotMessage("Great! Here are some song playlist for you.",
    {
      widget: "Song Playlist",
    });

    const message2=this.createChatBotMessage("Tell me when you are done.");

    this.addMessageToState(message);
    this.addMessageToState(message2);
  }

  entertainment =() => {
    const message= this.createChatBotMessage("Great! Here are some standup comedy videos for you.",
    {
      widget: "Entertainment",
    });

    const message2=this.createChatBotMessage("Tell me when you are done.");

    this.addMessageToState(message);
    this.addMessageToState(message2);
  }

  done = () => {
    const message = this.createChatBotMessage("Do you want to try more activities?",{
      widget: "done",
    });
    this.addMessageToState(message);
  };
  
  quit = () => {
    const message = this.createChatBotMessage("It was great fun, I hope you come again!");
    this.addMessageToState(message);
  };  


  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
