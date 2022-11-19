import React from "react";
import ReceiptItem from "./receiptItem";

import {Box} from "../style/receipt/StyledReceiptBox";

const ReceiptBox = ({user, group}) => {

  return (
    <Box>
      <ReceiptItem user={user} group={group} />
    </Box>
  );
}

export default ReceiptBox;