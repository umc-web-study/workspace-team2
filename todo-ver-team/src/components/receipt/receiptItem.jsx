import React from "react";
import { useState } from "react";
import { Item, ItemBox } from "../style/receipt/StyledReceiptBox"

const ReceiptItem = ({user, group}) => {
  const [total, setTotal] = useState(0);
  const [nowP, setNowP] = useState(0);
  const [remainP, setRemainP] = useState(total - nowP);

  async function setData() {
    setTotal();
    setNowP();
    setRemainP();

    const dt = total;
    const dnp = nowP;
    const drp = remainP

    const data = [dt, dnp, drp];
    return data;
  }

  const receiptItem = ({dt, dnp, drp}) => {
    
    return new Promise (
      <>
        <Item>
          test
        </Item>
      </>
    );
  }

  const receiptBox = async () => {
    const result = [];

    for (const data of setData()) {
      await result.push(receiptItem(data));
    }

  }

  return (
    <ItemBox>{receiptBox()}</ItemBox>
  );
}

export default ReceiptItem;