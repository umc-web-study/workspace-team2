import React, { useState } from "react";

import ChatHeader from "./ChatHeader"
import MsgField from "./MsgField";
import { StyledSendField } from "../style/chat/StyledSendField";
import { StyledSendButton } from "../style/chat/StyledSendButton";
import { useChatList } from "../../hooks/chat/useChatList";

const ChatWrapper = (props) => {

    const [setNewMsg, sendMsg, chatList] = useChatList();

    const catchMsg = () => {
        let box = document.querySelector("#msgBox");
        let msg = box.innerHTML;
        let current = new Date();

        let msgObj = {
            createdAt: current,
            message: msg,
            room: props.roomNum,
            name: props.userName
        };

        setNewMsg(msgObj);
        sendMsg();
    };

    return (
        <section>
            <ChatHeader chatName={props.chatName} userNum={props.userNum}></ChatHeader>
            <MsgField chatList={chatList}></MsgField>
            <StyledSendField id="msgBox"></StyledSendField>
            <StyledSendButton type="submit" onClick={catchMsg}>전송</StyledSendButton>
        </section>
    );
};

export default ChatWrapper;