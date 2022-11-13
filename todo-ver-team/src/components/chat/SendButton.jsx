import React from "react";
import { StyledSendButton } from "../style/chat/StyledSendButton";

const SendButton = ({ callback }) => (
    <StyledSendButton onClick={callback}>전송</StyledSendButton>
);

export default SendButton;