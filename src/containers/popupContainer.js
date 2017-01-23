import { connect } from 'react-redux';
import { restartGame } from '../actions';
import Popup from '../components/popup';

let areThreeValuesEqual = (arr) => {
   return (arr[0] && arr[0] === arr[1] && arr[1] === arr[2]);
};

let selectWinner = (boardMap) => {
    let winner;
   //Check horisontal matches
   for (let i = 0; i <= boardMap.length; i += 3) {
       if(areThreeValuesEqual([boardMap[i], boardMap[i + 1], boardMap[i + 2]])) {
           winner = boardMap[i];
       }
   }

   //Check vertical matches
   for (let i = 0; i < 3; i++) {
       if(areThreeValuesEqual([boardMap[i], boardMap[i + 3], boardMap[i + 6]])) {
           winner = boardMap[i];
       }
   }

   //Check diagonal matches
   if(areThreeValuesEqual([boardMap[0], boardMap[4], boardMap[8]]) ||
      areThreeValuesEqual([boardMap[2], boardMap[4], boardMap[6]]) ) {
       winner = boardMap[4];
   }

   return winner;
};

let isBoardFull = (boardMap) => {
    return boardMap.indexOf(null) === -1;
}

let defineText = (boardMap) => {
    let text = '',
        winner = selectWinner(boardMap);

    if (winner) {
        text = `${winner} won. Do you wanna more?`;
    } else if (isBoardFull(boardMap)) {
        text = `It's draw, guys. Do you want to continue?`;
    }
    
    return text;
}


const mapStateToProps = (state) => ({
    text: defineText(state.boardMap),
    winner: selectWinner(state.boardMap)
});

const mapDispatchToProps = ({
  onButtonClick: restartGame
});

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);


export default BoardContainer;