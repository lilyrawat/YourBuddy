import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import {Options1,Options,Options2,Options3,Options4} from "../components/Options/Options";
import LinkList from "../components/Activities/LinkList";

const config = {
  botName: "ReliefBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#6A5ACD	",
    },
    chatButton: {
      backgroundColor: "#6A5ACD",
    },
  },
  customComponents:{floating: true},
  initialMessages: [
    createChatBotMessage(`Hello, I am Emi.`),
    createChatBotMessage(`What is your name?`, {
    })
  ],
  widgets: [
    {
      widgetName: "option1",
      widgetFunc: (props) => <Options1 {...props} />,
    },
    {
      widgetName: "done",
      widgetFunc: (props) => <Options4 {...props} />,
    },
    {
      widgetName: "emotions",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options2 {...props} />,
    },
    {
      widgetName: "choices",
      widgetFunc: (props) => <Options3 {...props} />,
    },

    {
      widgetName: "Exerciselinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Breathing Exercise",
            url:
              "	https://www.youtube.com/watch?v=sJ04nsiz_M0&ab_channel=MeghanLivingstone ",
            id: 1,
          },
          {
            text: "Yoga",
            url:
              "	https://www.youtube.com/watch?v=hJbRpHZr_d0 ",
            id: 2,
          },
          {
            text: "Yoga for depression",
            url:
              "	https://www.youtube.com/watch?v=Sxddnugwu-8 ",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "peacefulsounds",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Raindrops Sound",
            url:
              "	https://www.youtube.com/watch?v=jX6kn9_U8qk ",
            id: 1,
          },
          {
            text: "Piano",
            url:
              "	https://www.youtube.com/watch?v=WJ3-F02-F_Y ",
            id: 2,
          },
          {
            text: "BTS Piano Playlist",
            url:
              "	https://www.youtube.com/watch?v=S8GpX3SAeig ",
            id: 3,
          },
        ],
      },
    },

    {
      widgetName: "Song Playlist",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Playlist 1",
            url:
              "https://open.spotify.com/playlist/5Aqwzs7ocD64E66s5D1BkE?si=4699f520e34a408e",
            id: 1,
          },
          {
            text: "Playlist 2",
            url:
              "	https://open.spotify.com/playlist/5twQ7clAiusvthu8CFnN2O?si=9a8d950a705d40eb",
            id: 2,
          },
          {
            text: "Playlist 3",
            url:
              "	https://open.spotify.com/playlist/4FrmNQvwMJ8VNqHwORD6TP?si=f6436199fb6a4038 ",
            id: 3,
          },
        ],
      },    
    },

    {
      widgetName: "Entertainment",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Video 1",
            url:
              "	https://www.youtube.com/watch?v=KBZfnt80s54&t=1s&ab_channel=AakashGupta ",
            id: 1,
          },
          {
            text: "Video 2",
            url:
              "	https://www.youtube.com/watch?v=c7QYEedjb_o&ab_channel=AbhishekUpmanyu ",
            id: 2,
          },
          {
            text: "Video 3",
            url:
              "	https://www.youtube.com/watch?v=qfxSNL5lskQ&ab_channel=RahulDua ",
            id: 3,
          },
        ],
      },
    },
 
    
  ],
};

export default config;

