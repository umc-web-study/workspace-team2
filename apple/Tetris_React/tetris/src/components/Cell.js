import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

/* 해당되는 조각에 맞춰 색깔 설정 */
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerender cell')}
  </StyledCell>
);

export default React.memo(Cell); // React.memo: cell이 바뀔 때만 rerender