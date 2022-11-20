import { useEffect, useState } from 'react';
import db from '../../firebase.js';
import firebase from 'firebase/compat/app';

export const useChatList = () => {
    const [chatList, setChatList] = useState([]);
    const [newMsg, setNewMsg] = useState();

    const sendMsg = () => {
        console.log("In custom hook", newMsg);
        let obj = {
            //createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            createdAt: new Date(),
            message: newMsg.message,
            name: newMsg.name
        }

        //db.collection('chat').add({ obj });

        let newList = chatList;
        newList.push(obj);
        setChatList(newList);
        setNewMsg(null);
    }

    return [setNewMsg, sendMsg, setChatList, chatList, newMsg];
}