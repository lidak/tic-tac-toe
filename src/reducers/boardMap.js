let player = 'x';


let switchPlayer = () => {
    player = player === 'x' ? 'o' : 'x';
}

const boardMap = (state = new Array(9).fill(null), action) => {
    if (action.type === 'MAKE_MOVE') {
        let newState = state.slice();

        if (state[action.position]) {
            return newState;
        }

        newState[action.position] = player;
        switchPlayer();

        return newState;
    } else if (action.type === 'RESTART_GAME') {
        return new Array(9).fill(null);
    }

    return state;
}

export default boardMap;
