import React from "react";
import { StyledMsgBox } from "../style/chat/StyledMsgBox";

const MsgBox = ({msg}) => (
    <StyledMsgBox>
        <p id={ 'name' }>{ msg.name }</p>
        <p id={ 'time' }>{ msg.time }</p>
        <p id={ 'sended' }>{msg.sended}</p>
    </StyledMsgBox>
);

export default MsgBox;