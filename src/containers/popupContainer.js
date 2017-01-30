import { connect } from 'react-redux'
import { restartGame, playerWon } from '../actions'
import Popup from '../components/popup'
import { selectWinner } from '../core'

let isBoardFull = (boardMap) => {
    return boardMap.indexOf(null) === -1
}

let defineText = (boardMap) => {
    let text = '',
        winner = selectWinner(boardMap)

    if (winner) {
        text = `${winner} won. Do you wanna more?`
    } else if (isBoardFull(boardMap)) {
        text = `It's draw, guys. Do you want to continue?`
    }

    return text
}


const mapStateToProps = (state, ownProps) => {
  return {
    text: defineText(state.game.boardMap),
    winner: selectWinner(state.game.boardMap)
}}

const mapDispatchToProps = ({
  onButtonClick: restartGame
})

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup)


export default BoardContainer;
