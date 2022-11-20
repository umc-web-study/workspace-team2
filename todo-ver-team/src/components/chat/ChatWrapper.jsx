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

const ChatWrapper =  (props) => {

    const [setNewMsg, sendMsg, setChatList, chatList] = useChatList();  
    
    useEffect(() => {
        if(check){
            setChatList(dum);
            check = !check;
        }
        
        console.log(chatList);
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
       }, [chatList]);
    
    const catchMsg = useCallback(() => {
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
    }, [chatList]);

    return (
        <section>
            <ChatHeader chatName={props.chatName} userNum={props.userNum}></ChatHeader>
            <MsgField chatList={dum}></MsgField>
            <StyledSendField id="msgBox"></StyledSendField>
            <StyledSendButton type="submit" onClick={() => {catchMsg()}}>전송</StyledSendButton>
        </section>
    );
};

export default ChatWrapper;
//<ChatWrapper chatName="Test" userNum={1} userName="Test" roomNum={0}></ChatWrapper>