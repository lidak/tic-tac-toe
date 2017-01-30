import { connect } from 'react-redux'
import { makeMove } from '../actions'
import Board from '../components/board'

const mapStateToProps = (state) => ({
    boardMap: state.game.boardMap
})

const mapDispatchToProps = ({
    onCellClick: makeMove
})

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardContainer
