import React from "react";
// import { ReactSimpleChatbot } from "react-simple-chatbot";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import axios from "axios";

const steps = [
  {
    id: "1",
    message: "Hello ",
    end: true
  },
  {
    id: "2",
    user: true,
    trigger: "3"
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true
  }
];

// const theme = {
//   background: "#f5f8fb",
//   fontFamily: "Helvetica Neue",
//   headerBgColor: "#EF6C00",
//   headerFontColor: "#fff",
//   headerFontSize: "15px",
//   botBubbleColor: "#EF6C00",
//   botFontColor: "#fff",
//   userBubbleColor: "#fff",
//   userFontColor: "#4a4a4a"
// };

const ThemedExample = () => <ChatBot steps={steps} />;

export default ThemedExample;
