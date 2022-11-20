import React from "react";
import { StyledChatHeader } from "../style/chat/StyledChatHeader";

const ChatHeader = ({ chatName, userNum }) => {
    return (
        <StyledChatHeader>
            <h3>{chatName}</h3><br />
            <p>방 인원 : {userNum}</p>
        </StyledChatHeader>
    )

}

export default ChatHeader;