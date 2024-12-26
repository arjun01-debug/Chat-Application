import React from "react";

const MessageComponent = ({ msg, time, sent }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-md w-fit my-1 ${
        sent ? "bg-[#005c4b] ml-auto" : "bg-[#202d33] mr-auto"
      }`}
    >
        <div
          className="flex justify-between items-end max-w-[410px] p-2"
          style={{ wordBreak: "break-word" }}
        >
            <p className="text-white text-sm mr-2">{msg}</p>
          <p className="text-[#8796a1] text-[10px] min-w-[50px]">{time}</p>
        </div>
    </div>
  );
}

export default MessageComponent;
