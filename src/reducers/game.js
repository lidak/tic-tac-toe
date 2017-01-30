import { selectWinner } from '../core'

let player = 'x';

let switchPlayer = () => {
    player = player === 'x' ? 'o' : 'x';
}

const game = (state = {
    boardMap: new Array(9).fill(null),
    score: {
      x: 0,
      y: 0
    }
  }, action) => {
    let newScore = Object.assign({}, state.score)
    if (action.type === 'MAKE_MOVE') {
        let newMap = state.boardMap.slice();
        let winner;

        if (state.boardMap[action.position]) {
            return newMap;
        }

        newMap[action.position] = player;
        winner = selectWinner(newMap);

        if (winner) {
            ++newScore[winner]
        }

        switchPlayer();

        return {
          boardMap: newMap,
          score: newScore
        };
    } else if (action.type === 'RESTART_GAME') {
        return {
          boardMap: new Array(9).fill(null),
          score: state.score
        };
    }

    return state;
}

export default game;
