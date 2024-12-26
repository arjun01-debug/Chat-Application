import React from "react";
import Chats from "./Chats";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { profile } from "../assets/imagesData";
import ButtonComponent from "./ButtonComponent";

const ContactsComponent = () => {

  return (
    <div className="flex flex-col border-r border-neutral-700 w-100 h-screen">
      
      <div className="flex justify-between items-center bg-[#202d33] h-[60px] p-3">

        <img src={profile} alt="profile_picture" className="rounded-full w-[40px]" />

        <div className="flex justify-between w-[175px]">
          <ButtonComponent icon={<MdPeopleAlt />} />
          <ButtonComponent icon={<TbCircleDashed />} />
          <ButtonComponent icon={<BsFillChatLeftTextFill />} />
          <ButtonComponent icon={<HiDotsVertical />} />
        </div>
      </div>

      <div className="flex justify-between items-center h-[60px] p-2">
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
        />
      </div>
      
      <Chats />
    </div>
  );
}

export default ContactsComponent;
