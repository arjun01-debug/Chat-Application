import React, { useState, useEffect, useRef, useContext } from "react";
import RoundedBtn from "./ButtonComponent";
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { BsFillMicFill } from "react-icons/bs";
import { defaultUser } from "../assets/imagesData";
import { getTime } from "../logic/timeFunction";
import MessageComponent from "./MessageComponent";
import ChatContext from "../context/ChatContext";
import { useIndexedDB } from "../hooks/useIndexedDB";

const ChatDetail = () => {
  const { dispatch, state } = useContext(ChatContext);
  const [selectedContact, setSelectedContact] = useState({});
  const { saveMessages } = useIndexedDB();
  const messages = state.messages;
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);


  const handleInputChange = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  };

  const handleInputSubmit = async() => {
    if (inputRef.current.value.length > 0) {
      const msg = {
        id : crypto.randomUUID(),
        content: inputRef.current.value,
        time: getTime(),
        isSentByUser: true,
        contactId : state.activeContactId
      }
      await saveMessages([msg]);
      dispatch({type : "SET_MESSAGES", payload : [...state.messages, msg]});
      inputRef.current.value = "";
      inputRef.current.focus();
      setTyping(false);
    }
  };

  useEffect(() => {
    if(state?.contacts?.length > 0){
      const contact = state.contacts.find(obj => Number(obj.id) === Number(state.activeContactId));
      setSelectedContact(contact);
    }
  }, [state])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit();
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });

  return (

    <div className="flex flex-col h-screen">
      <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
        <div className="flex items-center">
          <img
            src={defaultUser}
            alt="profile_picture"
            className="rounded-full w-[45px] h-[45px] mr-5"
          />
          <div className="flex flex-col">
            <h1 className="text-white font-medium">{selectedContact.name}</h1>
            <p className="text-[#8796a1] text-xs">online</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-[85px]">
          <RoundedBtn icon={<MdSearch />} />
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>

      <div
        className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-100"
        style={{ padding: "12px 7%" }}
      >
        {messages.map((msg) => (
          <MessageComponent
            msg={msg.content}
            time={msg.time}
            sent={msg.isSentByUser}
          />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center bg-[#202d33] w-100 h-[70px] p-2">
        <input
          type="text"
          placeholder="Type a message"
          className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#8796a1]"
          onChange={handleInputChange}
          ref={inputRef}
        />
        <span className="ml-2">
          {typing ? (
            <RoundedBtn icon={<MdSend />} onClick={handleInputSubmit} />
          ) : (
            <RoundedBtn icon={<BsFillMicFill />} />
          )}
        </span>
      </div>
    </div>
  );
}

export default ChatDetail;
