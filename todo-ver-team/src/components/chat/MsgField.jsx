import React from "react";
import { StyledMsgField } from "../style/chat/StyledMsgField";
import MsgBox from "./MsgBox";

let index = 0;

const MsgField = (props) => {

    console.log(props);
    return (
        <StyledMsgField>
            {
                props.chatList.map(chat => (
                    //console.log(index);
                    <MsgBox msg={chat}></MsgBox>
                ))
            }
        </StyledMsgField>
    )
};

export default MsgField;