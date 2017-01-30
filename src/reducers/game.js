import { selectWinner } from '../core'

let player = 'x'

let switchPlayer = () => {
    player = player === 'x' ? 'o' : 'x'
}

let clearMap = () => (
  new Array(9).fill(null)
)

/*

  I don't like in general idea of containing and calculating
  multiple state props in one reducer. But boardMap and score are
  basically dependant on a single action (makeMove).
  So I chose this approach because if split those two props into different
  reducers another difficulties appear which cause me to use some unusual and
  difficult workarounds (like accessing boardMap state prop from
  score reducer to calculate new score).

  */

const game = (state = {
    boardMap: clearMap(),
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
          boardMap: clearMap(),
          score: state.score
        };
    }

    return state;
}

export default game;
