import { useEffect, useState } from 'react';
import db from '../../config/chatFirebaseConfig';
import firebase from 'firebase/compat/app';

export const useChatList = () => {
    const [chatList, setChatList] = useState([]);
    const [newMsg, setNewMsg] = useState(null);

    useEffect( () => {
     db.collection('chat')
     .orderBy('createdAt', 'desc')
     .onSnapShot(d => {
        setChatList(d.docs.map(doc => ({id:doc.id, message:doc.data()})))
     })   
    })

    const sendMsg = (e) => {
        e.preventDefault();

        let obj = {
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            message: newMsg.message,
            room: newMsg.roomNum,
            user: newMsg.userName
        }

        db.collection('chat').add({ obj });

        setChatList([...chatList, { obj }]);
        setNewMsg(null);
    }

    return [setNewMsg, sendMsg, chatList];
}