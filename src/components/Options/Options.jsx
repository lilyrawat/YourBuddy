import React from "react";

import "./Options.css";

const Options1 = (props) => {
  const options = [
    {
      text: "Yes",
      handler: props.actionProvider.yes,
      id: 1,
    },
    { 
      text: "No", 
      handler: props.actionProvider.no, 
      id: 2 },

  ];
  
  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

const Options = (props) => {
  const options = [
    {
      text: "Stressed",
      handler: props.actionProvider.stress,
      id: 1,
    },
    { 
      text: "Anxious", 
      handler: props.actionProvider.anxiety, 
      id: 2 },
    { 
      text: "Depressed", 
      handler: props.actionProvider.depressed, 
      id: 3 },
      
  ];
  
  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};


const Options2 = (props) => {
  const options = [
    {
      text: "Sure",
      handler: props.actionProvider.sure,
      id: 1,
    },
    { 
      text: "Not now", 
      handler: props.actionProvider.not, 
      id: 2 },

  ];
  
  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};


const Options3 = (props) => {
  const options = [
    {
      text: "Exercise",
      handler: props.actionProvider.exercise,
      id: 1,
    },
    { 
      text: "Peaceful music", 
      handler: props.actionProvider.peace, 
      id: 2 },
    { 
      text: "Songs", 
      handler: props.actionProvider.song, 
      id: 3 },
    { 
      text: "Entertainment", 
      handler: props.actionProvider.entertainment, 
      id: 3 },

  ];
  
  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

const Options4 = (props) => {
  const options = [
    {
      text: "Try more?",
      handler: props.actionProvider.sure,
      id: 1,
    },
    { 
      text: "Maybe later", 
      handler: props.actionProvider.quit, 
      id: 2 },
  ];
  
  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};


export {Options1,Options,Options2,Options3,Options4};
