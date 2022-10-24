const markerx = [
    'O', 'X', 'O', 'X',
    'X', 'X', 'O', 'X',
    'O', 'O', 'X', 'O',
    'X', 'O', 'X', 'O',
  ];
  const calculateWinner = (squares) => {
    const lines = [
        [0,1,2],
        [1,2,3],
        [4,5,6],
        [5,6,7],
        [8,9,10],
        [9,10,11],
        [12,13,14],
        [13,14,15],
        [0,4,8],
        [1,5,9],
        [2,6,10],
        [3,7,11],
        [4,8,12],
        [5,9,13],
        [6,10,14],
        [7,11,15],
        [0,5,10],
        [5,10,15],
        [1,6,11],
        [4,9,14],
        [3,6,9],
        [6,9,12],
        [7,10,13],
        [2,5,8]
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  
  describe('Draw (4x4)', () => {
    test('if none of the players manage to get 3 slots in a row, column or diagnal', () => {
      const winner = calculateWinner(markerx)
      expect(winner).toBe(null);
    })
  })
  