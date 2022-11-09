import React from "react";
import { StyledChatHeader } from "../style/chat/StyledChatHeader";

const ChatHeader = ({chatName, userNum }) => {
    <StyledChatHeader>
        <h5>{ chatName }</h5><br />
        <p>{ userNum }</p>
    </StyledChatHeader>
}