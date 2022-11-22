import React from "react";
import { StyledMsgField } from "../style/chat/StyledMsgField";
import MsgBox from "./MsgBox";

const MsgField = (props) => {

    console.log(props);

    return (
        <StyledMsgField>
            {
                props.chatList.map(chat => (
                    <MsgBox msg={chat}></MsgBox>
                ))
            }
        </StyledMsgField>
    )
};

export default MsgField;