import React from "react";
import { useState } from "react";
import { Item, ItemBox } from "../style/receipt/StyledReceiptBox"

const ReceiptItem = ({user, group}) => {
  const [total, setTotal] = useState(0);
  const [nowP, setNowP] = useState(0);
  const [remainP, setRemainP] = useState(total - nowP);

  const receiptBox = ({tp, np, rp}) => {
    const result = [];
    const items = [];

    for (let i = 0; i < 5; i++) {
      items.push(
        <Item>
          
        </Item>
      )
    }

    return result;
  }

  return (
    <ItemBox>{receiptBox(total, nowP, remainP)}</ItemBox>
  );
}

export default ReceiptItem;