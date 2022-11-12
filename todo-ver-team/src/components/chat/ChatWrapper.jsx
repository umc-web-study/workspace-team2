import React, {useState} from "react";

import ChatHeader from "./ChatHeader"
import MsgField from "./MsgField";
import SendField from "./SendField";
import SendButton from "./SendButton";

const [chatList, setChatList] = useState();

const sendMsg = () => {
    msgAsync();
};

async function msgAsync() {
    await msgCatcher();
}

function msgCatcher() {
    let box = document.querySelector("#msgBox");
    let msg = box.innerHTML;
    let user = "test";
    let current = new Date();

    let msgObj = {
        name: user,
        time: current,
        sended: msg
    };

    setChatList(msgObj);
}

const ChatWrapper = ({ chatName, userNum}) => (
    

    <section>
        <ChatHeader chatName = {chatName} userNum={userNum}></ChatHeader>
        <MsgField chatList={ chatList }></MsgField>
        <SendField></SendField>
        <SendButton callback={sendMsg}></SendButton>
    </section>
);

export default ChatWrapper;