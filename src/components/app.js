import React from 'react';
import BoardContainer from '../containers/boardContainer'
import PopupContainer from '../containers/popupContainer'
import ScoreBoardContainer from '../containers/scoreBoardContainer'

const Game = () => (
    <div>
      <ScoreBoardContainer />
      <BoardContainer />
      <PopupContainer />
    </div>
)

export default Game
