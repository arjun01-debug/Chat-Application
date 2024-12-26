import React, { useContext } from "react";
import Chat from "./Chat";
import { ImFolderDownload } from "react-icons/im";
import ChatContext from "../context/ChatContext";
import { formatTimeWithPeriod } from "../logic/timeFunction";

const Chats = () => {
  const { state } = useContext(ChatContext);

  return (
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      <div className="flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]">
        <div className="flex justify-around items-center w-[150px]">
          <span className="text-emerald-500 text-lg">
            <ImFolderDownload />
          </span>
          <h1 className="text-white">Archived</h1>
        </div>
        <p className="text-emerald-500 text-xs font-light">7</p>
      </div>

      {state.contacts.map((chat, i) => {
        return (
          <Chat
            contact={chat.name}
            msg={chat.msg}
            time={formatTimeWithPeriod(chat.time)}
            active={i+1 === state.activeContactId}
            index = {i+1}
          />
        );
      })}
    </div>
  );
}

export default Chats;
