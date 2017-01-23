import React from 'react';

let Cell = ({winner, onButtonClick, text}) => (
    <div className={text ? 'popup-container' : 'popup-container hidden'}>
        <div className='popup'>
            <div className="text">{text}</div>
            <button onClick={onButtonClick}>Play Again</button>
        </div>
    </div>
)

export default Cell;