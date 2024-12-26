import React, { useContext } from "react";
import { defaultUser } from "../assets/imagesData";
import ChatContext from "../context/ChatContext";

const Chat = ({ contact, msg, time, active, index }) => {
  const {dispatch} = useContext(ChatContext);

  const handleClick = (index) => {
    dispatch({type : 'SET_ACTIVE_CONTACT_ID', payload : index});
  }

  return (
    <div
      onClick={() => handleClick(index)}
      className={`flex justify-between items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33] ${
        active ? "bg-[#202d33]" : ""
      }`}
    >
      <img
        src={defaultUser}
        alt="profile_picture"
        className="rounded-full w-[50px] mr-5"
      />

      <div className="flex justify-between border-t border-neutral-700 w-100 h-100 py-3">
        <div className="flex flex-col justify-between text-white">
          <h1 className="font-medium mb-1">{contact}</h1>
          <p className={`text-sm`}>
            {msg}
          </p>
        </div>

        <div className="flex flex-col justify-between items-end h-100 text-xs">
          <p className="text-emerald-500 min-w-[55px]">{time}</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
