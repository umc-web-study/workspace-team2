import React from "react";
import { StyledMsgBox } from "../style/chat/StyledMsgBox";

const MsgBox = ({msg}) => {
    return (
    <StyledMsgBox>
        <p id={ 'name' }>{ msg.name }</p>
        <p id={ 'time' }>{ (new Date(msg.createdAt.seconds*1000)).toString() }</p>
        <p id={ 'sended' }>{ msg.message }</p>
    </StyledMsgBox>
    );
};

export default MsgBox;