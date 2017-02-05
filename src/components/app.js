import React from 'react'

import BoardContainer from '../containers/boardContainer'
import PopupContainer from '../containers/popupContainer'
import ScoreBoardContainer from '../containers/scoreBoardContainer'
import List from '../containers/someList'

const Game = () => (
    <div>
      <ScoreBoardContainer />
      <List />
      <BoardContainer />
      <PopupContainer />
    </div>
)

export default Game
