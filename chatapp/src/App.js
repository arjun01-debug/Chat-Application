import MainChatComponent from "./components/MainChatComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useContext } from "react";
import ChatContext from "./context/ChatContext";
import { useIndexedDB } from "./hooks/useIndexedDB";
import { preloadedContacts, preloadedMessages } from "./data/initialData";

const App = () => {
  const { dispatch, state } = useContext(ChatContext);
  const { saveContacts, saveMessages, getContacts, getMessages } = useIndexedDB();

  //filling some initial data in the indexed db
  useEffect(() => {
    const initializeData =  async () => {
      await saveContacts(preloadedContacts);
      await saveMessages(preloadedMessages);
      dispatch({type : 'SET_INITIAL_STATE'});
    }
    initializeData();
  }, []);

  //updating global state as per the changes
  useEffect(() => {
    const setData = async() => {
      if(state.initialDataLoaded){
        const existingContacts = await getContacts();
        dispatch({ type: "SET_CONTACTS", payload: existingContacts });
        const existingMessages = await getMessages(state.activeContactId);
        dispatch({type : "SET_MESSAGES", payload : existingMessages})
      }
    }
    setData();
  }, [state.initialDataLoaded, state.activeContactId])

  return (
    <MainChatComponent/>
  );
};

export default App;
