import React from "react";
import ChatBot from "react-simple-chatbot";
import random from "randomstring";

export default function Checker() {
  const [current, setCurrent] = React.useState({ dataa: "hello" });
  React.useEffect(() => {
    setCurrent({ ...current, ...{ dataa: random.generate(5) } });
  }, []);
  const { dataa } = current;
  const value = [
    {
      id: "staticStep",
      component: <Button />,
      waitAction: true
    },
    {
      id: "dynamicallyReachedStep",
      message: dataa
    }
  ];
  return (
    <div>
      <ChatBot steps={value} />
    </div>
  );
}
const Button = props => (
  <button
    onClick={() => props.triggerNextStep({ trigger: "dynamicallyReachedStep" })}
  >
    Click me to go to the next step
  </button>
);
