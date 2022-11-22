import React, { useState, useEffect, useCallback } from "react";

import ChatHeader from "./ChatHeader"
import MsgField from "./MsgField";
import { StyledSendField } from "../style/chat/StyledSendField";
import { StyledSendButton } from "../style/chat/StyledSendButton";
import { useChatList } from "../../hooks/chat/useChatList";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, where, getDocs, addDoc, orderBy, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrDJc-1jSxUh6YEpkknJkdMf5cpyQfaLs",
    authDomain: "todogroup-71a92.firebaseapp.com",
    databaseURL: "https://todogroup-71a92-default-rtdb.firebaseio.com",
    projectId: "todogroup-71a92",
    storageBucket: "todogroup-71a92.appspot.com",
    messagingSenderId: "77365565939",
    appId: "1:77365565939:web:cb2f43e50f420d6783da86"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let dum = [
    {
        name: "Test1",
        createdAt: new Date(),
        message: "Test1",
        room: 0
    },
    {
        name: "Test2",
        createdAt: new Date(),
        message: "Test2",
        room: 0
    },
    {
        name: "Test3",
        createdAt: new Date(),
        message: "Test3",
        room: 0
    },
    {
        name: "Test4",
        createdAt: new Date(),
        message: "Test4",
        room: 0
    }
];

let temp = [];
let currentMsg;
let check = true;

const ChatWrapper = (props) => {

    const [setChatList, chatList] = useChatList();

    async function chatInit() {

        const querySnapshot = await getDocs(collection(db, "chat"), where("room", "==", props.roomNum), orderBy("createdAt", "desc"));
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.createdAt)
            temp.push(doc.data());
        });

        setChatList(temp);
        console.log("At init", chatList);
    };

    async function chatInsert(msgObj) {

        try {
            const docRef = await addDoc(collection(db, "chat"), msgObj);
            console.log("Document written with ID: ", docRef.id);

            temp = [];
            const querySnapshot = await getDocs(collection(db, "chat"), where("room", "==", props.roomNum), orderBy("createdAt", "desc"));
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                console.log(doc.createdAt)
                temp.push(doc.data());
            });

            setChatList(temp);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    function getOtherChat() {

    };

    useEffect(() => {
        if (check) {
            chatInit();
            check = !check;
        }
    }, [chatList]);

    const transferMsg = useCallback(() => {
        let msgObj = {
            name: props.userName,
            createdAt: new serverTimestamp(),
            message: currentMsg,
            room: props.roomNum
        };
        chatInsert(msgObj);
    });

    const catchMsg = useCallback((event) => {
        currentMsg = event.target.value;
        console.log(currentMsg);
    });

    return (
        <section>
            <ChatHeader chatName={props.chatName} userNum={props.userNum}></ChatHeader>
            <MsgField chatList={chatList}></MsgField>
            <StyledSendField id="msgBox" onChange={(event) => { catchMsg(event) }}></StyledSendField>
            <StyledSendButton type="submit" onClick={() => { transferMsg() }}>전송</StyledSendButton>
        </section>
    );
};

export default ChatWrapper;
//<ChatWrapper chatName="Test" userNum={1} userName="Test" roomNum={0}></ChatWrapper>