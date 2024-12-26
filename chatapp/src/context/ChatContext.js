import React, { createContext, useReducer } from "react";
import chatReducer from "../reducers/chatReducer";

//Setting the Context
const ChatContext = createContext();

const initialState = {
  contacts: [],     
  messages: [],     
  activeContactId: 1, 
  initialDataLoaded: false
};

export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
