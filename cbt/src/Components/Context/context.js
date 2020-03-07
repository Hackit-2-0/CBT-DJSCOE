import React from "react";
import { func } from "prop-types";

const context = React.createContext({
  pres: [],
  addChat: () => {}
});

const chatReducer = (state, action) => {
  switch (action.type) {
    case "Food":
      return {
        ...state,
        pres: action.payload
      };
  }
};

function ChatProvider(props) {
  const [state, dispatch] = React.useReducer(chatReducer, {});
  const addChat = data => {
    dispatch({
      type: "chat",
      payload: data
    });
  };
  return (
    <context.Provider
      value={{
        pres: state.pres,
        addChat
      }}
      {...props}
    />
  );
}

export { ChatProvider, context };
