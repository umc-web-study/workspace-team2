import React from "react";

import ChatHeader from "./ChatHeader"
import MsgField from "./MsgField";
import SendField from "./SendField";
import SendButton from "./SendButton";

const sendMsg = () => {
    console.log("test");
};

const ChatWrapper = ({ chatName, userNum }) => (
    <section>
        <ChatHeader chatName = {chatName} userNum={userNum}></ChatHeader>
        <MsgField></MsgField>
        <SendField></SendField>
        <SendButton callback={sendMsg}></SendButton>
    </section>
);

export default ChatWrapper;