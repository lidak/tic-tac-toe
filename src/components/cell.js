import React from 'react';

let Cell = ({onClick, value}) => (
    <div className="board-cell" onClick={onClick}>{value}</div>
)

export default Cell;