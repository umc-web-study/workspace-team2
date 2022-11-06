// import { useState, useCallback } from "react";
// import { checkCollision, STAGE_WIDTH } from "../gameHelpers";

// import { TETROMINOS, randomTetromino } from "../tetrominos";

// export const usePlayer = () => {
//   const [player, setPlayer] = useState({
//     pos: { x: 0, y: 0 },
//     tetromino: TETROMINOS[0].shape,
//     collided: false,
//   });

//   /* 블럭 모양 변경 */
//   const rotate = (matrix, dir) => {
//     // MAke the rows to become colf (transpose)
//     const rotatedTetro = matrix.map((_, index) =>
//       matrix.map(col => col[index]),
//     );
//     // Reverse each row th get a rotated matrix
//     if (dir > 0) return rotatedTetro.map(row => row.reverse());
//     return rotatedTetro.reverse();
//   }

//   const playerRotate = (stage, dir) => {
//     const clonedPlayer = JSON.parse(JSON.stringify(player));
//     clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

//     /* 블럭 겹치기 방지 */
//     const pos = clonedPlayer.pos.x;
//     let offset = 1;
//     while(checkCollision(clonedPlayer, stage, { x: 0, y: 0})) {
//       clonedPlayer.pos.x += offset;
//       offset = -(offset + (offset > 0 ? 1 : -1));
//       if (offset > clonedPlayer.tetromino[0].lenght) {
//         rotate(clonedPlayer.tetromino, -dir);
//         clonedPlayer.pos.x = pos;
//         return;
//       }
//     }

//     setPlayer(clonedPlayer);
//   }

//   /* player 위치 변경 */
//   const updatePlayerPos = ({ x, y, collided }) => {
//     setPlayer(prev => ({
//       ...prev,
//       pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
//       collided,
//     }))
//   }

//   /* player 초기화 */
//   const resetPlayer = useCallback(() => {
//     setPlayer({
//       pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
//       tetromino: randomTetromino().shape,
//       collided: false
//     })
//   }, [])

//   return [player, updatePlayerPos, resetPlayer, playerRotate];
// }

import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  function rotate(matrix, dir) {
    // Make the rows to become cols (transpose)
    const mtrx = matrix.map((_, index) => matrix.map(column => column[index]));
    // Reverse each row to get a rotaded matrix
    if (dir > 0) return mtrx.map(row => row.reverse());
    return mtrx.reverse();
  }

  function playerRotate(stage, dir) {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};