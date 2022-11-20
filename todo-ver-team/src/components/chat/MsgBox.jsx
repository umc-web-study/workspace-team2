import React from "react";
import { StyledMsgBox } from "../style/chat/StyledMsgBox";

const MsgBox = ({msg}) => {
    console.log(msg);

    return (
    <StyledMsgBox>
        <p id={ 'name' }>{ msg.name }</p>
        <p id={ 'time' }>{ msg.createdAt.toString() }</p>
        <p id={ 'sended' }>{ msg.message }</p>
    </StyledMsgBox>
    );
};

export default MsgBox;