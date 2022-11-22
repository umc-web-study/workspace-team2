import { useState } from 'react';

export const useChatList = () => {
    const [chatList, setChatList] = useState([]);

    return [setChatList, chatList];
}