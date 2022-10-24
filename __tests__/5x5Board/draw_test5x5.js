const markerx = [
   
    'O', 'X', 'O', 'X', 'O',
    'X', 'O', 'X', 'O', 'X',
    'X', 'O', 'X', 'O', 'X',
    'O', 'X', 'O', 'X', 'O',
    'O', 'X', 'O', 'X', 'O'
  ];
  const calculateWinner = (squares) => {
    const lines = [
        [0,1,2],
        [1,2,3],
        [2,3,4],
        [5,6,7],
        [6,7,8],
        [7,8,9],
        [10,11,12],
        [11,12,13],
        [12,13,14],
        [15,16,17],
        [16,17,18],
        [17,18,19],
        [20,21,22],
        [21,22,23],
        [22,23,24],
        [0,5,10],
        [1,6,11],
        [2,7,12],
        [3,8,13],
        [4,9,14],
        [5,10,15],
        [6,11,16],
        [7,12,17],
        [8,13,18],
        [9,14,19],
        [10,15,20],
        [11,16,21],
        [12,17,22],
        [13,18,23],
        [14,19,24],
        [0,6,12],
        [6,12,18],
        [12,18,24],
        [5,11,17],
        [11,17,23],
        [10,16,22],
        [1,7,13],
        [7,13,19],
        [2,8,14],
        [4,8,12],
        [8,12,16],
        [12,16,20],
        [3,7,11],
        [7,11,15],
        [2,6,10],
        [9,13,17],
        [13,17,21],
        [14,18,22]
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  
  describe('Draw (5x5)', () => {
    test('if none of the players manage to get 3 slots in a row, column or diagnal', () => {
      const winner = calculateWinner(markerx)
      expect(winner).toBe(null);
    })
  })
  