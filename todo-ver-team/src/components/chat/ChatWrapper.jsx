import React, { useState, useEffect, useCallback } from "react";

import ChatHeader from "./ChatHeader"
import MsgField from "./MsgField";
import { StyledSendField } from "../style/chat/StyledSendField";
import { StyledSendButton } from "../style/chat/StyledSendButton";
import { useChatList } from "../../hooks/chat/useChatList";

import db from '../../firebase.js';
import { collection,  onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";

const dum = [
    {
        name: "Test1",
        createdAt: new Date(),
        message: "Test1"
    },
    {
        name: "Test2",
        createdAt: new Date(),
        message: "Test2"
    },
    {
        name: "Test3",
        createdAt: new Date(),
        message: "Test3"
    },
    {
        name: "Test4",
        createdAt: new Date(),
        message: "Test4"
    }
];

let check = true;
let currentMsg;

const ChatWrapper =  (props) => {

    const [setNewMsg, sendMsg, setChatList, chatList, newMsg] = useChatList();  
    
    useEffect(() => {
        setChatList(dum);
          
        console.log("At init", chatList);
        /*const chatRef = collection(db, "chat");
        const q = query(chatRef, where("room", "==", props.roomNum));
        
        onSnapshot(q, (QuerySnapshot) => {
            const chats = [];

            QuerySnapshot.forEach((doc) => {
                chats.push(doc.data());
            });

            setChatList(chats);
            console.log(chats);
        })*/
       }, []);
    
    const trnasferMsg = useCallback(() => {
        let msgObj = {
            createdAt: new Date(),
            message: currentMsg,
            name: props.userName
        };

        console.log("in transferMsg", msgObj);
        setNewMsg(msgObj);

        console.log("in transferMsg", newMsg);
        sendMsg();
    }, []);

    const catchMsg = useCallback((event) => {
        currentMsg = event.target.value;
        console.log(currentMsg);
    }, []);

    return (
        <section>
            <ChatHeader chatName={props.chatName} userNum={props.userNum}></ChatHeader>
            <MsgField chatList={chatList}></MsgField>
            <StyledSendField id="msgBox" onChange={(event) => {catchMsg(event)}}></StyledSendField>
            <StyledSendButton type="submit" onClick={() => {trnasferMsg()}}>전송</StyledSendButton>
        </section>
    );
};

export default ChatWrapper;
//<ChatWrapper chatName="Test" userNum={1} userName="Test" roomNum={0}></ChatWrapper>