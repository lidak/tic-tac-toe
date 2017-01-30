import React from 'react';
import Cell from './cell';

let Board = ({boardMap, onCellClick}) => (
  <div className="board">
    {
      boardMap.map((cell, position) => {
        return (
          <Cell key={position}
          className="board-cell"
          value={cell}
          onClick={() => onCellClick(position)} />
        )
      })
    }
  </div>
)

export default Board;
