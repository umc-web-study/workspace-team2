import React from "react";
import { StyledMsgField } from "../style/chat/StyledMsgField";
import MsgBox from "./MsgBox";

let index;

const MsgField = ({ chatList }) => (
    <StyledMsgField>
        chatList.map(function(){
            <MsgBox msg={chatList[index]}></MsgBox>
        })
    </StyledMsgField>
);

export default MsgField;