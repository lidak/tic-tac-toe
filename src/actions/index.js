export const makeMove = (position) => {
    return {
        type: 'MAKE_MOVE',
        position
    }
};

export const restartGame = () => {
    return {
        type: 'RESTART_GAME'
    }
};