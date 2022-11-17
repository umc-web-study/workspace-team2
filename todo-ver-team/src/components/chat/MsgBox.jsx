import React from "react";
import { StyledMsgBox } from "../style/chat/StyledMsgBox";

const MsgBox = ({msg}) => (
    <StyledMsgBox>
        <p id={ 'name' }>{ msg.name }</p>
        <p id={ 'time' }>{ msg.createdAt }</p>
        <p id={ 'sended' }>{ msg.message }</p>
    </StyledMsgBox>
);

export default MsgBox;