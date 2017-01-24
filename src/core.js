let areThreeValuesEqual = (arr) => {
   return (arr[0] && arr[0] === arr[1] && arr[1] === arr[2]);
};

export let selectWinner = (boardMap) => {
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
   console.log('selectWinner is called')
   return winner;
};
